import styles from "./navbar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["logoWrapper"]}>
        <Link to="/">
          <img width={"auto"} height={80} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles["wrapper"]}>
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          TRANG CHỦ
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          GIỚI THIỆU
        </Link>
        <Link to="/gioi-thieu" style={{ textDecoration: "none", color: "inherit" }}>
          DỰ ÁN
        </Link>
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
