import React, { useState, useMemo } from 'react';

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
};

// ─── Timezone config ──────────────────────────────────────────────────────────

type TzOption = {
  label: string;
  city: string;
  offsetHours: number; // offset from EST (UTC-5)
};

// Offsets relative to EST (UTC-5). Positive = ahead of EST.
const TIMEZONE_OPTIONS: TzOption[] = [
  { label: 'EST (UTC-5)',    city: 'Boston',    offsetHours: 0    },
  { label: 'CST (UTC-6)',    city: 'Chicago',   offsetHours: -1   },
  { label: 'MST (UTC-7)',    city: 'Denver',    offsetHours: -2   },
  { label: 'PST (UTC-8)',    city: 'LA',        offsetHours: -3   },
  { label: 'GMT (UTC+0)',    city: 'London',    offsetHours: 5    },
  { label: 'CET (UTC+1)',    city: 'Paris',     offsetHours: 6    },
  { label: 'CEST (UTC+2)',   city: 'Barcelona', offsetHours: 7    },
  { label: 'IST (UTC+5:30)', city: 'Mumbai',    offsetHours: 10.5 },
  { label: 'SGT (UTC+8)',    city: 'Singapore', offsetHours: 13   },
  { label: 'AEST (UTC+10)',  city: 'Sydney',    offsetHours: 15   },
];

// Source timezone offsets from UTC — used to detect the schedule's base tz
const SOURCE_TZ_OFFSETS: Record<string, number> = {
  est: -5,
  cest: 2,
  cet: 1,
};

// Parse a raw time string like "0900" or "900" into total minutes since midnight
const parseRawMinutes = (raw?: string): number | null => {
  if (!raw || raw.length < 3) return null;
  const padded = raw.padStart(4, '0');
  const h = parseInt(padded.slice(0, 2), 10);
  const m = parseInt(padded.slice(2), 10);
  return h * 60 + m;
};

const minutesToDisplay = (totalMins: number): string => {
  // Wrap around midnight properly
  const wrapped = ((totalMins % 1440) + 1440) % 1440;
  const h24 = Math.floor(wrapped / 60);
  const m = wrapped % 60;
  const suffix = h24 >= 12 ? 'PM' : 'AM';
  const h12 = h24 % 12 || 12;
  return m === 0 ? `${h12}${suffix}` : `${h12}:${String(m).padStart(2, '0')}${suffix}`;
};

// ─── Original helpers (kept for non-time fields) ──────────────────────────────

const timezoneLabels: Record<string, string> = {
  est: 'EST (UTC-5)',
  cest: 'CEST (UTC+2)',
  cet: 'CET (UTC+1)',
};

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
    time: '', // computed later with offset
    _startMins: parseRawMinutes(item?.startTime),
    _endMins: parseRawMinutes(item?.endTime),
    title: item.title,
    externalLink: item?.externalLink,
    bodycopy: item?.bodycopy,
    tags: item?.tags ?? [],
    isHighlighted: item.isHighlighted,
    associatedSpeakers: item?.associatedSpeakers ?? [],
    associatedEvents: item?.associatedEvents,
    highlighted: item?.tags?.includes('highlight'),
    sessions: [,],
  };
};

