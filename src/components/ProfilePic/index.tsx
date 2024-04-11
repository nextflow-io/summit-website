import React from "react";
import clsx from "clsx";

type Props = {
  alt: string;
  src: string;
  url?: string;
  className?: string;
};

const ProfilePic: React.FC<Props> = ({ alt, src, url, className }) => {
  return (
    <a
      href={url}
      className={clsx(
        "w-full rounded-full overflow-hidden relative block bg-brand",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover w-full h-full mix-blend-luminosity"
      />
      <span className="absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-soft-light" />
    </a>
  );
};

export default ProfilePic;
