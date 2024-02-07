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
        formID="bdbc8164-e187-4707-a2eb-d199d0e4da73"
        linkedInEventID={13682684}
        gtmEventID="gtm_newsletter"
      />
    </section>
  );
};

export default SectionSubscribe;
