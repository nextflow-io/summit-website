import React from "react";
import type { PortableTextReactComponents } from "@portabletext/react";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => {
      const { blank, href } = value;
      let linkAttributes = {};
      if (blank)
        linkAttributes = { target: "_blank", rel: "noopener noreferrer" };
      return (
        <a href={href} {...linkAttributes} className="text-[var(--sl-blue)]">
          {children}
        </a>
      );
    },
  },
};

export default components;
