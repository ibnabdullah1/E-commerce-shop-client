import FeaturesProductsCard from "../../../Components/ProductCardComponents/featuresProductsCard";

const TopRatedProducts = ({ topRatesProducts }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">Top Rated</h2>
      {topRatesProducts?.map((product, i) => (
        <FeaturesProductsCard product={product} key={i} />
      ))}
    </div>
  );
};

export default TopRatedProducts;
