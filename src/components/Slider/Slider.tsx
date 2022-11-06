import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import { SliderItems } from "../../data";
import styles from "./slider.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleSlide = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 4 : 1);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };
  //kingland
  return (
    <div className={styles["container"]}>
      <div
        className={styles["arrow"]}
        onClick={() => handleSlide("left")}
        style={{ left: "10px" }}
      >
        <ArrowLeftOutlined />
      </div>
      {SliderItems.map((item) => (
        <div
          className={styles["wrapper"]}
          style={{ transform: `translateX(${slideIndex * -100}vw)` }}
          key={item.id}
        >
          <div className={styles["slide"]}>
            <img className={styles["img"]} src={item.img} alt="" />
            <div className={styles["textWrapper"]}>
              <h3>{item.title}</h3>
              <p>{item.introduction}</p>
              <button className={styles["button"]}>
                <span>Tìm hiểu ngay</span>
                <KeyboardDoubleArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div
        className={styles["arrow"]}
        onClick={() => handleSlide("right")}
        style={{ right: "10px" }}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
