import React from "react";

import styles from "./styles.module.css";
import HubspotForm from "@components/HubspotForm";
import img from "./photo.jpg";

const Preregister2025 = () => {
  return (
    <div className="sm:px-10 py-8">
      <div className="text-center w-full sm:px-8">
        <h3 className="h2 text-white mb-8">
        Be the first to know when tickets go on sale—sign up for updates today.
        </h3>
        {/* <div
          className="text-xl mb-6 font-[200]"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          We'll be back next year! Sign up for updates to be the first to know
          when tickets go on sale.
        </div> */}
        {/* <div
          className="text-lg mb-6 font-[200]"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          As in 2025, Boston will be held in Spring and Barcelona in Autumn.
        </div> */}
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
