import React from 'react';
import Box from './Box';
import { Link } from 'website-components';
import classNames from 'classnames';

import * as styles from './styles.module.css';

const ContactUs = () => (
  <div className={classNames('py-10 text-white', styles.container)}>
    <div className="container-lg">
      <h4 className="typo-h6 uppercase text-center mb-4">Contact us</h4>
      <div className="flex">
        <div className="w-full md:w-1/2 p-2">
          <Box>
            <h5 className="typo-h4 mb-4 md:mb-8">Ticketing questions</h5>
            <Link to="mailto:help.summit@nextflow.io">help.summit@nextflow.io</Link>
          </Box>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <Box>
            <h5 className="typo-h4 mb-4 md:mb-8">Program questions</h5>
            <Link to="mailto:summit@nextflow.io">summit@nextflow.io</Link>
          </Box>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;
