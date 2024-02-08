import React from "react";
import keyDates from "@data/keyDates";
import tiles from "./tiles.png";
import Box from "@components/Box";

const Row = ({ children, title }) => {
  return (
    <div className="flex items-center border-b border-brand-400 py-2 mb-4">
      <div className="w-1/4 h3">{title}</div>
      <div className="w-3/4 text-2xl leading-10">{children}</div>
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
};

const KeyDates: React.FC<Props> = ({ showImg, showTitle }) => {
  return (
    <Box>
      <div className="flex">
        <div className="flex-auto md:pr-8">
          {showTitle && <h5 className="h3 mb-6">Key dates</h5>}
          {keyDates.map((item, i) => (
            <Row key={i} title={getTitle(item)}>
              {item.title}
            </Row>
          ))}
        </div>
        {showImg && (
          <div className="w-[350px] hidden md:block">
            <img src={tiles.src} className="h-full object-cover" />
          </div>
        )}
      </div>
    </Box>
  );
};

export default KeyDates;
