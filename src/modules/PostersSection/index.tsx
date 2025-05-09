import React, { useState } from 'react';
import speakers from "./posters";
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
              submissionTitle,
              bio,
              github,
              twitter,
              linkedin,
              image,
              pageUrl,
            },
            index,
          ) => {
            return (
              <SpeakerCard
              key={name}
                name={name}
                jobTitle={jobTitle}
                track={track}
                submissionTitle={submissionTitle}
                bio={bio}
                github={github}
                twitter={twitter}
                linkedin={linkedin}
                image={image}
                isOpen={activeIndex === index}
                onClick={() => handleItemClick(index)}
                pageUrl={pageUrl}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default SpeakersSection;
