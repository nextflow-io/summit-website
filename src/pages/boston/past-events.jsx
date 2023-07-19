import React, { useState } from 'react';

import {
  Button,
  Link,
  Marquee
} from 'website-components';

import Card from '../../components/Card';
import RegisterCTA from '../../components/RegisterCTA';
import Seo from '../../components/Seo';
import Tabs from '../../components/Tabs';
import YoutubeIframe from '../../components/YoutubeIframe';
import ContactUs from '../../components/ContactUs';

const PastEventsPage = () => {
  const [ year, setYear ] = useState('2022');

  return (
    <>
      <Seo
        title="Past Events"
      />
      <div className="py-20 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row lg:flex-nowrap">
            <div className="col-full lg:col-6">
              <h1 className="typo-display1">
                Past events
              </h1>
              <p className="typo-body mt-4">
                Past events have provided insights into Nextflow's origins, development, and its applications in various
                domains, highlighting its potential and impact on scientific research, data analysis, and workflow
                management.
              </p>
              <div className="mt-4">
                <Button to="/2022/gallery/" variant="secondary" size="md">
                  View gallery
                </Button>
              </div>
            </div>
            <div className="col-full lg:col-6">
              <YoutubeIframe id="szWI3EW2ijY" className="relative top-6"></YoutubeIframe>
            </div>
          </div>
        </div>
      </div>
      <Marquee className="typo-body bg-green-300 text-black" to="/boston/call-for-abstracts/" type="reset">
        Call for abstracts now open
      </Marquee>
      <div className="container-md py-16">
        <Tabs current={year} setCurrent={setYear}>
          <Tabs.Item index="2022">
            2022
          </Tabs.Item>
          <Tabs.Item index="2019">
            2019
          </Tabs.Item>
          <Tabs.Item index="2018">
            2018
          </Tabs.Item>
          <Tabs.Item index="2017">
            2017
          </Tabs.Item>
        </Tabs>
        {year === '2022' && (
          <>
            <div className="mt-4">
              <Card>
                <h3 className="typo-h4">
                  SUMMIT 2022
                </h3>
                <p className="typo-body mt-4">
                  Oct 12, 2022
                  <span className="mx-2">|</span>
                  <Link to="/2022/">
                    Visit website
                  </Link>
                </p>
              </Card>
            </div>
            <div className="mt-4">
              <Card>
                <h3 className="typo-h4">
                  nf-core hackathon 2022
                </h3>
                <p className="typo-body mt-4">
                  Oct 12, 2022
                  <span className="mx-2">|</span>
                  <Link to="https://nf-co.re/events/2022/hackathon-october-2022">
                    Visit website
                  </Link>
                </p>
              </Card>
            </div>
          </>
        )}
        {year === '2019' && (
          <>
            <div className="mt-4">
              <Card>
                <h3 className="typo-h4">
                  Nextflow Camp 2019
                </h3>
                <p className="typo-body mt-4">
                  Sep 19-20, 2019
                  <span className="mx-2">|</span>
                  <Link to="https://www.nextflow.io/nfcamp/2019/program.html">
                    Visit website
                  </Link>
                </p>
              </Card>
            </div>
          </>
        )}
        {year === '2018' && (
          <>
            <div className="mt-4">
              <Card>
                <h3 className="typo-h4">
                  nf-hack18
                </h3>
                <p className="typo-body mt-4">
                  Nov 22-23, 2018
                  <span className="mx-2">|</span>
                  <Link to="https://github.com/nextflow-io/nf-hack18/blob/master/schedule.md">
                    Visit website
                  </Link>
                </p>
              </Card>
            </div>
          </>
        )}
        {year === '2017' && (
          <>
            <div className="mt-4">
              <Card>
                <h3 className="typo-h4">
                  nf-hack17
                </h3>
                <p className="typo-body mt-4">
                  Sep 14-15, 2017
                  <span className="mx-2">|</span>
                  <Link to="https://github.com/nextflow-io/nf-hack17/blob/master/schedule.md">
                    Visit website
                  </Link>
                </p>
              </Card>
            </div>
          </>
        )}
      </div>
      <RegisterCTA />
			<ContactUs />
    </>
  );
};

export default PastEventsPage;
