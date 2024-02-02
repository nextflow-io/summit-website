import { useEffect, useState } from "react";

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
  formId: string;
  gtmEventId?: string;
  shadow?: boolean;
  linkedInEventID: number;
  onLoad?: () => void;
  alt?: boolean;
  alt2?: boolean;
};

const HubspotEmbedForm: React.FC<Props> = ({
  title,
  formId,
  gtmEventId,
  linkedInEventID,
  onLoad,
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
    window.hbspt?.forms.create({
      target: `#hsForm-${formId}`,
      region: "na1",
      portalId: "6705631",
      formId,
      onFormSubmitted() {
        window.lintrk("track", { conversion_id: linkedInEventID });
        if (gtmEventId) window.dataLayer.push({ event: gtmEventId });
      },
    });
  }, [loaded]);

  return (
    <div className={styles.form}>
      {title && <p className="typo-intro mb-4">{title}</p>}
      <div id={`hsForm-${formId}`}></div>
    </div>
  );
};

export default HubspotEmbedForm;
