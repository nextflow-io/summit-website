import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import HeroDots from '../../components/HeroDots';
import Seo from '../../components/Seo';

import { Button } from 'website-components';

const RegisterPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';
    script.async = true;
    script.setAttribute(
      'data-url',
      'https://tickets.nextflow.io/checkout/new-session/id/2803612/chk/29b5/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true'
    );
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');
    const ttWidget = document.getElementsByClassName('tt-widget');
    ttWidget[0].appendChild(script);
  }, []);

  return (
    <>
      <Seo title="Purchase ticket: Barcelona" />
      <HeroDots className="text-center">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto">
            <h1 className="typo-display1">Registration closed</h1>
            <div className="max-w-xl mx-auto mt-4">
              {/* <p className="typo-body">Register free for virtual attendance. In-person places are sold out.</p> */}
              <p className="typo-body">
                Registration is now closed.
                <Link to="/barcelona/streaming" className="text-green-300">
                  Check instructions
                </Link>{' '}
                on how to live-stream the event online.
              </p>
            </div>
          </div>
        </div>
      </HeroDots>
      <div className="container-md py-16 max-w-[700px]">
        <div className="tt-widget">
          <div className="tt-widget-fallback">
            <p className="text-center">
              <Button
                variant="primary"
                size="md"
                to="https://tickets.nextflow.io/checkout/new-session/id/2803612/chk/29b5/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true"
                arrow
              >
                Click here to buy tickets
              </Button>
            </p>
          </div>
        </div>
        <p className="text-center">
          <a href="/refund-policy/" target="_blank" className="text-green-300">
            Refund policy
          </a>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
