import styles from "./footer.module.scss";
import logo from "../../assets/logo.jpg";
import footerBg from "../../assets/footer-bg.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import ReplyIcon from "@mui/icons-material/Reply";

const Footer = () => {
  return (
    <footer className={styles["footerContainer"]}>
      <section className={styles["media"]}>
        <div className={styles["text"]}>
          <h3>Kết nối với chúng tôi:</h3>
        </div>
        <div className={styles["icons"]}>
          <FacebookIcon className={styles["item"]} />
          <InstagramIcon className={styles["item"]} />
          <GoogleIcon className={styles["item"]} />
          <YouTubeIcon className={styles["item"]} />
        </div>
      </section>
      <section
        className={styles["itemWrapper"]}
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className={styles["color"]}></div>
        <div className={styles["items"]}>
          <div className={styles["item"]}>
            <h3>CAM KẾT TỪ SKYLAND</h3>
            <span>
              <CheckCircleOutlineIcon className={styles["icon"]} />
              Thông Tin Chính Xác Và Cập Nhật Mới Nhất
            </span>
            <span>
              <CheckCircleOutlineIcon className={styles["icon"]} />
              Hỗ Trợ Tư Vấn Phù Hợp Nhu Cầu Khách Hàng
            </span>
            <span>
              <CheckCircleOutlineIcon className={styles["icon"]} />
              Không Phát Sinh Bất Kỳ Chi Phí Phụ Thu Nào
            </span>
            <span>
              <CheckCircleOutlineIcon className={styles["icon"]} />
              Hỗ Trợ Trước Và Sau Bán Tới Khi Khách Hài Lòng
            </span>
            <span>
              <CheckCircleOutlineIcon className={styles["icon"]} />
              Hỗ Trợ Tham Quan Thực Tế Dự Án Miễn Phí
            </span>
          </div>
          <div className={styles["item"]}>
            <h3>THÔNG TIN VỀ CÔNG TY</h3>
            <span>
              <ReplyIcon />
              Về Công Ty Skyland
            </span>
            <span>
              <ReplyIcon />
             Chính sách & bảo mật
            </span>
            <span>
              <ReplyIcon />
              Tuyển dụng
            </span>
            <span>
              <ReplyIcon />
              Liên hệ với chúng tôi
            </span>
            <span>
              <ReplyIcon />
              Tin tức và sự kiện
            </span>
          </div>
          <div className={styles["item"]} style={{ marginTop: "-16px" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "160px", height: "160px" }}
            />
            <span style={{ fontWeight: "bold" }}>
              CÔNG TY CỔ PHẦN ĐẦU TƯ ĐỊA ỐC SKY LAND
            </span>
            <span>
              <PlaceIcon />
              CÔNG TY CỔ PHẦN ĐẦU TƯ ĐỊA ỐC SKY LAND
            </span>
            <span>
              <SubtitlesIcon /> Mã số thuế: 0109788325
            </span>
            <span>
              <MailOutlineIcon /> diaocskyland@gmail.com
            </span>
            <span>
              <PhoneInTalkIcon />
              0767.499.458
            </span>
          </div>
        </div>
      </section>
    </footer>
    // <div
    //   className={styles["container"]}
    //   style={{ backgroundImage: `url(${footerBg})` }}
    // >
    //   <div className={styles["color"]}></div>
    //   <div className={styles["itemWrapper"]}>
    //     <div className={styles["item"]}>
    //       <h3>CAM KẾT TỪ SKYLAND</h3>
    //       <span>Thông Tin Chính Xác Và Cập Nhật Mới Nhất</span>
    //       <span>Hỗ Trợ Tư Vấn Phù Hợp Nhu Cầu Khách Hàng</span>
    //       <span>Không Phát Sinh Bất Kỳ Chi Phí Phụ Thu Nào</span>
    //       <span>Hỗ Trợ Trước Và Sau Bán Tới Khi Khách Hài Lòng</span>
    //       <span>Hỗ Trợ Tham Quan Thực Tế Dự Án Miễn Phí</span>
    //     </div>
    //     <div className={styles["item"]}>
    //       <h3>CÁC DỰ ÁN HOT MỚI NHẤT</h3>
    //       <span>Dự án Skyland 1</span>
    //       <span>Dự án Skyland 1</span>
    //       <span>Dự án Skyland 1</span>
    //       <span>Dự án Skyland 1</span>
    //       <span>Dự án Skyland 1</span>
    //     </div>
    //     <div className={styles["item"]}>
    //       <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
    //       <img
    //         src={logo}
    //         alt="logo"
    //         style={{ width: "290px", height: "240px" }}
    //       />
    //       <span> Hotline Tư Vấn 24/24 : 09436 25 266</span>
    //       <span>Email : truongskyland3333@gmail.com</span>
    //       <span>Website : www.skyland.com.vn</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
