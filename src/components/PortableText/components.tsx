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
        <a href={href} {...linkAttributes} className="text-[var(--sl-blue)] hover:underline">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    "strike-through": ({ children }) => (
      <s className="line-through">{children}</s>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 my-4">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="ml-4">{children}</li>,
  },
  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
  },
};

export default components;