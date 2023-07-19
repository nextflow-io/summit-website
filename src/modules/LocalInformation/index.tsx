import React from 'react';

import { Accordion, Link, List } from 'website-components';

const AccordionItem = ({ children }) => (
  <Accordion.Item
    className="border border-gray-800"
    inactiveClassName=""
    iconClassName="fill-green-300"
    activeIconClassName="fill-green-300"
  >
    {children}
  </Accordion.Item>
);

const LocalInformation = () => {
  return (
    <div className="text-white">
      <div className="mt-8">
        <Accordion>
          <AccordionItem>
            <Accordion.Summary>
              <p className="typo-intro">Health and safety (COVID-19)</p>
            </Accordion.Summary>
            <Accordion.Detail>
              <p className="typo-body mb-4">
                COVID-19 travel restrictions were lifted in Spain. Providing proof of vaccination, recovery from
                COVID-19 or negative test results is not required.&nbsp;
                <Link to="https://europa.eu/youreurope/citizens/travel/travel-and-covid/spain/index_en.htm">
                  Learn more
                </Link>
              </p>
              <p className="typo-body mb-4">
                We ask for anyone who displays COVID 19 symptoms such as fever, cough, sore throat, general weakness,
                fatigue and muscle pain and loss of smell and taste to not mingle with other attendees.. Whilst it is
                not feasible for us to enforce any rules, we request that attendees behave responsibly.
              </p>

              <p className="typo-body mb-4">
                We reserve the right to make health safety changes according to local rules in the eventuality the
                conditions change.
              </p>
            </Accordion.Detail>
          </AccordionItem>
          <AccordionItem>
            <Accordion.Summary>
              <p className="typo-intro">Visas</p>
            </Accordion.Summary>
            <Accordion.Detail>
              <p className="typo-body mb-4">
                EU citizens do not need a visa to visit Barcelona. Citizens of non-EU countries may require a visa and
                must possess a passport valid for at least three months. Please check the entry requirements for Spain
                to review visa rules for your own situation.
              </p>
              <p className="typo-body">
                If you need to apply for a visa to enter Spain we can issue you with a personalized invitation letter to
                assist your application. If this pertains to you please contact us by email at{' '}
                <Link to="mailto:hr@seqera.io">hr@seqera.io</Link>.
              </p>
            </Accordion.Detail>
          </AccordionItem>
          <AccordionItem>
            <Accordion.Summary>
              <p className="typo-intro">From Barcelona Sants Train Station</p>
            </Accordion.Summary>
            <Accordion.Detail>
              <p className="typo-body">
                Barcelona Sants is the main railway station in Barcelona. It has direct rail links with other European
                cities, including Paris, Zurich, and Milan, and high-speed trains to other major centers in Spain. The
                city center can be reached easily from Barcelona Sants using public transport. Tickets for local public
                transport can be purchased from the station.
              </p>
            </Accordion.Detail>
          </AccordionItem>
          <AccordionItem>
            <Accordion.Summary>
              <p className="typo-intro">From Barcelona El Prat Airport</p>
            </Accordion.Summary>
            <Accordion.Detail>
              <p className="typo-body">
                The Aerobus is an express shuttle bus service between Barcelona Airport and Barcelona city center. There
                are Aerobuses to and from Terminal 1 and Terminal 2. The TMB Airport Bus Number 46 and Night Bus N17 and
                N16 are also available for transfers between the airport and the city center. TMB buses are cheaper but
                are also slower, less frequent, and provide less luggage space than the Aerobuses.
              </p>
            </Accordion.Detail>
          </AccordionItem>
          <AccordionItem>
            <Accordion.Summary>
              <p className="typo-intro">City transport</p>
            </Accordion.Summary>
            <Accordion.Detail>
              <p className="typo-body">
                Mobility in Barcelona is easy as a result of its extensive metro, tram, bus, and the city and suburban
                rail services. The city also has a public bike hire scheme and more than 200 km of bike lanes, as well
                as a taxi fleet that includes environmentally friendly options.
              </p>
            </Accordion.Detail>
          </AccordionItem>
          <AccordionItem>
            <Accordion.Summary>
              <p className="typo-intro">Code of Conduct</p>
            </Accordion.Summary>
            <Accordion.Detail>
              <p className="typo-body mb-4">
                <List type="bullet" iconClassName="text-white" className="mb-6">
                  <List.Item className="typo-body">
                    <span className="mr-2">Be nice and respectful to others</span>
                  </List.Item>
                  <List.Item className="typo-body">
                    <span className="mr-2">
                      Collaborate to create a safe and supportive environment for all participants
                    </span>
                  </List.Item>
                  <List.Item className="typo-body">
                    <span className="mr-2">Refrain from harassing speech, content, and other unwelcome behaviour</span>
                  </List.Item>
                  <List.Item className="typo-body">
                    <span className="mr-2">Be open to alternate points of view</span>
                  </List.Item>
                  <List.Item className="typo-body">
                    <span className="mr-2">Respect the privacy of others</span>
                  </List.Item>
                  <List.Item className="typo-body">
                    <span className="mr-2">
                      Comply with the instructions of the event staff and alert us if something is wrong
                    </span>
                  </List.Item>
                </List>
              </p>
              <p className="typo-body">
                You can check the full version of the Code of Conduct clicking{' '}
                <Link to="/assets/code_of_conduct.pdf">here</Link>.
              </p>
            </Accordion.Detail>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default LocalInformation;
