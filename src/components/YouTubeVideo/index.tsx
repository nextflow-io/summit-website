import classnames from "classnames";
import styles from "./styles.module.css";

type Props = {
  id?: string;
  url?: string;
  listId?: string;
  className?: string;
};

const YouTubeVideo: React.FC<Props> = ({ id, url, listId, className }) => {
  let videoSource = `https://www.youtube.com/embed/${id}`;

  if (listId) {
    videoSource += `?list=${listId}`;
  }

  if (url) {
    if (url.includes("embed")) {
      videoSource = url;
    } else if (url.includes("v=")) {
      const videoId = url.split("v=")[1];
      videoSource = `https://www.youtube.com/embed/${videoId}`;
    } else {
      const videoId = url.split("/").pop();
      videoSource = `https://www.youtube.com/embed/${videoId}`;
    }
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