const toScheduleDay = (section): ScheduleDay & { _sourceTzKey: string } => ({
  date: formatDate(section.date),
  timezone: section.timezone ? timezoneLabels[section.timezone] : undefined,
  _sourceTzKey: section.timezone ?? 'est',
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

// Compute display time string for a slot given an offset delta (in hours)
const computeSlotTime = (
  slot: { _startMins: number | null; _endMins: number | null },
  offsetDeltaMins: number
): string => {
  if (slot._startMins == null) return '';
  const start = minutesToDisplay(slot._startMins + offsetDeltaMins);
  if (slot._endMins == null) return start;
  const end = minutesToDisplay(slot._endMins + offsetDeltaMins);
  return `${start} – ${end}`;
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const ScheduleHeader: React.FC<{
  categories: TrainingCategory[];
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
  selectedTzLabel: string;
  onTzChange: (label: string) => void;
}> = ({ categories, selectedCategoryId, onCategoryChange, selectedTzLabel, onTzChange }) => (
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
            value={selectedTzLabel}
            onChange={(e) => onTzChange(e.target.value)}
            className="rounded-none monospace bg-black border border-white text-white px-3 py-1 md:py-2 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer appearance-none pr-8"
            style={{ outline: 'none', borderRadius: 0 }}
            onFocus={e => { e.currentTarget.style.outline = '2px solid #31C9AC'; e.currentTarget.style.borderRadius = '0'; }}
            onBlur={e => { e.currentTarget.style.outline = 'none'; }}
          >
            {TIMEZONE_OPTIONS.map((tz) => (
              <option key={tz.label} value={tz.label} style={{ background: '#000' }}>
                {tz.city} — {tz.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

const AllSchedules: React.FC<Props> = ({ children, className, agenda }) => {
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
  const [selectedTzLabel, setSelectedTzLabel] = useState<string>(TIMEZONE_OPTIONS[0].label);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${categoryId}`);
    }
  };

  const selectedCategory =
    config.categories.find((cat) => cat.id === selectedCategoryId) ??
    config.categories[0];

  if (!selectedCategory) return null;

  const selectedTz = TIMEZONE_OPTIONS.find((tz) => tz.label === selectedTzLabel) ?? TIMEZONE_OPTIONS[0];

  return (
    <div className={`w-full ${className ?? ''}`}>
      <ScheduleHeader
        categories={config.categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={handleCategoryChange}
        selectedTzLabel={selectedTzLabel}
        onTzChange={setSelectedTzLabel}
      />
      {selectedCategory.days.map((day, dayIndex) => {
        // Compute offset delta: how many minutes to add to source times
        const sourceTzKey = (day as any)._sourceTzKey ?? 'est';
        const sourceUtcOffset = SOURCE_TZ_OFFSETS[sourceTzKey] ?? -5;
        const targetUtcOffset = selectedTz.offsetHours - 5 + sourceUtcOffset;
        // Simpler: delta = (targetUtcOffset - sourceUtcOffset) * 60
        const offsetDeltaMins = (selectedTz.offsetHours + sourceUtcOffset) * 60;
        // Actually: target UTC offset = selectedTz.offsetHours + (-5) [since selectedTz.offsetHours is relative to EST=-5]
        // delta from source = (targetUTC - sourceUTC) * 60
        const targetActualUtc = selectedTz.offsetHours + (-5); // selectedTz offset is relative to EST
        const deltaMins = (targetActualUtc - sourceUtcOffset) * 60;

        return (
          <section key={dayIndex} className="container-xl mb-20">
            <h5 className="h5 mb-4">{day.date}</h5>
            {day.timezone && (
              <div className="border-b border-white mb-3 pb-2">
                Time: {selectedTzLabel}
              </div>
            )}
            {day.slots.map((slot, slotIndex) => (
              <div
                key={slotIndex}
                className={`relative text-black relative w-full flex flex-row transition-all duration-300 p-2 md:p-4 mb-2
                  ${slot.isHighlighted ? 'bg-nextflow-600' : 'bg-nextflow-200'}
                  ${slot?.associatedEvents?.slug.current != null ? 'hover:bg-black hover:text-white' : ''}
                `}
              >
                <div className="mt-[1px] basis-2/6 sm:basis-1/6 sm:w-full uppercase items-start text-[.7rem] md:text-[1rem]">
                  {computeSlotTime(slot as any, deltaMins)}
                </div>
                <div className="pl-2 md:pl-0 basis-4/6 sm:basis-5/6 w-full">
                  {slot?.tags.length > 0 && (
                    <div className="mb-2">
                      {slot?.tags.map((tag) => (
                        <span
                          key={tag._id}
                          className="py-1 px-2 text-[.6rem] mr-1 transition-all duration-300 uppercase monospace bg-black text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="font-medium mb-1 text-xs md:text-base">
                    {slot.externalLink ? (
                      <a className="underline hover:opacity-50 transition-all" href={slot.externalLink}>
                        {slot.title}
                      </a>
                    ) : (
                      <>{slot.title}</>
                    )}
                  </div>

                  {slot?.associatedEvents?.associatedSpeakers.map((speaker) => (
                    <p key={speaker._id} className="text-sm transition-all duration-300">
                      {speaker.name}
                      {speaker.role && <span className="font-normal">, {speaker.role}</span>}
                    </p>
                  ))}
                  {slot.bodycopy && <p className="text-sm">{slot.bodycopy}</p>}
                </div>

                {slot?.associatedEvents?.slug.current && (
                  <a
                    href={`/2026/boston/agenda/${slot?.associatedEvents?.slug.current}`}
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