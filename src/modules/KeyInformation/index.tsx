import React from "react";
import clsx from "clsx";
import InfoBox from "./InfoBox";
import data from "./data";

type Props = {
  className?: string;
  location?: "boston" | "barcelona";
};

const KeyInformation: React.FC<Props> = ({
  className = "",
  location = "boston"
}) => {
  return (
    <section className={clsx("container", className)}>
      <div className="flex -m-2 lg:-m-4 flex-wrap">
        {data[location].map((info) => (
          <div className="w-full md:w-1/3 p-2 lg:p-4">
            <InfoBox
              title={info.title}
              subtitle={info.subtitle}
              icon={info.icon}
              link={!!info.link && `${info.link}`}
            >
              {info.description}
            </InfoBox>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyInformation;
