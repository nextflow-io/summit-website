import Box from "@components/Box";
import img1 from "@images/photos/2026/past-events.jpg";
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
            title="Barcelona 2025"
            href="https://summit.nextflow.io/2025/boston/"
            image={e2025_boston.src}
          />
          <Box
            title="Boston 2025"
            href="https://summit.nextflow.io/2025/boston/"
            image={e2025_boston.src}
          />
          <Box
            title="Boston 2024"
            href="https://summit.nextflow.io/2024/boston/"
            image={e2024_boston.src}
          />
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
