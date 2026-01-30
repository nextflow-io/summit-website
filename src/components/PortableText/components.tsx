import React from 'react';
import type { PortableTextReactComponents } from '@portabletext/react';

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => {
      const { blank, href } = value;
      let linkAttributes = {};
      if (blank)
        linkAttributes = { target: '_blank', rel: 'noopener noreferrer' };
      return (
        <a
          href={href}
          {...linkAttributes}
          className="underline hover:opacity-60 transition-all duration-300"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    'strike-through': ({ children }) => (
      <s className="line-through">{children}</s>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-none list-outside my-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-outside my-2 ml-3">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-sm flex items-start gap-2 mb-2">
        <span className="font-medium flex-shrink-0 text-[.8rem]">→</span>
        <span className="flex-1">{children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-sm leading-tight mb-2">{children}</li>
    ),
  },
  block: {
    normal: ({ children }) => <p className="mb-2 text-[.9rem]">{children}</p>,
  },
};

export default components;
