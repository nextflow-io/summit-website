import clsx from "clsx";
import base from "./base.module.css";
import green1 from "./green1.module.css";
import green2 from "./green2.module.css";
import green3 from "./green3.module.css";
import green4 from "./green4.module.css";
import orange1 from "./orange1.module.css";
import orange2 from "./orange2.module.css";
import blue1 from "./blue1.module.css";
import blue2 from "./blue2.module.css";

const styles = {
  green1,
  green2,
  green3,
  green4,
  orange1,
  orange2,
  blue1,
  blue2,
};

type Props = {
  type?: string;
};

const Blob: React.FC<Props> = ({ type }) => {
  return <div className={clsx(base.blob, styles[type].blob)} />;
};

export default Blob;
