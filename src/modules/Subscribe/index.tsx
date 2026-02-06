import React from "react";
import HubspotForm from "@components/HubspotForm";

type Props = {};

import styles from "./styles.module.css";

const SectionSubscribe: React.FC<Props> = () => {
  return (
    <section className="">
      <p className="text-[.9rem] mb-4 max-w-[340px] ">
        Sign up to receive the latest updates on Nextflow, Seqera, and the
        nf-core community.
      </p>
      <div>
        <HubspotForm
          className={styles.form}
          formID="a3ee7c65-a905-451d-aba6-cf125a3b89b3"
          linkedInEventID={13682684}
          gtmEventID="gtm_newsletter"
        />
      </div>
      <p className="mt-4 text-xs">
        By submitting this form, you agree to our{" "}
        <a className="underline" href="https://seqera.io/privacy-policy" target="_blank">
          privacy policy
        </a>
        .
      </p>
    </section>
  );
};

export default SectionSubscribe;
