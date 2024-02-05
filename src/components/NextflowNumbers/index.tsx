import React, { useState } from "react";
import classNames from "classnames";
import CountUp from "../CountUp";
import LazyLoader from "../LazyLoader";

type ItemProps = {
  children: string;
  value: number;
  ready: boolean;
  plus?: boolean;
};

const Item: React.FC<ItemProps> = ({ children, value, ready, plus }) => {
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
  return (
    <CountUp
      start={ready ? 0 : null}
      end={value}
      duration={duration}
      separator=","
    >
      {({ countUpRef }) => (
        <div className="w-1/2 sm:w-1/2 md:w-1/4 p-4 sm:p-4">
          <div className="font-semibold text-2xl mb-2">
            <span ref={countUpRef} className="font-display" />
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

const Numbers = ({ className }) => {
  const [ready, setReady] = useState(false);
  return (
    <LazyLoader onView={setReady}>
      <section className={classNames(className)}>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 lg:pr-8">
              <h3 className="text-5xl font-display font-medium text-center lg:text-left mb-12 px-4 lg:px-0 lg:mb-4">
                Nextflow SUMMIT
                <br className="hidden lg:block" /> in numbers
              </h3>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap -m-4">
                <Item ready={ready} value={25000} plus>
                  Estimated Nextflow users
                </Item>
                <Item ready={ready} value={9000}>
                  Seqera Cloud users
                </Item>
                <Item ready={ready} value={1900}>
                  Nextflow community open-source contributors
                </Item>
                <Item ready={ready} value={100}>
                  High-quality, curatednf-core pipelines
                </Item>
                <Item ready={ready} value={160000}>
                  Nextflow monthly downloads
                </Item>
                <Item ready={ready} value={150} plus>
                  Seqera Enterprise customers
                </Item>
                <Item ready={ready} value={85}>
                  Seqera employees
                </Item>
                <Item ready={ready} value={7500} plus>
                  Citations for Nextflow, nf-core & MultiQC
                </Item>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyLoader>
  );
};

export default Numbers;
