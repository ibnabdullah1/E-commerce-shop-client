import Offers from "../BestOffersComponents.jsx/Offers";
import CategoriesSlider from "../CategoriesSliders/CategoriesSlider";
import SectionTitle from "../SectionTitle";

const TopCategory = () => {
  return (
    <div className=" py-14">
      <SectionTitle heading={"Top Categories"} />
      <CategoriesSlider />
      <Offers />
    </div>
  );
};

export default TopCategory;
