import styles from "./navbar.module.scss";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <Link
          to="/gioi-thieu"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          GIỚI THIỆU
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          DỰ ÁN SKYLAND 1
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          DỰ ÁN SKYLAND 2
        </Link>
      </div>
      <div className={styles["logoWrapper"]}>
        <Link to="/">
          <img width={"auto"} height={80} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles["wrapper"]}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          DỰ ÁN KHÁC
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
    </div>
  );
};

export default Navbar;
