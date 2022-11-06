import styles from "./label.module.scss";
import DiamondIcon from "@mui/icons-material/Diamond";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";

const Content = () => {
  return (
    <div className={styles["introContainer"]}>
      <div className={styles["itemWrapper"]}>
        <div className={styles["item"]}>
          <StackedLineChartIcon style={{ fontSize: 55 }} />
          <h2>Tầm nhìn</h2>
          <span>
            Được thành lập vào ngày 22/10/2021, Công ty Cổ Phần Đầu tư Địa ốc
            SKY LAND đã chính thức đi vào hoạt động được hơn 1 năm trong lĩnh
            vực đầu tư và môi giới bất động sản.
          </span>
        </div>
        <div className={styles["item"]}>
          <BeenhereOutlinedIcon style={{ fontSize: 55 }} />
          <h2>Sứ mệnh</h2>
          <span>
            Mang đến niềm tin và hạnh phúc cho khách hàng từ giá trị thực tế.
            Quy hoạch tại các vị trí chiến lược, kiến tạo cộng đồng nhân văn
            tiên tiến với môi trường sống tiện nghi, hiện đại cho cư dân, góp
            phần vào sự phát triển bền vững của toàn xã hội.
          </span>
        </div>
        <div className={styles["item"]}>
          <DiamondIcon style={{ fontSize: 55 }} />
          <h2>Giá trị cốt lõi</h2>
          <span>
            Hiệu quả – Chính trực – Chuyên nghiệp – Nhân văn Minh bạch và trung
            thực để phát triển bền vững. Làm việc chuyên nghiệp, tận tâm, tôn
            trọng khách hàng và nhà đầu tư, đối tác …Luôn đặt chữ Tín lên hàng
            đầu để tạo dựng niềm tin.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
