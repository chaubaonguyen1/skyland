import styles from "./label.module.scss";
import DiamondIcon from "@mui/icons-material/Diamond";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

const Content = () => {
  return (
    <div className={styles["introContainer"]}>
      <div className={styles["itemWrapper"]}>
        <div className={styles["item"]}>
          <StackedLineChartIcon className={styles["icon"]} />
          <h2>TẦM NHÌN</h2>
          <span>
            Trở thành công ty Cổ phần đầu tư Địa ốc hàng đầu tại Việt Nam. Trong
            chiến lược dài hạn, SKY LAND luôn nỗ lực không ngừng, phát triển
            mạnh mẽ để trở thành Nhà đầu tư – Phát triển bất động sản hàng đầu
            tại Việt Nam, là cầu nối tin cậy giữa khách hàng và lợi nhuận, đem
            lại những sản phẩm bất động sản có giá trị lợi nhuận cao.
          </span>
        </div>
        <div className={styles["item"]}>
          <BeenhereOutlinedIcon className={styles["icon"]} />
          <h2>SỨ MỆNH</h2>
          <span>
            Mang đến niềm tin và hạnh phúc cho khách hàng từ những giá trị thực
            tế. Quy hoạch tại các vị trí chiến lược, giúp khách hàng sở hữu
            những Bất Động Sản để nâng tầm cuộc sống, kiến tạo cộng đồng nhân
            văn tiên tiến với môi trường sống tiện nghi, hiện đại cho cư dân,
            góp phần vào sự phát triển bền vững của toàn xã hội.
          </span>
        </div>
        <div className={styles["item"]}>
          <DiamondIcon className={styles["icon"]} />
          <h2>GIÁ TRỊ CỐT LÕI</h2>
          <span>
            Xây Uy Tín – Dựng Niềm Tin, để phát triển bền vững SKY LAND làm việc
            chuyên nghiệp, tận tâm, tôn trọng khách hàng và đối tác cùng phát
            triển… Luôn đặt chữ Tín lên hàng đầu để tạo dựng niềm tin. Khát vọng
            học hỏi và cống hiến cho sự phát triển của bản thân, khách hàng,
            đồng nghiệp.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
