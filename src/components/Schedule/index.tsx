import React, { useState, useMemo, useEffect } from 'react';

// ─── Component types ──────────────────────────────────────────────────────────

type SessionProps = {
  title: string;
  speaker?: string;
  speaker2?: string;
  category?: string;
  url?: string;
  associatedSpeakers?: any;
};

type TimeSlot = {
  time: string;
  highlighted?: boolean;
  sessions: SessionProps[];
  session?: any;
};

type ScheduleDay = {
  date: string;
  timezone?: string;
  slots: TimeSlot[];
};

type TrainingCategory = {
  id: string;
  label: string;
  days: ScheduleDay[];
};

type ScheduleConfig = {
  categories: TrainingCategory[];
};

type Props = {
  children?: React.ReactNode;
  className?: string;
  agenda: any;
  location?: string; // e.g. 'boston' | 'barcelona' | 'virtual'
};

// ─── Timezone config ──────────────────────────────────────────────────────────

type TzOption = {
  zone: string; // IANA timezone identifier
  city: string;
  label: string; // e.g. "Boston, New York — EDT (UTC-4)"
  offsetMins: number; // offset from UTC at the schedule's date
  isLocal?: boolean;
};

// Cities offered in the picker. Order here doesn't matter — the list is sorted
// west → east by actual UTC offset on the day of the event.
const TIMEZONE_CITIES: { zone: string; city: string }[] = [
  { zone: 'America/Los_Angeles', city: 'Los Angeles' },
  { zone: 'America/Denver', city: 'Denver' },
  { zone: 'America/Chicago', city: 'Chicago' },
  { zone: 'America/New_York', city: 'Boston, New York' },
  { zone: 'Europe/London', city: 'London' },
  { zone: 'Europe/Madrid', city: 'Barcelona, Paris' },
  { zone: 'Asia/Kolkata', city: 'Mumbai' },
  { zone: 'Asia/Singapore', city: 'Singapore' },
  { zone: 'Australia/Sydney', city: 'Sydney' },
];

// The `timezone` field on a Sanity agenda section tells us which wall clock the
// authored start/end times belong to. Map it onto a real IANA zone so that
// daylight saving is handled for us.
const SOURCE_ZONES: Record<string, string> = {
  est: 'America/New_York',
  cet: 'Europe/Madrid',
  cest: 'Europe/Madrid',
};

const DEFAULT_SOURCE_ZONE = 'America/New_York';

// ─── Timezone helpers ─────────────────────────────────────────────────────────

const partsIn = (instant: Date, timeZone: string): Record<string, string> => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(instant);
  const out: Record<string, string> = {};
  for (const { type, value } of parts) out[type] = value;
  return out;
};

// Offset (in minutes) of `timeZone` from UTC at a given instant. DST aware.
const offsetMinutesAt = (instant: Date, timeZone: string): number => {
  const p = partsIn(instant, timeZone);
  const asUtc = Date.UTC(
    Number(p.year),
    Number(p.month) - 1,
    Number(p.day),
    Number(p.hour) % 24,
    Number(p.minute),
    Number(p.second)
  );
  return (asUtc - instant.getTime()) / 60000;
};

// A wall-clock time ("2026-03-10", 9 * 60) in `timeZone` → the UTC instant.
const zonedTimeToInstant = (isoDate: string, minutes: number, timeZone: string): Date | null => {
  const [year, month, day] = isoDate.split('-').map(Number);
  if (!year || !month || !day) return null;
  const naive = Date.UTC(year, month - 1, day) + minutes * 60000;
  // Two passes: the first offset guess can be wrong right on a DST boundary.
  let ts = naive - offsetMinutesAt(new Date(naive), timeZone) * 60000;
  ts = naive - offsetMinutesAt(new Date(ts), timeZone) * 60000;
  return new Date(ts);
};

// "9AM" / "9:30AM", matching the original formatting.
const formatInZone = (instant: Date, timeZone: string): string => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(instant);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '';
  const minute = get('minute');
  const period = get('dayPeriod').toUpperCase();
  return minute === '00' ? `${get('hour')}${period}` : `${get('hour')}:${minute}${period}`;
};

const dayKeyInZone = (instant: Date, timeZone: string): string => {
  const p = partsIn(instant, timeZone);
  return `${p.year}-${p.month}-${p.day}`;
};

