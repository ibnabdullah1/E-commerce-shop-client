import FeaturesProductsCard from "../../../Components/ProductCardComponents/featuresProductsCard";

const HotDealsProducts = ({ hotDealsProducts }) => {
  return (
    <div>
      <h2 className="font-semibold text-lg">Hot Deals</h2>
      {hotDealsProducts?.map((product, i) => (
        <FeaturesProductsCard product={product} key={i} />
      ))}
    </div>
  );
};

export default HotDealsProducts;
