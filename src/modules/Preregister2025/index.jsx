import React from "react";

import styles from "./styles.module.css";
import HubspotForm from "@components/HubspotForm";
import img from "./photo.jpg";

const Preregister2025 = () => {
  return (
    <div className="sm:px-10 py-8">
      <div className="text-center w-full sm:px-8">
        <h3 className="typo-h3 text-white mb-2">
          Interested in attending Nextflow Summit 2025?
        </h3>
        <div
          className="text-xl mb-6 font-[200]"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Sign up for updates to be the first to know when tickets go on sale!
        </div>
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

export default Preregister2025;
