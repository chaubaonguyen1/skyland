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
            <h2>GIỚI THIỆU VỀ SKYLAND</h2>
          </div>
          <div className={styles["content"]}>
            <p>
              Có nhiều năm kinh nghiệm và gặt hái nhiều thành công trong lĩnh
              vực đầu tư và môi giới Bất Động Sản. Công ty Cổ Phần Đầu Tư Địa Ốc
              Sky Land được thành lập với mục tiêu đem đến các giá trị đầu tư
              tiềm năng cho quý khách hàng. Từ những khó khăn, thử thách đã trải
              qua, nay SKY LAND đã hoàn thiện được kỹ năng cũng như chiến lược
              hướng đến sự phát triển lâu dài.
            </p>
            <p>
              Với ước mơ cùng niềm đam mê trở thành công ty phát triển Bất Động
              Sản tốt nhất Việt Nam, cung cấp sản phẩm và dịch vụ ưu việt, SKY
              LAND bao gồm các Lãnh đạo tầng lớp trung niên với kinh nghiệm dày
              dạn, đội ngũ chuyên viên thế hệ trẻ với nhiều nhiệt huyết, SKY
              LAND tự tin đem đến cho quý khách hàng những sản phẩm dự án Bất
              Động Sản chất lượng, dịch vụ chăm sóc khách hàng với các chuyên
              viên được đào tạo chuyên sâu.
            </p>
            <div className={styles["imgWrapper"]}>
              <img src={companyImg} alt="" />
              Tập thể đội ngũ Skyland
            </div>
            <p>
              Chúng tôi luôn tự tâm niệm rằng lợi ích của khách hàng là trên hết
              và là yếu tố tồn tại lâu dài cho toàn thể đội ngũ, cho nên sự hài
              lòng về dịch vụ cũng như hiệu quả giá trị đầu tư mà các dự án Bất
              Động Sản đem lại cho quý khách hàng được chúng tôi chăm sóc tận
              tâm.
            </p>
            <p>
              Phương châm hoạt động của đội ngũ SKY LAND luôn đảm bảo những tiêu
              chí sau:
            </p>
            <p>
              SKY LAND luôn nỗ lực không ngừng trong mọi hoàn cảnh để khẳng định
              và nâng cao vị thế của mình trên thị trường Bất Động Sản Việt Nam,
              giữ vững niềm tin trong tâm trí khách hàng và đối tác.
            </p>
            <p>
              <strong>Chuyên môn cá nhân</strong> : kĩ năng chuyên môn và đạo
              đức nghề nghiệp được đưa lên hàng đầu ở mỗi các nhân trong tập thể
              Sky Land.
            </p>
            <p>
              <strong>Đồng tâm cùng chí hướng</strong> : tinh thần làm việc tập
              thể, kết nối từng cá nhân trong tập thể tạo thành một đơn vị vững
              mạnh.
            </p>
            <p>
              <strong>Tư duy không ngại thay đổi</strong> : tiếp cận vấn đề theo
              truyền thống kinh nghiệm người đi trước, không ngần ngại thay đổi
              theo xu hướng mới.
            </p>
            <p>
              <strong>Linh hoạt</strong> : xử lý các vấn đề một các linh động,
              luôn đưa lợi ích khách hàng đầu tiên và lợi ích tập thể tiên
              phong. Phát triển và mở rộng : cùng gắn bó tạo thành tập thể với
              giá trị cốt lõi được xây dựng, mở rộng và phấn đấu trở thành nơi
              tin cậy của khách hàng.
            </p>
            <p>
              <strong>Văn hóa nội bộ</strong> : rèn luyện và duy trì những văn
              hóa đẹp và có giá trị tinh thần, tôn trọng văn hóa cá nhân, học
              tập những khác biệt lẫn nhau.
            </p>
            <p>
              <strong>Các dịch vụ mà Sky Land cung cấp bao gồm</strong> : kinh
              doanh bất động sản, môi giới nhà đất, định giá bất động sản, tư
              vấn chuyên sâu dự án khác, đấu giá bất động sản và quản lý bất
              động sản.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Introduction;
