import React, { useState } from "react";

type SessionProps = {
  title: string;
  speaker?: string;
  speaker2?: string;
  category?: string;
  url?: string;
};

type TimeSlot = {
  time: string;
  highlighted?: boolean;
  sessions: SessionProps[];
  category?: string;
};

type ScheduleDay = {
  date: string;
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
  config: ScheduleConfig;
};

const SessionItem: React.FC<SessionProps> = ({
  title,
  speaker,
  speaker2,
  category,
  url,
}) => {
  const content = (
    <div className="w-full border-b border-gray-200 last:border-b-0 pb-3 opacity-90 group transition-all duration-300">
      {category && (
        <h4 className="monospace text-xs bg-nextflow-500 inline text-brand rounded-sm px-2 p-[.15rem]">
          {category}
        </h4>
      )}
      <h4
        className={`font-semibold display mb-1 text-[1rem] md:text-[1.2rem] mt-1 ${url && "underline  group-hover:text-nextflow transition-all duration-300"}`}
      >
        {title}
      </h4>
      {speaker && speaker !== "N/A" && (
        <>
          <p className="font-semibold display text-sm text-gray-300 group-hover:text-nextflow transition-all duration-300">
            {speaker}
          </p>
          {speaker2 && (
            <p className="font-semibold display text-sm text-gray-300 group-hover:text-nextflow transition-all duration-300">
              {speaker2}
            </p>
          )}
        </>
      )}
    </div>
  );

  if (url) {
    return (
      <a
        href={`${url}`}
        className="block transition-colors px-4 -mx-4"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return <div className="px-4 -mx-4">{content}</div>;
};

const TimeSlotItem: React.FC<TimeSlot> = ({
  time,
  highlighted,
  sessions,
  category,
}) => {
  if (highlighted) {
    return (
      <div
        className={`relative w-full flex flex-row border border-nextflow ${sessions[0].url && "hover:border-nextflow-200 hover:text-white transition-all duration-300"} p-4 rounded-sm mb-2 group`}
      >
        <div
          className={`absolute bg-nextflow-100 w-full h-full z-0 top-0 right-0 left-0 opacity-25 ${sessions[0].url && "group-hover:opacity-100 group-hover:bg-nextflow-800"} transition-opacity duration-300`}
        ></div>

        <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase z-10 pointer-events-none pt-1">
          {time}
        </div>
        <div className="basis-4/6 sm:basis-5/6 w-full z-10 pointer-events-none">
          {sessions[0].category && (
            <h4 className="monospace text-xs bg-nextflow-500 inline text-brand rounded-sm px-2 p-[.15rem]">
              {sessions[0].category}
            </h4>
          )}
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] display transition-colors duration-300">
            {sessions[0].title}
          </h4>
          {sessions[0].speaker && (
            <p className="font-semibold display text-sm text-white transition-colors duration-300">
              {sessions[0].speaker}
            </p>
          )}
        </div>

        {sessions[0].url && (
          <a
            href={`/2025/virtual/agenda/${sessions[0].url}`}
            target="_blank"
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`View ${sessions[0].title}`}
          ></a>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full flex flex-row border border-nextflow transition-all duration-300 p-4 rounded-sm mb-2">
      <div className="basis-2/6 sm:basis-1/6 sm:w-full uppercase items-start pt-2">
        {time}
      </div>
      <div className="basis-4/6 sm:basis-5/6 w-full">
        {sessions
          .filter((s) => s.title !== "N/A")
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
  onCategoryChange: (categoryId: string) => void;
}> = ({ categories, selectedCategoryId, onCategoryChange }) => {
  return (
    <div className="monospace flex flex-col sm:flex-row w-full mb-16 gap-4">
      <div className="w-full">
        <div className="mb-2">Select a Track:</div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`monospace px-4 py-2 rounded-sm border transition-all duration-300 ${
                selectedCategoryId === cat.id
                  ? "bg-nextflow border-nextflow text-white"
                  : "bg-transparent border-white hover:bg-white hover:text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const trainingScheduleConfig: ScheduleConfig = {
  categories: [
    {
      id: "hackathon",
      label: "Hackathon",
      days: [
        {
          date: "Tuesday, October 28",
          slots: [
            {
              time: "9AM",
              highlighted: true,
              sessions: [
                {
                  title: "Registration and Breakfast",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "10AM",
              sessions: [
                {
                  title: "Hackathon Welcome",
                },
              ],
            },
            {
              time: "10:30AM",
              sessions: [
                {
                  title: "Hackathon Session 1",
                },
              ],
            },
            {
              time: "1PM",
              highlighted: true,
              sessions: [
                {
                  title: "Lunch",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "2PM",
              sessions: [
                {
                  title: "Hackathon Session 2",
                },
              ],
            },
            {
              time: "4:45PM",

              sessions: [
                {
                  title: "Hackathon Wrap-up",
                },
              ],
            },
                 {
              time: "5:30PM - 8PM",
              highlighted: true,
              sessions: [
                {
                  title: "Hackathon and Training: Social Event",
                  category: "All Tracks",
                },
              ],
            },
          ],
        },
        {
          date: "Wednesday, October 29",
          slots: [
            {
              time: "9AM",
              highlighted: true,
              sessions: [
                {
                  title: "Registration and Breakfast",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "10AM",
              sessions: [
                {
                  title: "Hackathon Session 3",
                },
              ],
            },
            {
              time: "1PM",
              highlighted: true,
              sessions: [
                {
                  title: "Lunch",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "2PM",
              sessions: [
                {
                  title: "Hackathon Session 4",
                },
              ],
            },
            {
              time: "4:45PM",

              sessions: [
                {
                  title: "Hackathon Wrap-up",
                },
              ],
            },
            {
              time: "5PM",
              highlighted: true,
              sessions: [
                {
                  title: "Hackathon and Training: End",
                  category: "All Tracks",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "beginner",
      label: "Beginner Training",
      days: [
        {
          date: "Tuesday, October 28",
          slots: [
            {
              time: "9AM",
              highlighted: true,
              sessions: [
                {
                  title: "Registration and Breakfast",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "10AM",
              sessions: [
                {
                  title: "Beginner Training: Welcome",
                },
              ],
            },
            {
              time: "10:30AM",
              sessions: [
                {
                  title: "Beginner Training: Session 1",
                },
              ],
            },
            {
              time: "1PM",
              highlighted: true,
              sessions: [
                {
                  title: "Lunch",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "2PM",
              sessions: [
                {
                  title: "Beginner Training: Session 2",
                },
              ],
            },
            {
              time: "4:45PM",

              sessions: [
                {
                  title: "Beginner Training: Wrap-up",
                },
              ],
            },
            {
              time: "5:30PM - 8PM",
              highlighted: true,
              sessions: [
                {
                  title: "Hackathon and Training: Social Event",
                  category: "All Tracks",
                },
              ],
            },
      
          ],
        },
        {
          date: "Wednesday, October 29",
          slots: [
            {
              time: "9AM",
              highlighted: true,
              sessions: [
                {
                  title: "Registration and Breakfast",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "10AM",
              sessions: [
                {
                  title: "Beginner Training: Session 3",
                },
              ],
            },
            {
              time: "1PM",
              highlighted: true,
              sessions: [
                {
                  title: "Lunch",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "2PM",
              sessions: [
                {
                  title: "Beginner Training: Session 4",
                },
              ],
            },
            {
              time: "4:45PM",

              sessions: [
                {
                  title: "Beginner Training: Day 2 Wrap-up",
                },
              ],
            },
            {
              time: "5PM",
              highlighted: true,
              sessions: [
                {
                  title: "Hackathon and Training: End",
                  category: "All Tracks",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "advanced",
      label: "Advanced Training",
      days: [
        {
          date: "Tuesday, October 28",
          slots: [
            {
              time: "9AM",
              highlighted: true,
              sessions: [
                {
                  title: "Registration and Breakfast",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "10AM",
              sessions: [
                {
                  title: "Advanced Training: Welcome & Orientation",
                },
              ],
            },
            {
              time: "10:15AM",
              sessions: [
                {
                  title: "Nextflow development environment walkthrough",
                  url: "https://training.nextflow.io/latest/side_quests/dev_environment/",
                },
              ],
            },
            {
              time: "11am",
              highlighted: true,
              sessions: [
                {
                  title: "10 minute break",
                },
              ],
            },
            {
              time: "11:10am",
              sessions: [
                {
                  title: "Essential Nextflow Scripting Patterns",
                  url: "https://training.nextflow.io/latest/side_quests/essential_scripting_patterns/",
                },
              ],
            },
            {
              time: "12:40PM",
              sessions: [
                {
                  title: "Q&A / Buffer time",
                },
              ],
            },
            {
              time: "1PM",
              highlighted: true,
              sessions: [
                {
                  title: "Lunch",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "2PM",
              sessions: [
                {
                  title: "Working with files",
                  url: "https://training.nextflow.io/latest/side_quests/working_with_files/",
                },
              ],
            },
            {
              time: "2:45PM",

              sessions: [
                {
                  title: "Metadata in workflows",
                  url: "https://training.nextflow.io/latest/side_quests/metadata/",
                },
              ],
            },
            {
              time: "3:30PM",
              highlighted: true,
              sessions: [
                {
                  title: "10 minute break",
                },
              ],
            },
            {
              time: "3:40PM",

              sessions: [
                {
                  title: "Debugging workflows",
                  url: "https://training.nextflow.io/latest/side_quests/debugging/",
                },
              ],
            },
            {
              time: "4:40pm",
              sessions: [
                {
                  title: "Advanced Training: Day 1 Wrap-up and Q&A",
                },
              ],
            },
            {
              time: "5pm",

              sessions: [
                {
                  title: "Advanced Training: Day 1 End",
                },
              ],
            },
                      {
              time: "5:30PM - 8PM",
              highlighted: true,
              sessions: [
                {
                  title: "Hackathon and Training: Social Event",
                  category: "All Tracks",
                },
              ],
            },
          ],
        },
        {
          date: "Wednesday, October 29",
          slots: [
            {
              time: "9AM",
              highlighted: true,
              sessions: [
                {
                  title: "Registration and Breakfast",
                  category: "All Tracks",
                },
              ],
            },
            {
              time: "10AM",
              sessions: [
                {
                  title: "Advanced Training: Day 2 Welcome & Recap",
                },
              ],
            },
            {
              time: "10:10am",

              sessions: [
                {
                  title: "Splitting and Grouping",
                  url: "https://training.nextflow.io/latest/side_quests/splitting_and_grouping/",
                },
              ],
            },
            {
              time: "10:55AM",
              sessions: [
                {
                  title: "Workflows of workflows",
                  url: "https://training.nextflow.io/latest/side_quests/workflows_of_workflows/",
                },
              ],
            },
            {
              time: "11:25AM",
              highlighted: true,
              sessions: [
                {
                  title: "10 minute break",
                },
              ],
            },
            {
              time: "11:35AM",

              sessions: [
                {
                  title: "Testing with nf-test",
                  url: "https://training.nextflow.io/latest/side_quests/nf-test/",
                },
              ],
            },
            {
              time: "12:35AM",

              sessions: [
                {
                  title: "Q&A / Buffer time",
                },
              ],
            },
            {
              time: "1PM",
              highlighted: true,
              sessions: [
                {
                  title: "Lunch",
                },
              ],
            },
            {
              time: "2pm",

              sessions: [
                {
                  title: "Hello nf-core - Part 1",
                  url: "https://training.nextflow.io/latest/hello_nf-core/",
                },
              ],
            },
            {
              time: "3:30pm",
              highlighted: true,
              sessions: [
                {
                  title: "10 minute break",
                },
              ],
            },
            {
              time: "3:40pm",
              sessions: [
                {
                  title: "Hello nf-core - Part 2",
                  url: "https://training.nextflow.io/latest/hello_nf-core/",
                },
              ],
            },
            {
              time: "4:40pm",
              sessions: [
                {
                  title: "Advanced Training: Day 2 Wrap up",
                },
              ],
            },
             {
              time: "5PM",
              highlighted: true,
              sessions: [
                {
                  title: "Hackathon and Training: End",
                  category: "All Tracks",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const TrainingSchedule: React.FC<Props> = ({ children, className, config }) => {
  // Initialize from URL hash or default to first category
  const getInitialCategory = (): string => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      const category = config.categories.find((cat) => cat.id === hash);
      return category ? hash : config.categories[0].id;
    }
    return config.categories[0].id;
  };

  const [selectedCategoryId, setSelectedCategoryId] =
    useState<string>(getInitialCategory);

  // Update URL hash when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${categoryId}`);
    }
  };

  const selectedCategory =
    config.categories.find((cat) => cat.id === selectedCategoryId) ||
    config.categories[0];

  return (
    <div className={`w-full ${className || ""}`}>
      <ScheduleHeader
        categories={config.categories}
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={handleCategoryChange}
      />
      {selectedCategory.days.map((day, dayIndex) => (
        <section key={dayIndex} className="mb-20">
          <h5 className="h5 mb-4">{day.date}</h5>
          <div className="border-b border-white mb-3 pb-2">
            Time: CET (UTC+2)
          </div>
          {day.slots.map((slot, slotIndex) => (
            <TimeSlotItem key={slotIndex} {...slot} />
          ))}
        </section>
      ))}
      {children}
    </div>
  );
};

const TrainingScheduleDemo = () => {
  return <TrainingSchedule config={trainingScheduleConfig} />;
};

export { trainingScheduleConfig, TrainingSchedule };
export default TrainingScheduleDemo;
