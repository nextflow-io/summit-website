import React from "react";
import HubspotForm from "@components/HubspotForm";

type Props = {};

import styles from "./styles.module.css";

const SectionSubscribe: React.FC<Props> = () => {
  return (
    <section className="container text-center pb-30">
      <h4 className="h00">Subscribe to our newsletter</h4>
      <div className="blockquote mt-2 mb-6">
        Register and be the first to know about all our news and updates.
      </div>
      <HubspotForm
        className={styles.form}
        formID="a3ee7c65-a905-451d-aba6-cf125a3b89b3"
        linkedInEventID={13682684}
        gtmEventID="gtm_newsletter"
      />
    </section>
  );
};

export default SectionSubscribe;
