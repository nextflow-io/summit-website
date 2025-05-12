import React, { useState } from 'react';
import speakers from "./speakers";
import SpeakerCard from '@components/SpeakerCard'

const SpeakersSection = ({  person , index}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
      <SpeakerCard
        key={person.name}
        name={person.name}
        jobTitle={person.role}
        keynote={person.keynote}
        track={person.track}
        date={person.associatedEvent?.publishedAt}
        time={person.associatedEvent?.publishedAt}
        endTime={person.associatedEvent?.endTime}
        submissionTitle={person.associatedEvent?.title}
        bio={person.bio}
        github={person.github}
        twitter={person.twitter}
        linkedin={person.linkedin}
        image={person.image}
        pageUrl={person.associatedEvent?.slug.current}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
      />
  );
};

export default SpeakersSection;
