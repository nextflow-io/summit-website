import { useState } from "react";
import CountUp from "@components/CountUp";
import data from "./data";

type ItemProps = {
  children: string;
  value: number;
  ready: boolean;
  plus?: boolean;
  percent?: boolean;
  smaller?: boolean;
};

type Props = {
  className?: string;
  location?: "boston" | "barcelona";
};

const Numbers: React.FC<Props> = (props = {}) => {
  const [ready, setReady] = useState(false);
  const { className, location = "boston" } = props;
  return (
    <section className={`${className} bg-nextflow text-black`}>
      <div className="container-xl py-10 md:py-20">
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mb-10 w-full md:w-1/2 md:pr-12">
            <h3 className="text-2xl md:text-3xl mb-4 md:mb-0">
              Nextflow Training
              <br /> and nf-core Hackathon
              <br /> by the numbers
            </h3>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="w-full flex flex-row">
              <div className="px-4 py-2 bg-black w-full text-white flex flex-row items-center">
                <h3 className="font-display text-[3.5rem] mr-4 leading-none">
                  70%
                </h3>
                <p className="max-w-[100px] text-[.8rem] leading-tight">
                  Pharma & Biotech
                </p>
              </div>
              <div className="px-4 py-2 bg-white w-full flex flex-row items-center">
                <h3 className="font-display text-3xl mr-4 leading-none">30%</h3>
                <p className="max-w-[100px] text-[.8rem] leading-tight">
                  Research & Academia
                </p>
              </div>
            </div>
            <div className="border-b border-black py-2">
              <div className=" flex flex-row items-center">
                <h4 className="text-[3.75rem] font-display mr-4 leading-none">
                  64
                </h4>
                <p className="text-md md:text-lg leading-tight">
                  Nextflow Training in-person attendees in 2025
                </p>
              </div>
            </div>
            <div className="border-b border-black py-2">
              <div className=" flex flex-row items-center">
                <h4 className="text-[3.75rem] font-display mr-4 leading-none">
                  137
                </h4>
                <p className="text-md md:text-lg leading-tight">
                  Hackathon in-person attendees in 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
