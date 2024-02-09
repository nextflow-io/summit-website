import clsx from "clsx";

import LogoAWS from "./images/aws.svg";
import LogoMicrosoft from "./images/microsoft.svg";
import LogoPixelgen from "./images/pixelgen.svg";
import LogoSeqera from "./images/seqera.svg";
import LogoTileDB from "./images/tiledb.svg";
import LogoZS from "./images/ZS.svg";
import LogoNanopore from "./images/nanopore.svg";
import LogoMemverge from "./images/memverge.svg";
import LogoElement from "./images/element-biosciences.svg";
import LogoQuilt from "./images/quilt.svg";
import Sponsor from "./Sponsor";

import styles from "./styles.module.css";

type Props = {
  alt?: boolean;
  className?: string;
};

const SectionSponsoredBy = ({ alt, className }: Props) => (
  <section className={clsx("py-8", className)}>
    {!alt && (
      <h2 className="typo-h6 mb-2 uppercase text-center">Sponsored by</h2>
    )}
    <div className={clsx(styles.container, { [styles.alt]: alt })}>
      <Sponsor>
        <img src={LogoAWS.src} className="h-12" alt="AWS" />
      </Sponsor>
      <Sponsor>
        <img src={LogoZS.src} className="h-14" alt="ZS" />
      </Sponsor>
      <div className="hidden lg:block w-full lg:hidden h-1" />
      <Sponsor>
        <img src={LogoTileDB.src} className="h-10" alt="TileDB" />
      </Sponsor>
      <Sponsor>
        <img src={LogoMicrosoft.src} className="h-10" alt="Microsoft" />
      </Sponsor>
      <Sponsor>
        <img src={LogoPixelgen.src} className="h-14" alt="Pixelgen" />
      </Sponsor>
      <Sponsor>
        <img src={LogoNanopore.src} className="h-10" alt="Nanopore" />
      </Sponsor>
      <Sponsor>
        <img src={LogoMemverge.src} className="h-10" alt="Memverge" />
      </Sponsor>
      <Sponsor>
        <img src={LogoElement.src} className="h-10" alt="Element" />
      </Sponsor>
      <Sponsor>
        <img src={LogoQuilt.src} className="h-10" alt="Quilt" />
      </Sponsor>
      <Sponsor>
        <img src={LogoSeqera.src} className="h-10" alt="Seqera" />
      </Sponsor>
    </div>
  </section>
);

export default SectionSponsoredBy;
