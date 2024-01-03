import FeaturesProductsCard from "../../../Components/ProductCardComponents/featuresProductsCard";

const BestSalesProducts = ({ bestSalesProducts }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">Best Seller</h2>
      {bestSalesProducts?.map((product, i) => (
        <FeaturesProductsCard product={product} key={i} />
      ))}
    </div>
  );
};

export default BestSalesProducts;
