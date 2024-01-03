import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "./CategoriesSlider.css";
const Slider = ({ data }) => {
  let itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 600) {
      itemsPerPage.current = 2;
    }
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, data.length - itemsPerPage)
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex justify-around py-16 max-w-6xl mx-auto items-center">
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className=" border text-xl hover:bg-[#00B207] hover:text-white p-1 rounded-full"
      >
        <IoIosArrowRoundBack />
      </button>
      <div className="grid grid-cols-2 md:grid-cols-6 w-full gap-3 lg:gap-5 max-w-5xl mx-auto ">
        {data?.slice(startIndex, startIndex + itemsPerPage).map((category) => (
          <div
            key={category.id}
            className="CategoriesSliderBox space-y-1 border px-2 py-4 flex flex-col justify-center items-center rounded hover:shadow-md"
          >
            <img
              className=" w-[30px] lg:w-[50px]"
              src={category.image}
              alt=""
            />
            <h2 className="text-[8px] lg:text-sm font-semibold">
              {category.category}
            </h2>
            <p className="text-[8px] text-[#808080] lg:text-xs">
              {category.quantity} Products
            </p>
          </div>
        ))}
      </div>
      <button
        className=" border text-xl hover:bg-[#00B207] hover:text-white p-1 rounded-full"
        onClick={handleNext}
        disabled={startIndex + itemsPerPage >= data.length}
      >
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

const CategoriesSlider = () => {
  const categoryData = [
    {
      category: "Snacks",
      image: "https://i.ibb.co/JcCb74d/snacks-1.png",
      quantity: 20,
    },
    {
      category: "Water and Drinks",
      image: "https://i.ibb.co/jDdBhjJ/soft-drink-1.png",
      quantity: 20,
    },
    {
      category: "Meat",
      image: "https://i.ibb.co/YdV9nsp/meat-1.png",
      quantity: 20,
    },
    {
      category: "River Fish",
      image: "https://i.ibb.co/xJr2861/fish-1.png",
      quantity: 20,
    },
    {
      category: "Fresh Fruit",
      image: "https://i.ibb.co/vDHMfKD/fruits-1.png",
      quantity: 20,
    },
    {
      category: "Vegetable",
      image: "https://i.ibb.co/2qZQZS3/Vegetable.png",
      quantity: 20,
    },
    {
      category: "Water and Drinks",
      image: "https://i.ibb.co/jDdBhjJ/soft-drink-1.png",
      quantity: 20,
    },
  ];

  return <Slider data={categoryData} />;
};

export default CategoriesSlider;
