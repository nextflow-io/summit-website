import Box, { SubSection } from "@components/Box";
import img1 from "@images/photos/2026/past-events.jpg";
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
import e2025_boston from "@images/photos/past-events/e25_boston_summit.jpg";

import Button from "@components/Button";

type Props = {
  title?: string;
};

const SectionPastEvents: React.FC<Props> = ({ title }) => {
  return (
    <section className="bg-white text-black py-10 md:py-18">
      <div className="container-xl">
        <h1 className="h2 mb-10">See our past events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Box
            externalLink={true}
            href="https://summit.nextflow.io/2026/boston/"
            className="aspect-square"
          >
            <SubSection className="flex flex-col justify-between">
              <div className="border-b border-b-white w-full flex flex-row justify-between items-center pb-4">
                <h5 className="text-[1.3rem] monospace">Boston 2025</h5>
                <ArrowUpRight />
              </div>
              <div className=" mt-6 mb-8 relative h-0 w-full overflow-hidden pb-[80%]">
                <img
                  className="max-w-none w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover"
                  src={e2025_boston.src}
                  alt="Boston 2025 Nextflow Summit"
                />
              </div>
            </SubSection>
          </Box>
          <Box
            externalLink={true}
            href="https://summit.nextflow.io/2024/barcelona/"
            className="aspect-square"
          >
            <SubSection className="flex flex-col justify-between">
              <div className="border-b border-b-white w-full flex flex-row justify-between items-center pb-4">
                <h5 className="text-[1.3rem] monospace">Barcelona 2024</h5>
                <ArrowUpRight />
              </div>
              <div className="mt-6 mb-8 relative h-0 w-full overflow-hidden pb-[80%]">
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
              <div className="border-b border-b-white w-full flex flex-row justify-between items-center pb-4">
                <h5 className="text-[1.3rem] monospace">Boston 2024</h5>
                <ArrowUpRight />
              </div>
              <div className="mt-6 mb-8 relative h-0 w-full overflow-hidden pb-[80%]">
                <img
                  className="max-w-none w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover"
                  src={e2024_boston.src}
                  alt="Boston 2024 Nextflow Summit"
                />
              </div>
            </SubSection>
          </Box>
        </div>
        <div className="text-center">
          <Button className="mt-10 relative" dark>
            <a className="absolute w-full h-full" href="/past-events"></a> See
            all past events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPastEvents;
