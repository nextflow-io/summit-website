import React from "react";

import styles from "./styles.module.css";
import HubspotForm from "@components/HubspotForm";
import img from "./photo.jpg";

const SignUpForm = () => {
  return (
    <div className="sm:px-10 py-8">
      <div className="text-center w-full sm:px-8">
      </div>
      <div className="w-full">
        <HubspotForm
          formID="7cad6141-f2cd-4e52-ad1f-9c6638faacc0"
          className={styles.form}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
