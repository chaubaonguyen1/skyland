import styles from "./content.module.scss";
import { data } from "./data";

const Content = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["paragraph"]}>
        <h1>SKY LAND</h1>
        <span>Kính chào toàn thể quý khách hàng</span>
        <span>
          Được thành lập với đội ngủ trẻ, nhiệt huyết năng động. Sky Land tự hào
          mang đến cho quý khách hàng các dự án bất động sản chất lượng và tiềm
          năng đầu tư lâu dài.
        </span>
        <span>
          Với phương châm chất lượng, bền vững và hợp tác có lợi đôi bên, Sky
          Land không ngừng nỗ lực để phấn đấu làm nơi tin cậy cho quý khách hàng
          tin tưởng và giao dịch
        </span>
        <h2>DỰ ÁN ĐANG PHÂN PHỐI</h2>
        <div className={styles["hr"]}></div>
      </div>
      <div className={styles["content"]}>
        {data.map((item) => (
          <div className={styles["items"]} key={item.id}>
            <div className={styles["imgWrapper"]}>
              <img
                src={item.thumbnailImg}
                alt={item.title}
              />
            </div>
            <div className={styles["thumbnailTitle"]}>
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
