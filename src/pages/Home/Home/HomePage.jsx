import TopCategory from "../../../Components/TopCategory/TopCategory";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div className=" px-5 md:px-0">
      <Banner />
      <FeaturedProducts />
      <TopCategory />
    </div>
  );
};

export default HomePage;
