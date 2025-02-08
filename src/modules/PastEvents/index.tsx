import Box, { SubSection } from "@components/Box";
import img1 from "@images/photos/2025/past-events.jpg";
import ArrowUpRight from "@icons/ArrowUpRight";
import e2019_nf_camp from "@images/photos/past-events/e2019_nf_camp.jpg";
import e2017_nf from "@images/photos/past-events/e2017_nf.jpg";
import e2018_nf from "@images/photos/past-events/e2018_nf.jpg";
import e2022_summit from "@images/photos/past-events/e2022_summit.jpg";
import e2022_bcn from "@images/photos/past-events/e2022_bcn.jpg";
import e2022_hack from "@images/photos/past-events/e2022_hack.jpg";
import e2023_boston from "@images/photos/past-events/e2023_boston.jpg";
import e2023_bcn from "@images/photos/past-events/e2023_bcn.jpg";
import e2024_bcn from "@images/photos/past-events/e2024_bcn.jpg";
import e2024_boston from "@images/photos/past-events/e2024_boston.jpg";
import Button from "@components/Button";

type Props = {
  title?: string;
};

const SectionPastEvents: React.FC<Props> = ({ title }) => {
  return (
    <section className="mt-20 mb-24 container">
      <h1 className="h2 mb-10">See our past events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Box
          externalLink={true}
          href="https://summit.nextflow.io/2024/barcelona/"
          className="aspect-square"
        >
          <SubSection className="flex flex-col justify-between">
            <div className="border-b border-b-nextflow w-full flex flex-row justify-between items-center pb-4">
              <h5 className="h5">Barcelona 2024</h5>
              <ArrowUpRight />
            </div>
            <div className="imageBlend mt-6 mb-8 relative h-0 w-full overflow-hidden pb-[80%]">
              <img
                className="max-w-none w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover"
                src={e2024_bcn.src}
                alt="Barcelona 2024 Nextflow Summit"
              />
            </div>
          </SubSection>
        </Box>

        <Box
          externalLink={true}
          href="https://summit.nextflow.io/2024/boston/"
          className="aspect-square"
        >
          <SubSection className="flex flex-col justify-between">
            <div className="border-b border-b-nextflow w-full flex flex-row justify-between items-center pb-4">
              <h5 className="h5">Boston 2024</h5>
              <ArrowUpRight />
            </div>
            <div className="imageBlend mt-6 mb-8 relative h-0 w-full overflow-hidden pb-[80%]">
              <img
                className="max-w-none w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover"
                src={e2024_boston.src}
                alt="Boston 2024 Nextflow Summit"
              />
            </div>
          </SubSection>
        </Box>

        <Box
          externalLink={true}
          href="https://summit.nextflow.io/2023/barcelona/"
          className="aspect-square"
        >
          <SubSection className="flex flex-col justify-between">
            <div className="border-b border-b-nextflow w-full flex flex-row justify-between items-center pb-4">
              <h5 className="h5">Barcelona 2023</h5>
              <ArrowUpRight />
            </div>
            <div className="imageBlend mt-6 mb-8 relative h-0 w-full overflow-hidden pb-[80%]">
              <img
                className="max-w-none w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover"
                src={e2023_bcn.src}
                alt="Barcelona 2023 Nextflow Summit presenters"
              />
            </div>
          </SubSection>
        </Box>
      </div>
      <div className="text-center">
        <Button className="mt-10 relative" white arrowAfter>
          <a className="absolute w-full h-full" href="/past-events"></a> See all
          past events
        </Button>
      </div>
    </section>
  );
};

export default SectionPastEvents;
