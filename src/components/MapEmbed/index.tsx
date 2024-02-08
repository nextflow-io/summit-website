import React from "react";

type Props = {
  src?: string;
};

const MapEmbed: React.FC<Props> = ({
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.9560397868786!2d-71.0449174!3d42.34346059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a8693f7283b%3A0xbeecab6f6dfb2892!2sAloft%20Boston%20Seaport%20District!5e0!3m2!1sen!2ses!4v1707395471661!5m2!1sen!2ses",
}) => {
  return (
    <iframe
      src={src}
      style={{ border: 0 }}
      loading="lazy"
      className="absolute inset-0 w-full h-full"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapEmbed;
