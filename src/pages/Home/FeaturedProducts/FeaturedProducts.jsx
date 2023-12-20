import axios from "axios";
import ProductCard from "../../../Components/ProductCardComponents/ProductCard";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import HotDealsProducts from "./HotDealsProducts";

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
  const hotDealsProducts = featuredProducts[0];
  console.log(hotDealsProducts?.hot_deals);

  return (
    <div>
      <SectionTitle heading={"Featured Products"} />

      <div className="max-w-5xl py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
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
      <div className="grid grid-cols-4 gap-3 max-w-5xl py-10 mx-auto">
        <HotDealsProducts hotDealsProducts={hotDealsProducts?.hot_deals} />
        <HotDealsProducts hotDealsProducts={hotDealsProducts?.hot_deals} />
        <HotDealsProducts hotDealsProducts={hotDealsProducts?.hot_deals} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