const formatUtcOffset = (offsetMins: number): string => {
  const sign = offsetMins < 0 ? '-' : '+';
  const abs = Math.abs(offsetMins);
  const h = Math.floor(abs / 60);
  const m = abs % 60;
  return m === 0 ? `UTC${sign}${h}` : `UTC${sign}${h}:${String(m).padStart(2, '0')}`;
};

// Short zone name ("EDT", "BST") where the platform gives us a real
// abbreviation, otherwise just the UTC offset.
const zoneAbbreviation = (instant: Date, timeZone: string): string | null => {
  try {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'short' }).formatToParts(
      instant
    );
    const name = parts.find((p) => p.type === 'timeZoneName')?.value ?? '';
    return /^[A-Z]{2,5}$/.test(name) ? name : null;
  } catch {
    return null;
  }
};

const buildTzOption = (zone: string, city: string, referenceInstant: Date): TzOption | null => {
  let offsetMins: number;
  try {
    offsetMins = offsetMinutesAt(referenceInstant, zone);
  } catch {
    return null; // unknown IANA zone on this platform
  }
  const abbr = zoneAbbreviation(referenceInstant, zone);
  const offsetLabel = formatUtcOffset(offsetMins);
  return {
    zone,
    city,
    offsetMins,
    label: `${city} — ${abbr ? `${abbr} (${offsetLabel})` : offsetLabel}`,
  };
};

const cityFromZone = (zone: string): string =>
  (zone.split('/').pop() ?? zone).replace(/_/g, ' ');

// Midday UTC on a given calendar date — a safe point to sample that day's
// UTC offsets from, whichever zone we ask about.
const isoNoonInstant = (isoDate?: string): Date | null => {
  const [year, month, day] = (isoDate ?? '').split('-').map(Number);
  return year && month && day ? new Date(Date.UTC(year, month - 1, day, 12)) : null;
};

const detectBrowserZone = (): string | null => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    return null;
  }
};

// Parse a raw time string like "0900" or "900" into total minutes since midnight
const parseRawMinutes = (raw?: string): number | null => {
  if (!raw || raw.length < 3) return null;
  const padded = raw.padStart(4, '0');
  const h = parseInt(padded.slice(0, 2), 10);
  const m = parseInt(padded.slice(2), 10);
  return h * 60 + m;
};

// ─── Sanity → ScheduleConfig transform ────────────────────────────────────────

