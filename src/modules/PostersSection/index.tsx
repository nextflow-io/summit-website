import React from 'react';
import SpeakerCard from '@components/SpeakerCard';

const PostersSection = ({ person, location }) => {
  const primaryEvent = person?.associatedEvents?.[0];
  const moreEvents = person?.associatedEvents?.slice(1);

  return (
    <div className="h-full">
      <SpeakerCard
        key={person.name}
        name={person.name}
        jobTitle={person.role}
        keynote={person.keynote}
        date={primaryEvent?.publishedAt}
        endTime={primaryEvent?.endTime}
        submissionTitle={primaryEvent?.title}
        bio={person.bio}
        github={person.github}
        twitter={person.twitter}
        linkedin={person.linkedin}
        image={person.image}
        pageUrl={primaryEvent?.slug}
        location={location}
        associatedEvents={moreEvents?.length ? moreEvents : undefined}
      />
    </div>
  );
};

export default PostersSection;
