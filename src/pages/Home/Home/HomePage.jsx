import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div className=" px-5 md:px-0">
      <Banner />
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
