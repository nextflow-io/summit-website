import React, { useState } from "react";
import clsx from "clsx";
import CountUp from "@components/CountUp";
import LazyLoader from "@components/LazyLoader";

type ItemProps = {
  children: string;
  value: number;
  ready: boolean;
  plus?: boolean;
  percent?: boolean;
  smaller?: boolean;
};

const Item: React.FC<ItemProps> = ({
  children,
  value,
  ready,
  plus,
  percent,
  smaller,
}) => {
  const durations = {
    1: 500,
    1.5: 1000,
    2: 10000,
  };
  let duration = 0.5;
  Object.entries(durations).forEach(([key, length]) => {
    if (value > length) {
      duration = Number(key);
    }
  });
  let cn = "w-full xs:w-1/2 flex-auto min-w-[100px] p-4";
  if (smaller) cn = "w-full xs:w-1/2 md:w-full flex-auto min-w-[100px] p-4";
  return (
    <CountUp
      start={ready ? 0 : null}
      end={value}
      duration={duration}
      separator=","
    >
      {({ countUpRef }) => (
        <div className={cn}>
          <div className="font-semibold text-4xl mb-2 text-[#db6c60]">
            <span ref={countUpRef} className="font-display" />
            {percent && "%"}
            {plus && "+"}
          </div>
          <div className="text-sm sm:text-base">{children}</div>
        </div>
      )}
    </CountUp>
  );
};

type Props = {
  className?: string;
};

const Numbers: React.FC<Props> = ({ className }) => {
  const [ready, setReady] = useState(false);
  return (
    <LazyLoader onView={() => setReady(true)}>
      <section className={clsx(className)}>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 lg:pr-12">
              <h3 className="text-5xl font-display font-medium text-center lg:text-left mb-12 px-4 lg:px-0 lg:mb-4">
                Nextflow Summit
                <br className="hidden lg:block" /> in numbers
              </h3>
            </div>
            <div className="w-full lg:w-2/3 flex flex-wrap">
              <div className="md:border-r border-1 border-brand-900 w-full md:w-2/6 md:pr-6">
                <div className="h-full w-full flex items-center flex-wrap -m-4">
                  <Item ready={ready} value={64} percent smaller>
                    Pharma & biotech
                  </Item>
                  <Item ready={ready} value={36} percent smaller>
                    Research & academia
                  </Item>
                </div>
              </div>
              <div className="md:w-4/6 md:pl-12 pt-8 md:pt-0">
                <div className="h-full w-full flex items-center flex-wrap -m-4">
                  <Item ready={ready} value={145}>
                    Summit in-person attendees in 2023
                  </Item>
                  <Item ready={ready} value={200} plus>
                    Summit in-person attendees expected in 2024
                  </Item>
                  <Item ready={ready} value={50}>
                    Hackathon in-person attendees in 2023
                  </Item>
                  <Item ready={ready} value={125} plus>
                    Hackathon in-person attendees expected in 2024
                  </Item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyLoader>
  );
};

export default Numbers;
