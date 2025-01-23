import React from "react";
import HubspotForm from "@components/HubspotForm";

type Props = {};

import styles from "./styles.module.css";

const SectionSubscribe: React.FC<Props> = () => {
  return (
    <section className="">
      <p className="">
        Register and be the first to know about all our news and updates.
      </p>
      <div>
      <HubspotForm
        className={styles.form}
        formID="a3ee7c65-a905-451d-aba6-cf125a3b89b3"
        linkedInEventID={13682684}
        gtmEventID="gtm_newsletter"
      />
      </div>
      <small>We respect your data. By submitting this form, you agree that we may use ​this information in accordance with our Privacy Policy.</small>

    </section>
  );
};

export default SectionSubscribe;
