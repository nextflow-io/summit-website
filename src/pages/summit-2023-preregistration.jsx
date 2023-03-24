import React from 'react';

import { Link } from 'website-components';

import HubspotEmbedForm from '../components/HubspotEmbedForm';
import Seo from '../components/Seo';

import IconNextflow from '../images/logo-nextflow.svg';
import PlaceholderRectangle from '../images/visuals/placeholder-rectangle.svg';

const Preregistration2023Page = () => {

  return (
    <>
      <Seo
        title="Nextflow Summit 2023 pre-registration"
        image="/images/2023_summit_preregistration.jpg"
      />
      <div className="pt-24 pb-32 bg-gray-900 text-white">
        <div className="container-lg">
          <div className="row items-center">
            <div className="col-full lg:col-7">
              <img src={IconNextflow} className="h-14 mb-4" alt="Nextflow Logo" />
              <h1 className="typo-h2 uppercase mb-4">
                Summit 2023
              </h1>
              <p className="typo-blockquote max-w-xl mb-4">
                Join us for the latest developments and innovations from the Nextflow world.
              </p>
              <h3 class="text-green-600 typo-h5 uppercase mt-6">
                🇪🇸 Barcelona Hackathon &amp; Summit
              </h3>
              <p class="tracking-wider">October 16-20, 2023</p>
              <h3 class="text-green-600 typo-h5 uppercase mt-6">
                🇺🇸 Boston Hackathon &amp; Summit
              </h3>
              <p class="tracking-wider">November 2023 (dates to be confirmed)</p>
              <p className="typo-intro mt-6">
                We're excited to announce that this year's summit will take place in two of the world's most vibrant
                cities: Barcelona and Boston.
              </p>
              <p className="typo-intro mt-6">
                This event is an excellent opportunity for scientists, bioinformaticians,
                data scientists and engineers to come together and discuss the latest advancements in Nextflow
                technology, share their experiences, and collaborate on innovative projects.
              </p>
              <p className="typo-body mt-4">
                If you're interested in attending either the Barcelona or Boston events, please fill out the form
                on this page to stay up-to-date on all the latest event news and updates.
                You can also join the main <Link to="https://seqera.io/newsletter/" className="hover:text-green-600 transition-colors">Seqera Labs newsletter</Link>{ " " }
                for a bimonthly newsletter about the entire Nextflow ecosystem.
              </p>
              <p className="typo-body mt-4">
                Please note that this form is a registration of
                interest <em>only</em> and does not guarantee your spot at the event. Once registration opens, we'll be in touch
                with more information on how to secure your place at the summit.
              </p>
            </div>
            <div className="col-full lg:col-5 mt-4 lg:mt-8">
              <div className="relative">
                <div
                  className="hidden lg:block absolute w-full h-full bg-center bg-cover bg-no-repeat rounded-md -mt-6 ml-6"
                  style={{ backgroundImage: `url(${PlaceholderRectangle})` }}
                />
                <div className="relative">
                  <HubspotEmbedForm title="Register to receive updates" formId="9bed0089-48cc-482a-adcc-afcb2f597ae9" />
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
