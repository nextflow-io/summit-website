import React from "react";

import Github from "@icons/Github";
import Linkedin from "@icons/Linkedin";
import Twitter from "@icons/Twitter";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="container flex items-center justify-between py-8 text-white opacity-50">
        <div className="text-xs">{`© ${currentYear} Seqera`}</div>
        <nav>
          <ul className="flex">
            <li>
              <a
                href="https://twitter.com/seqeralabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
            </li>
            <li className="mx-6">
              <a
                href="https://github.com/seqeralabs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/14065390/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
