import React from "react";

import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="container flex items-center justify-between py-8">
      <div className="text-xs text-brand-500">{`© ${currentYear} Seqera`}</div>
      <nav>
        <ul className="flex">
          <li>
            <a
              href="https://twitter.com/seqeralabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter.src} alt="Twitter" />
            </a>
          </li>
          <li className="mx-6">
            <a
              href="https://github.com/seqeralabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github.src} alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/14065390/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin.src} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
