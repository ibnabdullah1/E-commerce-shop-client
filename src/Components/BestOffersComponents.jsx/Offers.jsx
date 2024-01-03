import { IoMdArrowForward } from "react-icons/io";
import adsImage2 from "../../assets/Products/adsImage2.jpeg";
import adsImage3 from "../../assets/Products/adsImage3.jpeg";
import adsImage4 from "../../assets/Products/adsImage4.jpeg";
import CountdownTimer from "./CountdownTimer ";

function FreshFruit() {
  return (
    <div className=" relative rounded-lg ">
      <img
        className="rounded-lg object-cover h-[450px] w-full "
        src={adsImage4}
        alt=""
      />
      <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
        <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
          <p className="text-2xl lg:text-xs text-[#ffffff] font-medium">
            Best Deals
          </p>
          <h2 className="text-[#ffffff] mt-1 text-5xl lg:text-3xl font-semibold">
            Sale of the Month
          </h2>

          <CountdownTimer />
          <button className=" text-xl w-[200px] md:w-[120px] mx-auto mt-3 flex items-center justify-center md:text-base rounded-full  bg-[#ffffff] text-[#00B207]  px-4 py-2 lg:px-3 lg:py-1">
            Shop now <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

function SaleOfTheMonth() {
  return (
    <div className=" relative rounded-lg">
      <img
        className="rounded-lg object-cover h-[450px] w-full "
        src={adsImage2}
        alt=""
      />
      <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
        <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
          <p className="text-2xl lg:text-xs text-[##1A1A1A] font-semibold">
            Best Deals
          </p>
          <h2 className="text-[##1A1A1A] text-5xl lg:text-3xl mt-2 font-semibold">
            Low-Fat Meat
          </h2>
          <p className="text-2xl lg:text-base my-2 text-[##1A1A1A] font-medium">
            Up To{" "}
            <span className="text-[#FCC900] bg-black px-4 rounded-md py-2">
              64% OFF
            </span>
          </p>
          <button className=" text-xl w-[200px] md:w-[120px] mx-auto mt-3 flex items-center justify-center md:text-base rounded-full  bg-[#ffffff] text-[#00B207]  px-4 py-2 lg:px-3 lg:py-1">
            Shop now <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}
function LowFatMeat() {
  return (
    <div className=" relative rounded-lg">
      <img
        className="rounded-lg  object-cover h-[450px] w-full"
        src={adsImage3}
        alt=""
      />
      <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
        <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
          <p className="text-xl lg:text-xs text-[#ffffff]">85% Fat Free</p>
          <h2 className="text-[#ffffff] text-5xl lg:text-3xl mt-2 font-semibold">
            Low-Fat Meat
          </h2>
          <p className="text-2xl lg:text-base my-2 text-[#ffffff] font-medium">
            Started at <span className="text-[#FF8A00]">$77.95</span>
          </p>
          <button className=" text-xl w-[200px] md:w-[120px] mx-auto mt-3 flex items-center justify-center md:text-base rounded-full  bg-[#ffffff] text-[#00B207]  px-4 py-2 lg:px-3 lg:py-1">
            Shop now <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

const Offers = () => {
  return (
    <div className="max-w-5xl gap-5 mx-auto grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 ">
      <FreshFruit />
      <LowFatMeat />
      <SaleOfTheMonth />
    </div>
  );
};

export default Offers;
