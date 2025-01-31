import React from "react";
import SeqeraLogo from "./SeqeraLogo";
import FooterLogo from "./FooterLogo";
import Subscribe from "@modules/Subscribe";
import styles from "./footer.module.css";
import Contact from "@modules/Contact";
import footerMenuLinks from "./footerMenuLinks";

const currentYear = new Date().getFullYear();

type Props = {};

const Footer: React.FC<Props> = (props) => {
  return (
    <footer id="footer">
      <Contact className="py-8" />
      <div className={`${styles.footer} mt-16 text-white monospace`}>
        <nav className="container flex flex-col lg:flex-row lg:justify-between md:flex-wrap lg:flex-nowrap">
          <div className="w-full max-w-[500px] lg:pr-10 mb-10 lg:mb-0">
            <Subscribe />
          </div>
          <nav className="w-full flex lg:justify-center">
            <div className="whitespace-nowrap grid grid-cols-2 gap-x-8 lg:flex lg:flex-row">
              {footerMenuLinks?.map(({ name, url, dropdowns }, i) => {
                let setTarget = false;
                if (name == "Follow") setTarget = true;
                const linkProps = setTarget
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {};

                return (
                  <ul className="mb-16 md:mb-0 lg:ml-16">
                    <p className="mb-6">{name}</p>
                    {dropdowns?.map(({ name, url }, i) => (
                      <li key={i}>
                        <a href={url} {...linkProps} className="transition-all duration-300 ease-in-out hover:transition-all hover:text-nextflow">
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          </nav>
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
