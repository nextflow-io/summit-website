import React from "react";
import clsx from "clsx";
import keyDates from "@data/keyDates";
import tiles from "./tiles.png";
import Box from "@components/Box";

const Row = ({ children, title }) => {
  return (
    <div className="flex flex-wrap items-center border-b border-brand-800 py-2 mb-4">
      <div className="w-full text-xl font-display font-semibold">{title}</div>
      <div className="w-full md:text-lg md:leading-6 py-2 md:py-0 text-brand-300">
        {children}
      </div>
    </div>
  );
};

function getTitle(item) {
  if (!item.endDay) return item.date;
  return `${item.date} - ${item.endDay}`;
}

type Props = {
  showImg?: boolean;
  showTitle?: boolean;
  location?: "boston" | "barcelona";
};

const KeyDates: React.FC<Props> = ({
  showImg,
  showTitle,
  location = "boston",
}) => {
  return (
    <Box>
      <div className={clsx("relative", { "md:pr-[370px]": showImg })}>
        {showTitle && <h5 className="h3 mb-6">Key dates</h5>}
        {keyDates[location]?.map((item, i) => (
          <Row key={i} title={getTitle(item)}>
            {item.title}
            {item.description && <p className="text-sm opacity-50">{item.description}</p> }
          </Row>
        ))}
        {showImg && (
          <div className="w-[350px] hidden md:block absolute top-0 right-0 bottom-0 rounded-lg overflow-hidden">
            <img src={tiles.src} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </Box>
  );
};

export default KeyDates;
