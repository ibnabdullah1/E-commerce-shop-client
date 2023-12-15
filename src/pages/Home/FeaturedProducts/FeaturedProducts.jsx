import ProductCard from "../../../Components/ProductCardComponents/ProductCard";
import SectionTitle from "../../../Components/SectionTitle";

const FeaturedProducts = () => {
  return (
    <div>
      <SectionTitle heading={"Featured Products"} />

      <div className="max-w-5xl py-10 mx-auto grid grid-cols-2 lg:grid-cols-5 gap-3">
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
    </div>
  );
};

export default FeaturedProducts;
