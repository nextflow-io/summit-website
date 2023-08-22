import React from 'react';

import LogoAWS from '../../images/logos/aws.svg';
import LogoMicrosoft from '../../images/logos/microsoft.svg';
import LogoPixelgen from '../../images/logos/pixelgen.svg';
import LogoSeqera from '../../images/logos/seqera.svg';
import LogoTileDB from '../../images/logos/tiledb.svg';
import LogoZS from '../../images/logos/ZS.svg';
import LogoNanopore from '../../images/logos/nanopore.svg';
import Sponsor from './Sponsor';

import * as styles from './styles.module.css';

const SponsoredBy = () => (
  <div className="text-white py-8 px-6">
    <h2 className="typo-h6 mb-2 uppercase text-center">Sponsored by</h2>
    <div className={styles.container}>
      <Sponsor>
        <img src={LogoAWS} className="h-12" alt="AWS" />
      </Sponsor>
      <Sponsor>
        <img src={LogoSeqera} className="h-10" alt="Seqera" />
      </Sponsor>
      <Sponsor>
        <img src={LogoZS} className="h-14" alt="ZS" />
      </Sponsor>
      <Sponsor>
        <img src={LogoTileDB} className="h-10" alt="TileDB" />
      </Sponsor>
      <Sponsor>
        <img src={LogoMicrosoft} className="h-10" alt="Microsoft" />
      </Sponsor>
      <Sponsor>
        <img src={LogoPixelgen} className="h-14" alt="Pixelgen" />
      </Sponsor>
      <Sponsor>
        <img src={LogoNanopore} className="h-14" alt="Pixelgen" />
      </Sponsor>
    </div>
  </div>
);

export default SponsoredBy;
