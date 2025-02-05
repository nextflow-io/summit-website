import { useRef, useState } from "react";
import dates from "./dates";
import clsx from "clsx";
import img1 from "@images/photos/2025/boston/training-computer.jpg";

type KeyDatesProps = {
  className?: string;
  namespace: string;
  pathname: string;
};

const KeyDates: React.FC<KeyDatesProps> = (props) => {

  const { pathname, namespace,  } = props;
  function isActive(path) {
    return pathname?.includes(path);
  }

  let location;
  if (namespace === "2025/boston") location = 0;
  if (namespace === "2025/barcelona") location = 1;


  return (
    <section className="">
      {
        <div className="mb-10">
          <h5 className="h1 mb-2">Key dates </h5>
          <p className="monospace ">At a glance</p>
        </div>
      }

      <div className={clsx("relative flex flex-col sm:flex-row h-full")}>
        <div className="w-full border-t">
          {dates[location].dates.map((item, i) => (
            <div className={`flex flex-wrap border-b`}>
              <div className="w-full flex flex-row items-center">
                <h4 className="h4 pt-6 pb-6  w-full max-w-[100px]">
                  {item.date}
                </h4>

                <div className="pl-10 flex flex-col w-full monospace">
                  {item?.content?.map((item, i) => (
                    <div key={i} className={` border-b last:border-b-0 py-6`}>
                      {item.info}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-0 sm:ml-20 w-full sm:sticky sm:top-40 self-start">
          <div className=" pb-[100%] relative w-full h-0 overflow-hidden">
            <img
              src={img1.src}
              className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover border border-nextflow"
              alt="Key dates image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDates;
