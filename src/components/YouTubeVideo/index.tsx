import classnames from "classnames";
import styles from "./styles.module.css";

type Props = {
  id?: string;
  listId?: string;
  className?: string;
};

const YouTubeVideo: React.FC<Props> = ({ id, listId, className }) => {
  let videoSource = `https://www.youtube.com/embed/${id}`;

  if (listId) {
    videoSource += `?list=${listId}`;
  }

  return (
    <div className={classnames(styles.wrapper, className, "box")}>
      <iframe
        src={videoSource}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={styles.video}
        title="Seqera Video"
      />
    </div>
  );
};

export default YouTubeVideo;
