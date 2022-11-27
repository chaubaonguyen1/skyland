import styles from "./content.module.scss";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { data } from "../../commons/data";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className={styles["container"]}>
      <h2>THÔNG TIN CÁC DỰ ÁN SKY LAND PHÂN PHỐI</h2>
      <div className={styles["line"]}>
        <div className={styles["hr"]}></div>
        <SpaOutlinedIcon style={{ color: "#f5ab00" }} />
        <div className={styles["hr"]}></div>
      </div>
      <div className={styles["itemWrapper"]}>
        {data.map((item) => (
          <div className={styles["item"]} key={item.id}>
            <img src={item.thumbnailImg} alt="" />
            <div className={styles["previewContent"]}>
              <h3 style={{ fontSize: 22 }}>{item.title.toUpperCase()}</h3>
              <p
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  lineHeight: "1.5rem",
                }}
              >
                {item.titleContent}
              </p>
            </div>
            <button className={styles["button"]}>
              <Link
                to={`/${item.link}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span>Xem thêm</span>
              </Link>
              <KeyboardDoubleArrowRightIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
