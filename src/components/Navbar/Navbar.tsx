import styles from "./navbar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Navbar = () => {
  return (
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
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
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
          0767.499.458
        </a>
      </div>
    </div>
  );
};

export default Navbar;
