import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
