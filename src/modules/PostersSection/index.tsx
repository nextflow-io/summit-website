import React, { useState } from 'react';
import SpeakerCard from '@components/SpeakerCard'

const PostersSection = ({  person , index, location}) => {
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
        submissionTitle={person.associatedEvent?.title}
        bio={person.bio}
        github={person.github}
        twitter={person.twitter}
        linkedin={person.linkedin}
        image={person.image}
        pageUrl={person.associatedEvent?.slug.current}
        isOpen={activeIndex === index}
        onClick={() => handleItemClick(index)}
        location={location}
        associatedTalks={person?.associatedTalks} 
      />
  );
};

export default PostersSection;
