import { IoMdArrowForward } from "react-icons/io";
const Slider = ({ h4, h1, h3, p, img }) => {
  return (
    <div className="lg:flex py-10 md:py-28  bg-[#EDF2EE] items-center px-5 md:px-20">
      <div className="flex-1">
        <h4 className="text-[#00B207] text-base mb-1 uppercase font-semibold">
          {h4}
        </h4>
        <h1 className="text-4xl md:text-6xl text-[#1A1A1A] mb-5 font-bold md:w-[500px]">
          {h1}
        </h1>
        <h4 className="text-xl">
          Sale up to
          <span className="text-[#FF8A00] ml-2 mb-3 font-semibold text-xl md:text-2xl">
            {h3}
          </span>
        </h4>
        <p className="text-[#808080] mb-3">{p}</p>
        <button className="flex gap-2 justify-center rounded-full items-center px-4 md:px-8 py-2  bg-[#00B207] text-white font-medium">
          Shop now <IoMdArrowForward />
        </button>
      </div>
      <div className="flex-1">
        <img className="" src={img} alt="" />
      </div>
    </div>
  );
};

export default Slider;
