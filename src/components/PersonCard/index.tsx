import React from "react";
import clsx from "clsx";

import SocialIcon from "./SocialIcon";

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
          "flex flex-col md:flex-row items-stretch",
          "bg-brand border border-brand-900 rounded-lg p-4",
        )}
      >
        <a
          href={`/2024/boston/speakers/${person.slug}`}
          className="max-w-[150px] w-full rounded-lg overflow-hidden relative"
        >
          <img
            src={person.profilePicture}
            alt={person.fullName}
            className="object-cover w-full h-full mix-blend-luminosity"
          />
          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-soft-light" />
        </a>
        <div className="flex flex-col flex-auto md:pl-4">
          <a
            href={`/2024/boston/speakers/${person.slug}`}
            className="flex-auto"
          >
            <h2 className="text-2xl font-bold mb-2 text-nextflow">
              {person.fullName}
            </h2>
            <span className="block text-base text-gray-600 mb-4">
              {person.tagLine}
            </span>
          </a>
          <span className="flex -m-2 justify-end">
            {person.links.map((link) => (
              <a
                href={link.url}
                key={link.url}
                className="p-2 text-product-400"
                title={link.linkType}
              >
                <SocialIcon type={link.linkType} />
              </a>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
