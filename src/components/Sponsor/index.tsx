import React from "react";
import clsx from "clsx";
import Box, { SubSection } from "@components/Box";
import PortableText from "@components/PortableText";
import ArrowUpRight from "@icons/ArrowUpRight";
import styles from "./styles.module.css";

const Sponsor = ({ sponsor, location }) => {
  const ranks = {
    diamond: "Organizer",
    platinum: "Platinum",
    gold: "Gold",
    silver: "Silver",
    bronze: "Bronze",
  };
  let rank = ranks[sponsor.rank];
  if (location === "barcelona") rank = ranks[sponsor.rankBarcelona];
  return (
    <Box className="flex flex-col justify-between min-h-[350px]">
      <SubSection className="">
        <div className="mb-4 pb-4 border-b border-b-nextflow w-full flex flex-row justify-between">
          <div className={clsx(styles.rank, styles[rank], "monospace")}>
            {rank} {rank !== "Organizer" && 'Sponsor ' } of Nextflow Summit 2025
          </div>
        </div>
        <div>
          <div className={clsx(styles.sponsorImage, "monospace")}>
            <img
              src={sponsor.image}
              title={sponsor.name}
              className="max-w-[200px] max-h-[55px] min-w-[100px] mr-4 my-10"
            />
          </div>
          <PortableText
            className="mt-4 monospace text-sm"
            value={sponsor.description}
          />
        </div>
      </SubSection>
      <div
        className={clsx(
          styles.ctaLink,
          "relative mt-8 pt-4 border-t border-t-nextflow w-full flex flex-row justify-between items-center",
        )}
      >
        <h5 className="h5">Learn more</h5>
        <ArrowUpRight />
        <a
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          href={sponsor.url}
        ></a>
      </div>
    </Box>
  );
};

export default Sponsor;
