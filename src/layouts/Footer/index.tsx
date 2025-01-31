import React from "react";
import SeqeraLogo from "./SeqeraLogo";
import FooterLogo from "./FooterLogo";
import Subscribe from "@modules/Subscribe";
import styles from "./styles.module.css";
import Contact from "@modules/Contact";
import footerMenuLinks from "./footerMenuLinks";

const currentYear = new Date().getFullYear();

type Props = {

};

const Footer: React.FC<Props> = (props) => {

  return (
    <footer id="footer">
      <Contact className="py-8" />
      <div className={`${styles.footer} wrapper mt-16 text-white monospace`}>
        <nav className="container flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full max-w-[500px] lg:pr-10 mb-10 lg:mb-0">
            <Subscribe />
          </div>
          <div className="w-full flex lg:justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:content-center whitespace-nowrap">
              <nav>
                <ul>
                  {footerMenuLinks?.map(({ name, url, dropdowns }, i) => (
                    <div className="mb-10">
                      <p className="mb-2">{name}</p>
                      {dropdowns?.map(({ name, url }, i) => (
                        <li key={i}>
                          <a href={url}>{name}</a>
                        </li>
                      ))}
                    </div>
                  ))}
                </ul>
              </nav>

              <ul className="flex flex-col">
                <p className="mb-6">Follow</p>
                <li>
                  <a
                    href="https://twitter.com/seqeralabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://github.com/seqeralabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCBDzWsz3bDsxZblHbmGxsww"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/14065390/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="wrapper mb-16">
        <div className="mt-10 mb-6">
          <FooterLogo />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <small>By</small>
            <div className="pl-2 max-w-[150px]">
              <SeqeraLogo />
            </div>
          </div>
          <div className="monospace">{`© ${currentYear} Seqera`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
