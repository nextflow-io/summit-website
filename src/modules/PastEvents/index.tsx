import Box from "@components/Box";
import Button from "@components/Button";

type PastEvent = {
  title: string;
  year?: number;
  location?: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  href?: string;
};

export interface FeaturedStats {
  featuredStatLeft?: string;
  featuredDescriptionLeft?: string;
  featuredStatRight?: string;
  featuredDescriptionRight?: string;
}

export interface Stat {
  statNumber: string;
  statDescription: string;
}

export interface NextflowNumbersSection {
  headline?: string;
  featuredStats?: FeaturedStats;
  statsSection?: Stat[];
}

type Props = {
  headline?: string;
  events?: PastEvent[];
  button?: {
    buttonText?: string;
    buttonLink?: string;
    buttonUrl?: string;
    externalLink?: boolean;
  };
};

const SectionPastEvents: React.FC<Props> = ({ 
  headline = "See our past events", 
  events = [],
  button 
}) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <section className="bg-white text-black py-10 md:py-18">
      <div className="container-xl">
        <h1 className="h2 mb-10">{headline}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Box
              key={index}
              title={event.title}
              href={event.href}
              image={event.image?.asset?.url}
              imageAlt={event.image?.alt || event.title}
            />
          ))}
        </div>
        {button && (
          <div className="text-center">
            <Button 
              className="mt-10" 
              dark 
              href={button.buttonLink || button.buttonUrl}
              target={button.externalLink ? '_blank' : '_self'}
            >
              {button.buttonText || 'See all past events'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SectionPastEvents;