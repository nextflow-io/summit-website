import { useEffect, useState } from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

declare global {
  interface Window {
    hbspt: any;
    lintrk: any;
    dataLayer: any;
  }
}

type Props = {
  title?: string;
  formID: string;
  gtmEventID?: string;
  linkedInEventID?: number;
  onLoad?: () => void;
  className?: string;
};

const HubspotForm: React.FC<Props> = ({
  title,
  formID,
  gtmEventID,
  linkedInEventID,
  onLoad,
  className,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const exists = document.getElementById("hubspotFormLibrary");
    if (exists) {
      setLoaded(true);
      return;
    }
    const e = document.createElement("script");
    e.id = "hubspotFormLibrary";
    e.type = "text/javascript";
    e.async = true;
    e.src = "//js.hsforms.net/forms/embed/v2.js";
    e.onload = () => {
      setLoaded(true);
      if (onLoad) onLoad();
    };
    const f = document.getElementsByTagName("script")[0];
    f.parentNode.insertBefore(e, f);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    if (!window.hbspt) return;
    let hutk = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("hubspotutk="));
    hutk = hutk?.split("=")[1];
    window.hbspt?.forms.create({
      hutk: hutk || undefined,
      target: `#hsForm-${formID}`,
      region: "na1",
      portalId: "6705631",
      formId: formID,
      onFormSubmitted() {
        if (linkedInEventID && !!window.lintrk)
          window.lintrk("track", { conversion_id: linkedInEventID });

        if (gtmEventID && !!window.dataLayer)
          window.dataLayer.push({ event: gtmEventID });
      },
    });
  }, [loaded]);

  return (
    <div className={clsx(styles.form, className)}>
      {title && <p className="typo-intro mb-4">{title}</p>}
      <div id={`hsForm-${formID}`}></div>
    </div>
  );
};

export default HubspotForm;
