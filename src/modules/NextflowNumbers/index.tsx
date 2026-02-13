import { SquarePixel } from '@components/SquarePixel';
import { useEffect, useRef, useState } from 'react';

type FeaturedStatsProps = {
  featuredStatLeft?: string;
  featuredDescriptionLeft?: string;
  featuredStatRight?: string;
  featuredDescriptionRight?: string;
};

type Stat = {
  statNumber: string;
  statDescription: string;
};

type Props = {
  className?: string;
  headline?: string;
  featuredStats?: FeaturedStatsProps;
  stats?: Stat[];
};

const NextflowNumbers: React.FC<Props> = ({
  className,
  headline = 'Nextflow Training and nf-core Hackathon by the numbers',
  featuredStats,
  stats = [],
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  if (!featuredStats && stats.length === 0) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={`${className} bg-nextflow text-black relative`}
    >
      <div className="hidden md:block ">
        <SquarePixel
          className="absolute bottom-0 left-0"
          initialColor="#56D3BA"
        />
        <SquarePixel
          className="absolute bottom-[18px] left-[18px]"
          initialColor="#fff"
        />
        <SquarePixel
          className="absolute bottom-[36px] left-[36px]"
          initialColor="#000"
        />
        <SquarePixel
          className="absolute top-[36px] right-[36px]"
          initialColor="#fff"
        />
        <SquarePixel
          className="absolute top-[18px] right-[18px]"
          initialColor="#56D3BA"
        />
        <SquarePixel
          className="absolute bottom-[18px] right-[18px]"
          initialColor="#56D3BA"
        />
      </div>

      <div className="container-xl py-10 md:py-20">
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mb-10 w-full md:w-1/2 md:pr-12">
            <h3
              className={`h5 mb-4 md:mb-0 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {headline}
            </h3>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Featured Stats */}
            {featuredStats && (
              <div
                className={`w-full flex flex-row transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {featuredStats.featuredStatLeft && (
                  <div className="px-4 py-2 bg-black w-full text-white flex flex-row items-center">
                    <h3 className="text-[1.75rem] md:text-[4rem] mr-4 leading-none">
                      {featuredStats.featuredStatLeft}
                    </h3>
                    <p className="text-[.7rem] md:text-lg leading-tight max-w-[40%]">
                      {featuredStats.featuredDescriptionLeft}
                    </p>
                  </div>
                )}
                {featuredStats.featuredStatRight && (
                  <div className="px-4 py-2 bg-white w-full flex flex-row items-center">
                    <h3 className="text-[1.75rem] md:text-[4rem] mr-4 leading-none">
                      {featuredStats.featuredStatRight}
                    </h3>
                    <p className="text-[.7rem] md:text-lg leading-tight">
                      {featuredStats.featuredDescriptionRight}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Regular Stats */}
            {stats.map((stat, index) => (
              <div
                key={index}
                className="border-b border-black py-2 transition-all duration-700"
                style={{
                  transitionDelay: `${200 + index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                }}
              >
                <div className="flex flex-row items-center">
                  <h4 className="text-[2rem] md:text-[3rem] mr-4 leading-none w-[80px] md:w-[120px]">
                    {stat.statNumber}
                  </h4>
                  <p className="text-[.7rem] md:text-[1rem] leading-tight mb-0 w-full text-pretty">
                    {stat.statDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextflowNumbers;