import image from "../../../assets/logo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { ShoppingCart } from "../../../Components/ShoppingCart/ShoppingCart";
import { NavLink } from "react-router-dom";

const SearchFunc = () => {
  return (
    <div className="lg:flex hidden justify-between py-3 items-center max-w-5xl mx-auto">
      <div className="flex items-center gap-2">
        <img src={image} alt="" />
        <h2 className="text-2xl font-bold">EcoBazar</h2>
      </div>
      <div>
        <form className="flex flex-col md:flex-row gap-3">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for the tool you like"
              className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-[#00B207] focus:outline-none focus:border-[#00B207]"
            />
            <button
              type="submit"
              className="bg-[#00B207] text-white rounded-r px-2 md:px-3 py-0 md:py-1"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center">
        <NavLink to={"/cart"}>
          <GoHeart className="text-4xl" />
        </NavLink>
        <div className="w-[2px] h-6 bg-[#CCCCCC] mx-2"></div>
        <div className="flex items-center">
          <ShoppingCart />
          <div>
            <h3>Shopping cart:</h3>
            <p>$57.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFunc;
