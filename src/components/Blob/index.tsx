import style1 from "./style1.module.css";
import style2 from "./style2.module.css";

const Blob = (props) => {
  const styles = props.style2 ? style2 : style1;
  if (props.style2)
    return (
      <>
        <div className={styles.blob} />
      </>
    );
  else
    return (
      <>
        <div className={styles.blob} />
        <div className={styles.blob2} />
      </>
    );
};

export default Blob;
