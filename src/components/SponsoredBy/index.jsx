import React from 'react';

import LogoAWS from '../../images/logos/aws.svg';
import LogoMicrosoft from '../../images/logos/microsoft.svg';
import LogoPixelgen from '../../images/logos/pixelgen.svg';
import LogoSeqera from '../../images/logos/seqera.svg';
import LogoTileDB from '../../images/logos/tiledb.svg';
import LogoZS from '../../images/logos/ZS.svg';
import LogoNanopore from '../../images/logos/nanopore.svg';
import LogoMemverge from '../../images/logos/memverge.svg';
import LogoElement from '../../images/logos/element-biosciences.svg';
import LogoQuilt from '../../images/logos/quilt.svg';
import Sponsor from './Sponsor';

import * as styles from './styles.module.css';

const SponsoredBy = () => (
  <div className="text-white py-8 px-4 sm:px-6">
    <h2 className="typo-h6 mb-2 uppercase text-center">Sponsored by</h2>
    <div className={styles.container}>
      <Sponsor>
        <img src={LogoAWS} className="h-12" alt="AWS" />
      </Sponsor>
      <Sponsor>
        <img src={LogoZS} className="h-14" alt="ZS" />
      </Sponsor>
      <div className="hidden lg:block w-full lg:hidden h-1" />
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
        <img src={LogoNanopore} className="h-10" alt="Nanopore" />
      </Sponsor>
      <Sponsor>
        <img src={LogoMemverge} className="h-10" alt="Memverge" />
      </Sponsor>
      <Sponsor>
        <img src={LogoElement} className="h-10" alt="Element" />
      </Sponsor>
      <Sponsor>
        <img src={LogoQuilt} className="h-10" alt="Quilt" />
      </Sponsor>
      <Sponsor>
        <img src={LogoSeqera} className="h-10" alt="Seqera" />
      </Sponsor>
    </div>
  </div>
);

export default SponsoredBy;
