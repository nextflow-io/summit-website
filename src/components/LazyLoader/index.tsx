import React from "react";
import VisibilitySensor from "react-visibility-sensor";

type Props = {
  children: React.ReactNode;
  onView: (isVisible: boolean) => void;
};

const LazyLoader: React.FC<Props> = ({ children, onView }) => {
  const isSSR = typeof window === "undefined";
  if (isSSR) return children;
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        isVisible && onView(true);
      }}
      delayedCall
    >
      {children}
    </VisibilitySensor>
  );
};

export default LazyLoader;
