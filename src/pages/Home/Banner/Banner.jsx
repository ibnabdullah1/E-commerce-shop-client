import { Carousel } from "@material-tailwind/react";
import slider1 from "../../../assets/slider.png";
import slider2 from "../../../assets/slider2.png";
import slider3 from "../../../assets/slider3.png";
import Slider from "../../../Components/Slider/Slider";
import Services from "./Services";
const Banner = () => {
  return (
    <>
      <Carousel
        className="rounded-xl max-w-6xl bg-[#EDF2EE]  mx-auto my-5"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer mb-10 rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-4 h-2 bg-[#00B207]"
                    : "w-2 h-2 bg-[#B4CCB4]"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <Slider
          h4={"Welcome to showery"}
          h1={"Fresh & Healthy Organic Food"}
          h3={" 30% OFF"}
          p={"Free shipping on all your order. we deliver, you enjoy"}
          img={slider1}
        />
        <Slider
          h4={"Welcome to showery"}
          h1={"Fresh & Healthy Organic Food"}
          h3={"50% OFF"}
          p={"Free shipping on all your order. we deliver, you enjoy"}
          img={slider2}
        />
        <Slider
          h4={"Welcome to showery"}
          h1={"Fresh & Healthy Organic Food"}
          h3={"40% OFF"}
          p={"Free shipping on all your order. we deliver, you enjoy"}
          img={slider3}
        />
      </Carousel>
      <Services />
    </>
  );
};

export default Banner;
