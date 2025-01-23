import React from "react";
import SeqeraLogo from "./SeqeraLogo";
import FooterLogo from "./FooterLogo";
import Subscribe from "@modules/Subscribe";
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="wrapper py-8 text-white monospace">
        <nav className="flex flex-col lg:flex-row lg:justify-between">
          <div className="w-full max-w-[500px] lg:pr-10 mb-10 lg:mb-0">
            <Subscribe />
          </div>
          <div className="w-full flex lg:justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-12 lg:content-center whitespace-nowrap">
              <ul className="flex flex-col">
                <p className="mb-6">Pages</p>
                <li>
                  <a href="/past-events">Past Events</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
                <li>
                  <a href="/call-for-abstracts">Call for Abstracts</a>
                </li>
              </ul>
              <ul className="flex flex-col ">
                <p className="mb-6">Boston</p>
                <li>Coming Soon</li>
              </ul>
              <ul className="flex flex-col ">
                <p className="mb-6">Barcelona</p>
                <li>Coming Soon</li>
              </ul>
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
            <div className="pl-2 max-w-[150px]"><SeqeraLogo /></div>
          </div>
          <div className="monospace">{`© ${currentYear} Seqera`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
