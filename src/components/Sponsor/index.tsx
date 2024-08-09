import React from "react";
import clsx from "clsx";

import PortableText from "@components/PortableText";

import styles from "./styles.module.css";

const Sponsor = ({ sponsor, location }) => {
  const ranks = {
    diamond: "Diamond",
    platinum: "Platinum",
    gold: "Gold",
    silver: "Silver",
    bronze: "Bronze",
  };
  let rank = ranks[sponsor.rank];
  if (location === "barcelona") rank = ranks[sponsor.rankBarcelona];
  return (
    <div className="p-2">
      <a
        href={`/2024/${location}/sponsors/${sponsor.slug}/`}
        className={clsx(
          "block p-8 sm:p-12",
          "rounded-md transition-all bg-brand border border-brand-900 text-left",
        )}
      >
        <div className="flex justify-between items-start flex-col sm:flex-row">
          <h2 className="flex-auto">
            <img
              src={sponsor.image}
              title={sponsor.name}
              className="max-w-[200px] max-h-[55px] min-w-[100px] mr-4 mb-4"
            />
          </h2>
          <div className={clsx(styles.rank, styles[rank])}>{rank} sponsor</div>
        </div>
        <PortableText
          defaultStyle
          light
          className="mt-4"
          value={sponsor.description}
        />
      </a>
    </div>
  );
};

export default Sponsor;
