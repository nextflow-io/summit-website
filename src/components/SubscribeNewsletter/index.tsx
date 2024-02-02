import React from "react";
import HubspotForm from "../HubspotForm";

type Props = {};

const SubscribeNewsletter: React.FC<Props> = () => {
  return (
    <div>
      <HubspotForm
        formId="bdbc8164-e187-4707-a2eb-d199d0e4da73"
        linkedInEventID={13682684}
        gtmEventId="gtm_newsletter"
      />
    </div>
  );
};

export default SubscribeNewsletter;
