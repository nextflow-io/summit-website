import React from "react";

import styles from "./styles.module.css";
import HubspotForm from "@components/HubspotForm";
import img from "./photo.jpg";

const SignUpForm = () => {
  return (
    <section className="bg-white text-black py-10 md:py-20">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="w-full pr-10">
            <h2 className="h4 mb-10">
              Sign up
              <br /> for updates
            </h2>
          </div>
          <div>
            <div className="w-full">
              <HubspotForm
                formID="7cad6141-f2cd-4e52-ad1f-9c6638faacc0"
                className={styles.form}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
