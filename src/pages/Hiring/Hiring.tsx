import image from "../../assets/hiring/image.jpg";
import styles from "./introduction.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import EastIcon from "@mui/icons-material/East";
import CheckIcon from "@mui/icons-material/Check";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Hiring = () => {
  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <div className={styles["hr"]}></div>
        <div className={styles["wrapper"]}>
          <div className={styles["title"]}>
            <h2>TUYỂN DỤNG CHUYÊN VIÊN KINH DOANH</h2>
          </div>
          <div className={styles["content"]}>
            <p style={{ fontWeight: "bold" }}>
              VÌ SAO BẠN NÊN CHỌN LÀM VIỆC TẠI SKY LAND? CÔNG TY BẤT ĐỘNG SẢN UY
              TÍN, CHUYÊN NGHIỆP NHẤT TẠI HÀ NỘI
            </p>
            <p style={{ fontWeight: 600 }}>MÔ TẢ CÔNG VIỆC:</p>
            <p className={styles["pText"]}>
              <EastIcon />
              Kiếm tiền, kiếm tiền, kiếm tiền bằng cách học, hiểu, yêu sản phẩm
              bất động sản do Công ty phân phối và kết nối với khách hàng bằng
              cả trái tim.
            </p>
            <p className={styles["pText"]}>
              <EastIcon />
              Tư vấn khách hàng và chốt sales trên lượng data có sẵn.
            </p>
            <p className={styles["pText"]}>
              <EastIcon />
              Hỗ trợ thủ tục, chăm sóc khách hàng trước và sau bán.
            </p>
            <p style={{ fontWeight: "bold" }}>MÔI TRƯỜNG LÀM VIỆC:</p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Môi trường làm việc trẻ trung, năng động, chuyên nghiệp, đoàn kết.
            </p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Được đào tạo bài bản, thường xuyên từ kiến thức dự án đến kỹ năng
              mềm bởi những chuyên gia đầu ngành.
            </p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Leader tâm huyết, định hướng công việc, dẫn dắt cầm tay chỉ việc.
            </p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Team Building, các hoạt động thể thao nhằm nâng cao tinh thần làm
              việc diễn ra thường xuyên.
            </p>
            <p style={{ fontWeight: "bold" }}>YÊU CẦU ỨNG VIÊN:</p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Có niềm đam mê với kinh doanh, nhiệt huyết, cầu tiến trong công
              việc
            </p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Có khát vọng làm giàu, không ngại thử thách bản thân với nghề Bất
              Động Sản.
            </p>
            <p className={styles["pText"]}>
              <CheckIcon />
              Đồng hành cùng SKY LAND với chiến lược dài hạn.
            </p>
            <p style={{ fontWeight: "bold" }}>CHẾ ĐỘ ĐÃI NGỘ:</p>
            <p className={styles["secondPText"]}>
              <AddTaskIcon />
              Bạn chỉ cần chốt sales, thưởng to có sếp lo.
            </p>
            <p className={styles["secondPText"]}>
              <AddTaskIcon />
              Cơ chế lương cứng và hoa hồng siêu hấp dẫn.
            </p>
            <p className={styles["secondPText"]}>
              <AddTaskIcon />
              Thưởng nóng liên tục, bạn chỉ cần chăm chỉ.
            </p>
            <p className={styles["secondPText"]}>
              <AddTaskIcon />
              Thưởng nóng liên tục, bạn chỉ cần chăm chỉ.
            </p>
            <p className={styles["secondPText"]}>
              <AddTaskIcon />
              Team building, thể dục thể thao, sinh nhật, thưởng lễ Tết..
            </p>

            <div className={styles["imgWrapper"]}>
              <img src={image} alt="" />
              Đội ngũ Sky Land
            </div>
            <p style={{ fontWeight: "bold" }}>LIÊN HỆ ỨNG TUYỂN:</p>
            <p className={styles["pText"]}>
              <PhoneIcon />
              Ms. Hiền: 0906.247.988
            </p>
            <p className={styles["pText"]}>
              <PhoneIcon />
              Mr. Lộc: 0767.499.458
            </p>
            <p className={styles["pText"]}>
              <MailOutlineIcon />
              nhansuskyland.hn@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hiring;
