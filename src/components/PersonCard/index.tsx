import React from "react";
import clsx from "clsx";

import SocialIcon from "@components/SocialIcon";
import speakers from "@data/speakers";

import type { Speaker } from "@data/speakers";
import ProfilePic from "@components/ProfilePic";

type Props = {
  person: Speaker;
  className?: string;
  smaller?: boolean;
  location?: "boston" | "barcelona";
};

const PersonCard: React.FC<Props> = ({
  className,
  smaller,
  location = "boston",
  ...props
}) => {
  const person = speakers[location]?.find(
    (speaker) => speaker.fullName === props.person.fullName,
  );
  if (!person) return null;
  return (
    <div className={className}>
      <div
        className={clsx(
          "w-full h-full",
          "flex flex-col sm:flex-row items-center sm:items-stretch",
          "bg-brand border border-brand-900 rounded-lg py-8 sm:py-4 px-4",
          "hover:border-nextflow transition-all duration-300",
        )}
      >
        <ProfilePic
          alt={person.fullName}
          src={person.profilePicture}
          url={`/2024/${location}/speakers/${person.slug}`}
          className={clsx({
            "max-w-[150px]": !smaller,
            "max-w-[100px]": smaller,
          })}
        />
        <div className="flex flex-col flex-auto pt-8 sm:pt-0 sm:pl-4">
          <a
            href={`/2024/${location}/speakers/${person.slug}`}
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
