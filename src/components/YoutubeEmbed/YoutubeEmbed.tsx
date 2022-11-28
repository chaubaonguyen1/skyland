import PropTypes from "prop-types";
import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

interface IYoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: FunctionComponent<IYoutubeEmbedProps> = (props) => (
  <div className={styles["videoResponsive"]}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${props.embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
