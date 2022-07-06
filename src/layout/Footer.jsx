import React from 'react';
import {
  Link,
  SeqeraIcon,
  SlackIcon,
  TwitterIcon,
  YoutubeRectangleIcon
} from 'website-components';

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white mt-auto">
        <div className="container-lg">
          <div className="border-white border-t opacity-40" />
          <div className="flex justify-between py-4">
            <div>
              <Link to="https://seqera.io/" noBorder className="typo-small">
                &copy; 2022 Seqera Labs
              </Link>
            </div>
            <div className="flex items-center md:justify-end">
              <div className="mr-4">
                <Link to="http://twitter.com/hashtag/NextflowSummit" noBorder>
                  <TwitterIcon className="w-5 h-5" />
                </Link>
              </div>
              <div className="mr-4">
                <Link to="https://www.youtube.com/c/nextflow" noBorder>
                  <YoutubeRectangleIcon className="w-5 h-5" />
                </Link>
              </div>
              <div className="mr-4">
                <Link to="https://www.nextflow.io/slack-invite.html" noBorder>
                  <SlackIcon className="w-5 h-5" />
                </Link>
              </div>
              <div>
                <Link to="https://seqera.io" noBorder>
                  <SeqeraIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
