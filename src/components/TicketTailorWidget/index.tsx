import React, { useEffect, useState } from "react";
import { getUTM } from "@utils/utm";

function getRefFromCookies(): string {
  const { utm_source, utm_medium, utm_content } = getUTM();
  let ref = utm_source;

  if (utm_medium && !utm_content) {
    ref = `${utm_source}-${utm_medium}`;
  } else if (utm_medium && utm_content) {
    let medium = utm_medium;
    if (medium === "social" && !utm_content.startsWith("post"))
      medium = "message";
    ref = `${utm_source}-${medium}`;
  }

  return ref || "website_widget";
}

type Props = {
  eventID: number;
  widgetID: string;
};

const TicketTailorWidget: React.FC<Props> = ({ eventID, widgetID }) => {
  const ref = React.createRef<HTMLDivElement>();
  const [utmRef, setUtmRef] = useState(undefined);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    setUtmRef(getRefFromCookies());
  }, []);

  useEffect(() => {
    if (!utmRef || scriptLoaded || !ref.current) return;
    setScriptLoaded(true);
    const script = document.createElement("script");
    script.src = "https://cdn.tickettailor.com/js/widgets/min/widget.js";
    script.setAttribute(
      "data-url",
      `https://www.tickettailor.com/checkout/new-session/id/${eventID}/chk/${widgetID}/?ref=${utmRef}`,
    );
    script.setAttribute("data-type", "inline");
    script.setAttribute("data-inline-minimal", "true");
    script.setAttribute("data-inline-show-logo", "false");
    script.setAttribute("data-inline-bg-fill", "false");
    script.setAttribute("data-inline-inherit-ref-from-url-param", "false");
    script.setAttribute("data-inline-ref", utmRef);

    ref.current.appendChild(script);
  }, [utmRef, ref.current, scriptLoaded]);

  return (
    <div className="mx-auto max-w-[700px]">
      <div className="tt-widget" id="buy" ref={ref}>
        <div className="tt-widget-fallback">
          <p>
            <a
              href={`https://www.tickettailor.com/checkout/new-session/id/${eventID}/chk/${widgetID}/?ref=${utmRef}`}
              target="_blank"
              rel="noreferrer"
            >
              Click here to buy tickets
            </a>
            <br />
            <small>
              <a
                href="https://www.tickettailor.com?rf=wdg_173468"
                className="tt-widget-powered"
              >
                Sell tickets online with Ticket Tailor
              </a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketTailorWidget;
