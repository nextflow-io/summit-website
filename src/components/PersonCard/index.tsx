import React from "react";
import clsx from "clsx";

import SocialIcon from "@components/SocialIcon";

import type { Speaker } from "@data/speakers";

type Props = {
  person: Speaker;
  className?: string;
};

const PersonCard: React.FC<Props> = ({ person, className }) => {
  return (
    <div className={clsx("w-full md:w-1/2", className)}>
      <div
        className={clsx(
          "w-full h-full",
          "flex flex-col sm:flex-row items-center sm:items-stretch",
          "bg-brand border border-brand-900 rounded-lg py-8 sm:py-4 px-4",
        )}
      >
        <a
          href={`/2024/boston/speakers/${person.slug}`}
          className="max-w-[150px] w-full rounded-full overflow-hidden relative"
        >
          <img
            src={person.profilePicture}
            alt={person.fullName}
            className="object-cover w-full h-full mix-blend-luminosity"
          />
          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-soft-light" />
        </a>
        <div className="flex flex-col flex-auto pt-8 sm:pt-0 sm:pl-4">
          <a
            href={`/2024/boston/speakers/${person.slug}`}
            className="flex-auto text-center sm:text-left"
          >
            <h2 className="text-2xl font-display font-bold mb-2 text-nextflow">
              {person.fullName}
            </h2>
            <span className="block text-base text-gray-600 mb-4">
              {person.tagLine}
            </span>
          </a>
          <span className="flex -m-2 justify-center sm:justify-end">
            {person.links.map((link) => (
              <SocialIcon
                key={link.url}
                href={link.url}
                type={link.linkType}
                className="p-2 text-product-400"
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
