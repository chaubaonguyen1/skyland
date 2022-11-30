import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles.module.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { data } from "../../commons/data";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import YoutubeEmbed from "../../components/YoutubeEmbed/YoutubeEmbed";

const CoDongPage = () => {
  const location = useLocation();

  useEffect(() => {
    const canControlScrollRestoration = "scrollRestoration" in window.history;
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <div className={styles["itemContainer"]}>
        {data
          .filter((item) => item.id === 4)
          .map((item) => (
            <>
              <div className={styles["itemTitle"]}>{item.title}</div>
              <p className={styles["textContent"]}>{item.titleContent}</p>
              {item.imgUrl.map((itemImg, index) => (
                <div className={styles["itemWrapper"]} key={index}>
                  <img
                    src={itemImg}
                    alt="itemImg"
                    className={styles["imgWrapper"]}
                  />
                  <span style={{textAlign: 'center', fontStyle: 'italic'}}>Hình ảnh thực tế tại dự án</span>
                </div>
              ))}
              <YoutubeEmbed embedId="AxWQB0bbSNg"/>
              <ul className={styles["content"]}>
                {item.content.map((itemContent) => (
                  <li>
                    <ArrowForwardIcon />
                    {itemContent}
                  </li>
                ))}
              </ul>
            </>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default CoDongPage;
