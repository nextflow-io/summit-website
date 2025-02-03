import React from "react";
import clsx from "clsx";
import Box, { SubSection } from "@components/Box";
import PortableText from "@components/PortableText";
import ArrowUpRight from "@icons/ArrowUpRight";
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

    <Box className="">
    <SubSection className="flex flex-col justify-between min-h-[350px]">
      <div className="mb-4  pb-4 border-b border-b-nextflow w-full flex flex-row justify-between">
      <div className={clsx(styles.rank, styles[rank])}>{rank} sponsor of Nextflow Summit 2025</div>
      </div>
      <div>
      <img
              src={sponsor.image}
              title={sponsor.name}
              className="max-w-[200px] max-h-[55px] min-w-[100px] mr-4 mb-4"
            />
       <PortableText
          className="mt-4 monospace text-sm"
          value={sponsor.description}
        />
    </div>
    <div className="mt-4 pt-4 border-t border-t-nextflow w-full flex flex-row justify-between items-center">
        <h5 className="h5"><a href={sponsor.url}>Find out more</a></h5>
        <ArrowUpRight />
      </div>
    </SubSection>
  </Box>
    // <div className="p-2">
    //   <a
    //     href={`/2025/${location}/sponsors/${sponsor.slug}/`}
    //     className={clsx(
    //       "block p-8 sm:p-12",
    //       "transition-all border border-nextflow text-left",
    //     )}
    //   >
    //     <div className="flex justify-between items-start flex-col sm:flex-row">
    //       <h2 className="flex-auto">
    //         <img
    //           src={sponsor.image}
    //           title={sponsor.name}
    //           className="max-w-[200px] max-h-[55px] min-w-[100px] mr-4 mb-4"
    //         />
    //       </h2>
    //       <div className={clsx(styles.rank, styles[rank])}>{rank} sponsor</div>
    //     </div>
    //     <PortableText
    //       defaultStyle
    //       light
    //       className="mt-4 monospace"
    //       value={sponsor.description}
    //     />
    //   </a>
    // </div>
  );
};

export default Sponsor;
