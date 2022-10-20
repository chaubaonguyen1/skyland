import styles from "./footer.module.scss";
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["itemWrapper"]}>
        <h3>CAM KẾT TỪ SKYLAND</h3>
        <span>Thông Tin Chính Xác Và Cập Nhật Mới Nhất</span>
        <span>Hỗ Trợ Tư Vấn Phù Hợp Nhu Cầu Khách Hàng</span>
        <span>Không Phát Sinh Bất Kỳ Chi Phí Phụ Thu Nào</span>
        <span>Hỗ Trợ Trước Và Sau Bán Tới Khi Khách Hài Lòng</span>
        <span>Hỗ Trợ Tham Quan Thực Tế Dự Án Miễn Phí</span>
      </div>
      <div className={styles["itemWrapper"]}>
        <h3>CÁC DỰ ÁN HOT MỚI NHẤT</h3>
        <span>Dự án Skyland 1</span>
        <span>Dự án Skyland 1</span>
        <span>Dự án Skyland 1</span>
        <span>Dự án Skyland 1</span>
        <span>Dự án Skyland 1</span>
      </div>
      <div className={styles["itemWrapper"]}>
        <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
        <img
          src={logo}
          alt="logo"
          style={{ width: "290px", height: "240px" }}
        />
        <span> Hotline Tư Vấn 24/24 : 09436 25 266</span>
        <span>Email : truongskyland3333@gmail.com</span>
        <span>Website : www.skyland.com.vn</span>
      </div>
    </div>
  );
};

export default Footer;
