import styles from "./navbar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const Navbar = () => {
  return (
    <div className={styles["navbarContainer"]}>
      <div className={styles["container"]}>
        <div className={styles["logoWrapper"]}>
          <Link to="/">
            <img width={"auto"} height={160} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles["wrapper"]}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            TRANG CHỦ
          </Link>
          <Link
            to="/gioi-thieu"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            GIỚI THIỆU
          </Link>

          <div className={styles["dropdown"]}>
            DỰ ÁN
            <ExpandMoreIcon />
            <div className={styles["dropdownContent"]}>
              <Link
                to="/dat-nen-phu-tho"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đất nền Phú Thọ
              </Link>
              <Link
                to="/dat-nen-bai-dai"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đất nền Bãi Dài
              </Link>
              <Link
                to="/dat-nen-phuc-tien"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đất nền Phúc Tiến
              </Link>
              <Link
                to="/dat-nen-co-dong"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đất nền Cổ Đông
              </Link>
              <Link
                to="/dat-nen-yen-my"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đất nền Yên Mỹ
              </Link>
              <Link
                to="/dat-nen-tan-xa"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Đất nền Tân Xã
              </Link>
            </div>
          </div>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            TIN TỨC
          </Link>
          <Link
            to="/tuyen-dung"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            TUYỂN DỤNG
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            LIÊN HỆ
          </Link>
        </div>
        <div className={styles["phone"]}>
          <PhoneIcon />
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href={"tel: 0767499458"}
          >
          0906.247.988 (Ms. Hiền - Zalo)
          </a>
        </div>
      </div>
      <div className={styles["mobileContainer"]}>
        <input
          type="checkbox"
          id="navChecked"
          hidden
          className={styles["inputChecked"]}
        />
        <label htmlFor="navChecked" className={styles["navbarButton"]}>
          <ViewHeadlineIcon style={{ fontSize: 26 }} />
        </label>
        <div className={styles["logoWrapper"]}>
          <Link to="/">
            <img width={"auto"} height={120} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles["navMobileWrapper"]}>
          <ul className={styles["navList"]}>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                TRANG CHỦ
              </Link>
            </li>
            <li>
              <Link
                to="/gioi-thieu"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                GIỚI THIỆU
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link
                to="/tuyen-dung"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                TUYỂN DỤNG
              </Link>
            </li>
          </ul>
          <label htmlFor="navChecked">
            <HighlightOffIcon className={styles["navCloseButton"]} />
          </label>
          <span
            style={{
              fontSize: 10,
              marginBottom: 5,
              marginLeft: 5,
              fontWeight: 500,
              color: "#df0024",
            }}
          >
            Copyright @ 2022 by Sky Land
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
