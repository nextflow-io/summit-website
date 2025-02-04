import React from "react";
import HubspotForm from "@components/HubspotForm";

type Props = {};

import styles from "./styles.module.css";

const SectionSubscribe: React.FC<Props> = () => {
  return (
    <section className="">
      <p className="text-body mb-4">
      Sign up to receive the latest news
      </p>
      <div>
      <HubspotForm
        className={styles.form}
        formID="a3ee7c65-a905-451d-aba6-cf125a3b89b3"
        linkedInEventID={13682684}
        gtmEventID="gtm_newsletter"
      />
      </div>
      <p className="mt-2 text-xs">By submitting this form, you agree to our <a className="underline" href="/privacy-policy/" >privacy policy</a>.</p>

    </section>
  );
};

export default SectionSubscribe;
