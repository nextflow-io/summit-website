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

const toTimeSlot = (item): TimeSlot => {
  const speakers = item?.associatedSpeakers ?? [];
  const startTime = formatTime(item?.startTime);
  const endTime = formatTime(item?.endTime);
  const time = startTime && endTime ? `${startTime} – ${endTime}` : startTime;
  const title = item.title;
  const associatedSpeakers = item?.associatedSpeakers ?? [];
  const isHighlighted = item.isHighlighted;
  const tags = item?.tags ?? [];

  return {
    time,
    title,
    tags,
    isHighlighted,
    associatedSpeakers,
    highlighted: item?.tags?.includes('highlight'),
    sessions: [,],
  };
};

const toScheduleDay = (section): ScheduleDay => ({
  date: formatDate(section.date),
  timezone: section.timezone ? timezoneLabels[section.timezone] : undefined,
  slots: (section.agendaItems ?? []).map(toTimeSlot),
});

const transformAgenda = (agenda): ScheduleConfig => ({
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
            <div
              className={` text-black container-lg relative w-full flex flex-row transition-all duration-300 p-4 mb-2
            ${slot.isHighlighted ? 'bg-nextflow-600' : 'bg-nextflow-200'}
            `}
            >
              <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase items-start text-[.8rem] md:text-[1rem]">
                {slot.time}
              </div>
              <div className="basis-4/6 sm:basis-5/6 w-full">
               {slot?.tags.length > 0 && (
                <div className="mb-2">
                  {slot?.tags.map((tag) => (
                    <span
                      key={tag._id}
                      className="py-1 px-2 text-[.6rem] mr-1  transition-all duration-300 uppercase monospace bg-black text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
               )}
                <div className="font-medium mb-1">{slot.title}</div>
                <div>
                  {slot?.associatedSpeakers.map((speaker) => (
                    <p
                      key={speaker._id}
                      className=" text-sm  transition-all duration-300"
                    >
                      {speaker.name}
                      {speaker.role && (
                        <span className="font-normal">, {speaker.role}</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
      {children}
    </div>
  );
};

export { AllSchedules };
export default AllSchedules;