const formatDate = (dateStr?: string): string => {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

// Build a slot but preserve raw start/end minutes for tz conversion
const toTimeSlot = (item): TimeSlot & { _startMins: number | null; _endMins: number | null } => {
  return {
    time: '', // computed later in the viewer's timezone
    _startMins: parseRawMinutes(item?.startTime),
    _endMins: parseRawMinutes(item?.endTime),
    title: item.title,
    externalLink: item?.externalLink,
    bodycopy: item?.bodycopy,
    tags: item?.tags ?? [],
    isHighlighted: item.isHighlighted,
    associatedEvents: item?.associatedEvents,
    highlighted: item?.tags?.includes('highlight'),
    sessions: [,],
  };
};

const toScheduleDay = (section): ScheduleDay & { _isoDate?: string; _sourceZone: string } => ({
  date: formatDate(section.date),
  timezone: section.timezone,
  _isoDate: section.date,
  _sourceZone: SOURCE_ZONES[section.timezone] ?? DEFAULT_SOURCE_ZONE,
  slots: (section.agendaItems ?? []).map(toTimeSlot),
});

const transformAgenda = (agenda): ScheduleConfig => ({
  categories: [
    { id: 'summit',    label: 'Summit',            sections: agenda.summitAgenda },
    { id: 'hackathon', label: 'Hackathon',          sections: agenda.hackathonAgenda },
    { id: 'beginner',  label: 'Beginner Training',  sections: agenda.beginnerTrainingAgenda },
    { id: 'advanced',  label: 'Advanced Training',  sections: agenda.advancedTrainingAgenda },
  ]
    .filter((cat) => cat.sections?.length)
    .map(({ id, label, sections }) => ({
      id,
      label,
      days: (sections ?? []).map(toScheduleDay),
    })),
});

// Render a slot's start/end in the viewer's timezone, flagging the rare case
// where the session lands on a different calendar day for them.
const computeSlotTime = (
  slot: { _startMins: number | null; _endMins: number | null },
  isoDate: string | undefined,
  sourceZone: string,
  targetZone: string
): string => {
  if (slot._startMins == null) return '';

  // No date on the section — we can't convert, so show the authored times as-is.
  const startInstant = isoDate ? zonedTimeToInstant(isoDate, slot._startMins, sourceZone) : null;
  if (!startInstant) {
    const raw = (mins: number) => formatInZone(new Date(mins * 60000), 'UTC');
    return slot._endMins == null
      ? raw(slot._startMins)
      : `${raw(slot._startMins)} – ${raw(slot._endMins)}`;
  }

  const start = formatInZone(startInstant, targetZone);
  const endInstant =
    slot._endMins == null ? null : zonedTimeToInstant(isoDate, slot._endMins, sourceZone);
  const time = endInstant ? `${start} – ${formatInZone(endInstant, targetZone)}` : start;

  const shownDay = dayKeyInZone(startInstant, targetZone);
  if (shownDay === isoDate) return time;
  return `${time} (${shownDay > isoDate ? '+1 day' : '-1 day'})`;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const ScheduleHeader: React.FC<{
  categories: TrainingCategory[];
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
  timezones: TzOption[];
  selectedZone: string;
  onTzChange: (zone: string) => void;
}> = ({ categories, selectedCategoryId, onCategoryChange, timezones, selectedZone, onTzChange }) => (
  <div className="pb-10 bg-black text-white monospace flex flex-col sm:flex-row w-full mb-16 gap-4">
    <div className="container-xl w-full">
      <div className="flex flex-col md:flex-row flex-wrap gap-2 justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`monospace px-4 py-1 md:py-2 border transition-all duration-300 ${
                selectedCategoryId === cat.id
                  ? 'bg-nextflow border-nextflow text-white'
                  : 'bg-transparent border-white hover:bg-white hover:text-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timezone selector */}
        <div className="mt-10  md:mt-0 flex flex-col md:flex-row md:items-center gap-2 text-sm">
          <label htmlFor="tz-select" className="uppercase tracking-wider text-xs opacity-70 whitespace-nowrap">
            Timezone
          </label>
          <select
            id="tz-select"
            value={selectedZone}
            onChange={(e) => onTzChange(e.target.value)}
            className="rounded-none monospace bg-black border border-white text-white px-3 py-1 md:py-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer appearance-none pr-8"
            style={{ outline: 'none', borderRadius: 0 }}
            onFocus={e => { e.currentTarget.style.outline = '2px solid #31C9AC'; e.currentTarget.style.borderRadius = '0'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
          >
            {timezones.map((tz) => (
              <option key={tz.zone} value={tz.zone} style={{ background: '#000' }}>
                {tz.label}{tz.isLocal ? ' (your timezone)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const AllSchedules: React.FC<Props> = ({ children, className, agenda, location }) => {
  const config = useMemo(() => transformAgenda(agenda), [agenda]);

  const getInitialCategory = (): string => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const match = config.categories.find((cat) => cat.id === hash);
      return match ? hash : config.categories[0]?.id ?? '';
    }
    return config.categories[0]?.id ?? '';
  };

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(getInitialCategory);

  const selectedCategory =
    config.categories.find((cat) => cat.id === selectedCategoryId) ??
    config.categories[0];

  // Offsets are evaluated on the day of the event, not today, so the labels and
  // ordering reflect whether DST is in force while the summit is running.
  const referenceInstant = useMemo(() => {
    const firstIso = config.categories
      .flatMap((cat) => cat.days as any[])
      .map((day) => day?._isoDate)
      .find(Boolean);
    return isoNoonInstant(firstIso) ?? new Date();
  }, [config]);

  const scheduleZone =
    ((selectedCategory?.days?.[0] as any)?._sourceZone as string | undefined) ?? DEFAULT_SOURCE_ZONE;

  const [browserZone, setBrowserZone] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<string>(scheduleZone);
  const [tzTouched, setTzTouched] = useState(false);

  // Detect after mount: reading the browser timezone during render would not
  // match what was rendered on the server.
  useEffect(() => {
    const detected = detectBrowserZone();
    if (!detected) return;
    setBrowserZone(detected);
    if (!tzTouched) setSelectedZone(detected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timezones = useMemo(() => {
    const options = TIMEZONE_CITIES.map(({ zone, city }) =>
      buildTzOption(zone, city, referenceInstant)
    ).filter(Boolean) as TzOption[];

    const known = new Set(options.map((tz) => tz.zone));
    for (const zone of [browserZone, scheduleZone, selectedZone]) {
      if (!zone || known.has(zone)) continue;
      const extra = buildTzOption(zone, cityFromZone(zone), referenceInstant);
      if (extra) {
        options.push(extra);
        known.add(zone);
      }
    }

    for (const tz of options) tz.isLocal = tz.zone === browserZone;

    // West → east, so the list reads in a single direction around the globe.
    return options.sort((a, b) => a.offsetMins - b.offsetMins || a.city.localeCompare(b.city));
  }, [referenceInstant, browserZone, scheduleZone, selectedZone]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${categoryId}`);
    }
  };

  const handleTzChange = (zone: string) => {
    setTzTouched(true);
    setSelectedZone(zone);
  };

  if (!selectedCategory) return null;

  const selectedTzCity =
    timezones.find((tz) => tz.zone === selectedZone)?.city ?? cityFromZone(selectedZone);

  // Labels carry a UTC offset, so they're built per day: a multi-day event can
  // straddle a DST changeover and the header must match the times below it.
  const tzLabelOn = (isoDate?: string): string =>
    buildTzOption(selectedZone, selectedTzCity, isoNoonInstant(isoDate) ?? referenceInstant)
      ?.label ?? selectedZone;

  return (
    <div className={`w-full ${className ?? ''}`}>
      <ScheduleHeader
        categories={config.categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={handleCategoryChange}
        timezones={timezones}
        selectedZone={selectedZone}
        onTzChange={handleTzChange}
      />
      {selectedCategory.days.map((day, dayIndex) => {
        const isoDate = (day as any)._isoDate as string | undefined;
        const sourceZone = ((day as any)._sourceZone as string | undefined) ?? DEFAULT_SOURCE_ZONE;

        return (
          <section key={dayIndex} className="container-xl mb-20">
            <h5 className="h5 mb-4">{day.date}</h5>
            {day.timezone && (
              <div className="border-b border-white mb-3 pb-2">
                Time: {tzLabelOn(isoDate)}
              </div>
            )}
            {day.slots.map((slot, slotIndex) => (
              <div
                key={slotIndex}
                className={`relative text-black relative w-full flex flex-row transition-all duration-300 p-2 md:p-4 mb-2
                  ${slot.isHighlighted ? 'bg-nextflow-600' : 'bg-nextflow-200'}
                  ${location && slot?.associatedEvents?.slug?.current != null ? 'hover:bg-black hover:text-white' : ''}
                `}
              >
                <div className="mt-[1px] basis-2/6 sm:basis-1/6 sm:w-full uppercase items-start text-[.7rem] md:text-[1rem]">
                  {computeSlotTime(slot as any, isoDate, sourceZone, selectedZone)}
                </div>
                <div className="pl-2 md:pl-0 basis-4/6 sm:basis-5/6 w-full">
                  {slot?.tags.length > 0 && (
                    <div className="mb-2">
                      {slot?.tags.map((tag, tagIndex) => (
                        <span
                          key={`${tag}-${tagIndex}`}
                          className="py-1 px-2 text-[.6rem] mr-1 transition-all duration-300 uppercase monospace bg-black text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="font-medium mb-1 text-xs md:text-base">
                    {slot.externalLink ? (
                      <a className="underline hover:opacity-70 transition-all" href={slot.externalLink}>
                        {slot.title}
                      </a>
                    ) : (
                      <>{slot.title}</>
                    )}
                  </div>

                  {slot?.associatedEvents?.associatedSpeakers?.map((speaker) => (
                    <p key={speaker._id} className="text-sm transition-all duration-300">
                      {speaker.name}
                      {speaker.role && <span className="font-normal">, {speaker.role}</span>}
                    </p>
                  ))}
                  {slot.bodycopy && <p className="text-sm">{slot.bodycopy}</p>}
                  {slot?.associatedEvents?.youtube && (
                    <span className="inline-flex items-center gap-1 mt-2 text-[.6rem] uppercase monospace px-2 py-0.5 bg-black text-white">
                      ▶ Recording
                    </span>
                  )}
                </div>

                {location && slot?.associatedEvents?.slug?.current && (
                  <a
                    href={`/2026/${location}/agenda/${slot.associatedEvents?.slug?.current}`}
                    className="absolute w-full h-full top-0 left-0"
                  ></a>
                )}
              </div>
            ))}
          </section>
        );
      })}
      {children}
    </div>
  );
};

export { AllSchedules };
export default AllSchedules;
