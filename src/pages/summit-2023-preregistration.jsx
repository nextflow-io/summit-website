import React from 'react';

import { List } from 'website-components';

import HubspotEmbedForm from '../components/HubspotEmbedForm';
import Seo from '../components/Seo';

import PlaceholderRectangle from '../images/visuals/placeholder-rectangle.svg';

const Preregistration2023Page = () => {
  return (
    <>
      <Seo
        title="Nextflow Summit 2023 pre-registration"
      />
      <div className="py-32 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full lg:col-5">
              <h1 className="typo-h2 text-green-600">
                Nextflow Summit 2023
              </h1>
              <List type="bullet" iconClassName="text-white" className="mt-4">
                <List.Item className="typo-body">
                  Barcelona Hackathon: October 16-18, 2023
                </List.Item>
                <List.Item className="typo-body">
                  Barcelona Summit: October 18-20, 2023
                </List.Item>
                <List.Item className="typo-body">
                  Boston Hackathon: November 2023 (dates to be confirmed)
                </List.Item>
                <List.Item className="typo-body">
                  Boston Summit: November 2023 (dates to be confirmed)
                </List.Item>
              </List>
              <p className="typo-intro mt-4">
                We're excited to announce that this year's summit will take place in two of the world's most vibrant
                cities: Barcelona and Boston. This event is an excellent opportunity for scientists, bioinformaticians,
                data scientists and engineers to come together and discuss the latest advancements in Nextflow
                technology, share their experiences, and collaborate on innovative projects.
              </p>
              <p className="typo-body mt-4">
                If you're interested in attending either the Barcelona or Boston events, please fill out the form below
                to stay up-to-date on all the latest news and updates. Please note that this form is a registration of
                interest only and does not guarantee your spot at the event. Once registration opens, we'll be in touch
                with more information on how to secure your place at the summit.
              </p>
            </div>
            <div className="col-full lg:col-5 lg:ml-2/12 mt-4 lg:mt-0">
              <div className="relative">
                <div
                  className="hidden lg:block absolute w-full h-full bg-center bg-cover bg-no-repeat rounded-md -mt-6 ml-6"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <div className="relative">
                  <HubspotEmbedForm title="Register to receive the updates" formId="9bed0089-48cc-482a-adcc-afcb2f597ae9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preregistration2023Page;
