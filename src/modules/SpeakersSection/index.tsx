import React, { useState } from 'react';
import speakers from "./speakers";
import SpeakerCard from '@components/SpeakerCard'

const SpeakersSection = ({   }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const sortedSpeakers = [...speakers.main].sort((a, b) => 
    a.name.localeCompare(b.name)
  );

  return (
    <div className="container mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sortedSpeakers.map(
          (
            {
              name,
              jobTitle,
              track,
              date,
              time,
              submissionTitle,
              bio,
              github,
              twitter,
              linkedin,
              image,
              keynote,
              pageUrl,
              speaker,
            },
            index,
          ) => {
            return (
              <SpeakerCard
                key={name}
                name={name}
                jobTitle={jobTitle}
                track={track}
                date={date}
                time={time}
                submissionTitle={submissionTitle}
                bio={bio}
                github={github}
                twitter={twitter}
                linkedin={linkedin}
                image={image}
                pageUrl={pageUrl}
                keynote={keynote}
                speaker={speaker}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default SpeakersSection;
