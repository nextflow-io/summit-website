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
  if (!featuredStats && stats.length === 0) {
    return null;
  }

  return (
    <section className={`${className} bg-nextflow-200 text-black`}>
      <div className="container-xl py-10 md:py-20">
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mb-10 w-full md:w-1/2 md:pr-12">
            <h3 className="h5 mb-4 md:mb-0">{headline}</h3>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Featured Stats */}
            {featuredStats && (
              <div className="w-full flex flex-row">
                {featuredStats.featuredStatLeft && (
                  <div className="px-4 py-2 bg-black w-full text-white flex flex-row items-center">
                    <h3 className="text-[1.75rem] md:text-[4rem] mr-4 leading-none">
                      {featuredStats.featuredStatLeft}
                    </h3>
                    <p className="text-[.65rem] md:text-lg  leading-tight">
                      {featuredStats.featuredDescriptionLeft}
                    </p>
                  </div>
                )}
                {featuredStats.featuredStatRight && (
                  <div className="px-4 py-2 bg-white w-full flex flex-row items-center">
                    <h3 className="text-[1.75rem] md:text-[4rem] mr-4 leading-none">
                      {featuredStats.featuredStatRight}
                    </h3>
                    <p className="text-[.65rem]  md:text-lg  leading-tight">
                      {featuredStats.featuredDescriptionRight}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Regular Stats */}
            {stats.map((stat, index) => (
              <div key={index} className="border-b border-black py-2">
                <div className="flex flex-row items-center">
                  <h4 className="text-[2rem] md:text-[4rem] mr-4 leading-none w-[80px]">{stat.statNumber}</h4>
                  <p className="text-[.65rem] md:text-lg leading-tight mb-0 w-full">
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
