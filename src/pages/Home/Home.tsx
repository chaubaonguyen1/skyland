import Label from "../../components/Label/Label";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Content from "../../components/Content/Content";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Label />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
