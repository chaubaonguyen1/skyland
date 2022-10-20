import companyImg from "../../assets/company.jpg";
import styles from "./introduction.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Introduction = () => {
  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <div className={styles["hr"]}></div>
        <div className={styles["wrapper"]}>
          <div className={styles["title"]}>
            <h4>GIỚI THIỆU</h4>
          </div>
          <div className={styles["content"]}>
            <span>
              Hơn 10 năm kinh nghiệm trong lĩnh vực bất động sản toàn quốc,
              skyland.com.vn được thành lập với mục tiêu đem đến các giá trị đầu
              tư tiềm năng cho quý khách hàng. Từ những khó khăn, thử thách đã
              trải qua, nay Sky Land hoàn thiện được kĩ năng cũng như chiến lược
              hướng đến sự pnhát triển lâu dài
            </span>
            <span>
              Với đội ngũ trẻ năng động bao gồm các lãnh đạo tầng lớp trung niên
              với kinh nghiệm dày dạn, đội ngũ chuyên viên thế hệ trẻ với nhiều
              nhiệt huyết. Sky Land tự tin đem đến cho quý khách hàng những sản
              phẩm dự án Vinhomes bất động sản chất lượng. Dịch vụ môi giới với
              các chuyên viên được đào tạo chuyên sâu.
            </span>
              <img src={companyImg} alt="" />
            <span>
              Chúng tôi luôn tự tâm niệm rằng lợi ích khách hàng là trên hết và
              là yếu tố tồn tại lâu dài cho toàn thể đội ngũ, cho nên sự hài
              lòng về dịch vụ cũng như hiệu quả giá trị đầu tư mà các dự án bất
              động sản đem lại cho quý khách hàng được chúng tôi chăm sóc triệt
              để.
            </span>
            <span>
              Phương châm hoạt động của đội ngũ Sky Land xoay quanh các giá trị
              cốt lõi sau :
            </span>
            <span>
              <strong>Chuyên môn cá nhân</strong> : kĩ năng chuyên môn và đạo
              đức nghề nghiệp được đưa lên hàng đầu ở mỗi các nhân trong tập thể
              Sky Land.
            </span>
            <span>
              <strong>Đồng tâm cùng chí hướng</strong> : tinh thần làm việc tập
              thể, kết nối từng cá nhân trong tập thể tạo thành một đơn vị vững
              mạnh.
            </span>
            <span>
              <strong>Tư duy không ngại thay đổi</strong> : tiếp cận vấn đề theo
              truyền thống kinh nghiệm người đi trước, không ngần ngại thay đổi
              theo xu hướng mới.
            </span>
            <span>
              <strong>Linh hoạt</strong> : xử lý các vấn đề một các linh động,
              luôn đưa lợi ích khách hàng đầu tiên và lợi ích tập thể tiên
              phong. Phát triển và mở rộng : cùng gắn bó tạo thành tập thể với
              giá trị cốt lõi được xây dựng, mở rộng và phấn đấu trở thành nơi
              tin cậy của khách hàng.
            </span>
            <span>
              <strong>Văn hóa nội bộ</strong> : rèn luyện và duy trì những văn
              hóa đẹp và có giá trị tinh thần, tôn trọng văn hóa cá nhân, học
              tập những khác biệt lẫn nhau.
            </span>
            <span>
              <strong>Các dịch vụ mà Sky Land cung cấp bao gồm</strong> : kinh
              doanh bất động sản, môi giới nhà đất, định giá bất động sản, tư
              vấn chuyên sâu dự án khác, đấu giá bất động sản và
              quản lý quảng cáo bất động sản.
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Introduction;
