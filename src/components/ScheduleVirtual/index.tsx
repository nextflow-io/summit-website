import React, { useState, useMemo } from 'react';

// ─── Component types ──────────────────────────────────────────────────────────

type SessionProps = {
  session?: any;
  title?: string;
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

// ─── Sanity → ScheduleConfig transform ───────────────────────────────────────

const timezoneLabels: Record<string, string> = {
  est: 'EST (UTC-5)',
  cest: 'CEST (UTC+2)',
  cet: 'CET (UTC+1)',
};

const formatTime = (t?: string): string => {
  if (!t || t.length < 3) return t ?? '';
  const padded = t.padStart(4, '0');
  const h = parseInt(padded.slice(0, 2), 10);
  const m = padded.slice(2);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return m === '00' ? `${h12}${suffix}` : `${h12}:${m}${suffix}`;
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

const toTimeSlot = (item: AgendaItem): TimeSlot => {
  const speakers = item?.associatedSpeakers ?? [];
  const startTime = formatTime(item?.startTime);
  const endTime = formatTime(item?.endTime);
  const time = startTime && endTime ? `${startTime} – ${endTime}` : startTime;

  return {
    time,
    highlighted: item?.tags?.includes('highlight'),
    sessions: [
      {
        title: item?.title,
        speaker: speakers[0]?.name,
        speaker2: speakers[1]?.name,
        category: item?.tags?.filter((t) => t !== 'highlight')[0],
        url: item?.associatedEvents?._id
          ? `/agenda/${item.associatedEvents._id}`
          : undefined,
      },
    ],
  };
};

const toScheduleDay = (): ScheduleDay => ({
  date: formatDate(section.date),
  timezone: section.timezone ? timezoneLabels[section.timezone] : undefined,
  slots: (section.agendaItems ?? []).map(toTimeSlot),
});

const transformAgenda = (): ScheduleConfig => ({
  categories: [
    { id: 'summit', label: 'Summit', sections: agenda.summitAgenda },
    { id: 'hackathon', label: 'Hackathon', sections: agenda.hackathonAgenda },
    {
      id: 'beginner',
      label: 'Beginner Training',
      sections: agenda.beginnerTrainingAgenda,
    },
    {
      id: 'advanced',
      label: 'Advanced Training',
      sections: agenda.advancedTrainingAgenda,
    },
  ]
    .filter((cat) => cat.sections?.length)
    .map(({ id, label, sections }) => ({
      id,
      label,
      days: (sections ?? []).map(toScheduleDay),
    })),
});

// ─── Sub-components ───────────────────────────────────────────────────────────

const SessionItem: React.FC<SessionProps> = ({
  session,
  title,
  associatedSpeakers,
  category,
  url,
}) => {
  const content = (
    <div className="container-lg w-full border-b border-gray-200 last:border-b-0 pb-3 opacity-90 group transition-all duration-300">
      {category && (
        <h4 className="monospace text-xs bg-nextflow-500 inline text-brand px-2 p-[.15rem]">
          {category}
        </h4>
      )}
      <h4
        className={`font-semibold display mb-1 text-[1rem] md:text-[1.2rem] mt-1 ${
          url &&
          'underline group-hover:text-nextflow transition-all duration-300'
        }`}
      >
        {title} 
      </h4>
      {associatedSpeakers && associatedSpeakers.length > 0 && (
        <div className="flex flex-col gap-0.5 mt-1">
          {associatedSpeakers.map((speaker) => (
            <p
              key={speaker._id}
              className="font-semibold display text-sm text-gray-300 group-hover:text-nextflow transition-all duration-300"
            >
              {speaker.name}
              {speaker.role && (
                <span className="font-normal text-gray-400">
                  {' '}
                  · {speaker.role}
                </span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={url}
        className="block transition-colors px-4 -mx-4"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return <div className="px-4 -mx-4">{content}</div>;
};

const TimeSlotItem: React.FC<TimeSlot> = ({ time, highlighted, sessions }) => {
  return (
    <div className="bg-blue-200 text-black container-lg relative w-full flex flex-row border border-nextflow transition-all duration-300 p-4 mb-2">
      <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase items-start pt-2 text-[.8rem] md:text-[1rem]">
        {time}
      </div>
      <div className="basis-4/6 sm:basis-5/6 w-full">
        {sessions
          .filter((s) => s.title !== 'N/A')
          .map((session, idx) => (
            <SessionItem key={idx} {...session} />
          ))}
      </div>
    </div>
  );
};

const ScheduleHeader: React.FC<{
  categories: TrainingCategory[];
  selectedCategoryId: string;
  onCategoryChange: (id: string) => void;
}> = ({ categories, selectedCategoryId, onCategoryChange }) => (
  <div className="pb-10 bg-black text-white monospace flex flex-col sm:flex-row w-full mb-16 gap-4">
    <div className="container-lg w-full">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`monospace px-4 py-2 border transition-all duration-300 ${
              selectedCategoryId === cat.id
                ? 'bg-nextflow border-nextflow text-white'
                : 'bg-transparent border-white hover:bg-white hover:text-black'
            }`}
          >
            {cat.label}
          </button>
        ))}
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

  const [selectedCategoryId, setSelectedCategoryId] =
    useState<string>(getInitialCategory);

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

  return (
    <div className={`w-full ${className ?? ''}`}>
      <ScheduleHeader
        categories={config.categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={handleCategoryChange}
      />
      {selectedCategory.days.map((day, dayIndex) => (
        <section key={dayIndex} className="container-lg mb-20">
          <h5 className="h5 mb-4">{day.date}</h5>
          {day.timezone && (
            <div className="border-b border-white mb-3 pb-2">
              Time: {day.timezone}
            </div>
          )}
          {day.slots.map((slot, slotIndex) => (
            <TimeSlotItem key={slotIndex} {...slot} />
          ))}
        </section>
      ))}
      {children}
    </div>
  );
};

export { AllSchedules };
export default AllSchedules;
