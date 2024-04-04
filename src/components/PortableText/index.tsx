import React from "react";
import {
  PortableText,
  type PortableTextReactComponents,
} from "@portabletext/react";
import classNames from "classnames";

import styles from "./styles.module.css";
import defaultComponents from "./components";

type Props = {
  components?: Partial<PortableTextReactComponents>;
  className?: string;
  value: any;
  defaultStyle?: boolean;
  light?: boolean;
};

const PortableTextComponent: React.FC<Props> = ({
  value,
  className,
  components = {},
  defaultStyle,
  light,
}) => {
  const usedComponents = {
    ...defaultComponents,
    ...components,
  };
  return (
    <div
      className={classNames(className, {
        [styles.defaultStyle]: defaultStyle,
        [styles.light]: light,
      })}
    >
      <PortableText value={value} components={usedComponents} />
    </div>
  );
};

export default PortableTextComponent;
