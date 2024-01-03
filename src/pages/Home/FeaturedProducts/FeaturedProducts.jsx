import axios from "axios";
import ProductCard from "../../../Components/ProductCardComponents/ProductCard";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import HotDealsProducts from "./HotDealsProducts";
import BestSalesProducts from "./BestSalesProducts";
import TopRatedProducts from "./TopRatedProducts";
import adsImage from "../../../assets/Products/adsImage1.jpeg";
import { IoMdArrowForward } from "react-icons/io";
const FeaturedProducts = () => {
  const {
    refetch,
    data: featuredProducts = [],
    isLoading: featuredProductsLoading,
  } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/featured-products");
      return res.data;
    },
  });
  console.log(featuredProducts);
  const Products = featuredProducts[0];
  console.log(Products?.hot_deals);

  return (
    <div>
      <SectionTitle heading={"Featured Products"} />

      <div className="max-w-5xl pt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <ProductCard
          img={"https://i.ibb.co/80QS3f3/Image1.png"}
          title={"Green Lettuce"}
          price={15.5}
          rating={3.5}
        />
        <ProductCard
          img={"https://i.ibb.co/1Jg94gh/image2.png"}
          title={"Chanise Cabbage"}
          price={15.5}
          rating={3.5}
        />

        <ProductCard
          img={"https://i.ibb.co/xmjxknf/image3.png"}
          title={"Green Chili"}
          price={14.5}
          rating={4.5}
        />

        <ProductCard
          img={"https://i.ibb.co/syTfk5L/image4.png"}
          title={"Corn"}
          price={20.5}
          rating={4}
        />

        <ProductCard
          img={"https://i.ibb.co/q7Xnzkd/image5.png"}
          title={"Green Apple"}
          price={19.5}
          rating={5}
        />
      </div>
      <div className="grid grid-cols-1 pb-20 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl py-10 mx-auto px-4 lg:px-0">
        <HotDealsProducts hotDealsProducts={Products?.hot_deals} />
        <BestSalesProducts bestSalesProducts={Products?.best_seller} />
        <TopRatedProducts topRatesProducts={Products?.top_rated} />
        <div className="relative rounded-lg lg:top-3">
          <img
            className="rounded-lg md:h-[340px] w-full object-cover "
            src={adsImage}
            alt=""
          />
          <div className="absolute top-3 py-4 text-center flex flex-col w-full ">
            <p className="text-2xl lg:text-xs font-semibold">Summer Sale</p>
            <h2 className="text-[#00B207] mt-1 text-5xl lg:text-2xl font-semibold">
              75% off
            </h2>
            <div className="flex mt-2  justify-center">
              <button className="flex justify-center text-3xl lg:text-base rounded-full items-center bg-[#ffffff] text-[#00B207] font-semibold px-4 py-1 lg:px-3 lg:py-1">
                Shop now <IoMdArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
