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
  let cn = "w-full xs:w-1/2 flex-auto min-w-[100px] px-8 py-4 md:px-4";
  if (smaller)
    cn = "w-full xs:w-1/2 md:w-full flex-auto min-w-[100px] px-8 py-4 md:px-4";
  return (
    <CountUp
      start={ready ? 0 : null}
      end={value}
      duration={duration}
      separator=","
      enableScrollSpy
    >
      {({ countUpRef }) => (
        <div className={cn}>
          <div className="font-semibold text-4xl mb-2">
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
  location?: "boston" | "barcelona";
};

const Numbers: React.FC<Props> = (props = {}) => {
  const [ready, setReady] = useState(false);
  const { className, location = "boston" } = props;
  return (
    <section className={className}>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 lg:pr-12">
            <h3 className="text-5xl font-display font-semibold text-center lg:text-left mb-12 px-4 lg:px-0 lg:mb-4">
              Nextflow Summit
              <br className="hidden lg:block" /> in numbers
            </h3>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap">
            <div className="md:border-r border-1 border-brand-900 w-full md:w-2/6 md:pr-6">
              <div className="h-full w-full flex items-start flex-wrap -m-4">
                <Item
                  ready={ready}
                  value={data[location]["pharma_biotech"].value}
                  percent
                  smaller
                >
                  {data[location]["pharma_biotech"].label}
                </Item>
                <Item
                  ready={ready}
                  value={data[location]["research_academia"].value}
                  percent
                  smaller
                >
                  {data[location]["research_academia"].label}
                </Item>
              </div>
            </div>
            <div className="md:w-4/6 md:pl-12 pt-8 md:pt-0">
              <div className="h-full w-full flex items-start flex-wrap -m-4">
                <Item
                  ready={ready}
                  value={
                    data[location]["summit_in_person_attendees_prev_year"].value
                  }
                >
                  {data[location]["summit_in_person_attendees_prev_year"].label}
                </Item>
                <Item
                  ready={ready}
                  value={
                    data[location]["summit_in_person_attendees_expected"].value
                  }
                  plus
                >
                  {data[location]["summit_in_person_attendees_expected"].label}
                </Item>
                <Item
                  ready={ready}
                  value={
                    data[location]["hackathon_in_person_attendees_prev_year"]
                      .value
                  }
                >
                  {
                    data[location]["hackathon_in_person_attendees_prev_year"]
                      .label
                  }
                </Item>
                <Item
                  ready={ready}
                  value={
                    data[location]["hackathon_in_person_attendees_expected"]
                      .value
                  }
                  plus
                >
                  {
                    data[location]["hackathon_in_person_attendees_expected"]
                      .label
                  }
                </Item>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
