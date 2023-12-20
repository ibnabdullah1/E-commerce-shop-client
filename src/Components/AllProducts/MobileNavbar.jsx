import { NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { GoHomeFill } from "react-icons/go";
import { HiShoppingCart } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";

const MobileNavbar = () => {
  return (
    <div className="fixed flex md:hidden bottom-0  left-0 z-50  py-2 bg-white mx-auto w-full border-t border-gray-200 ">
      <div className="flex  justify-center gap-8  w-full items-center  font-medium px-2">
        <NavLink to={"/"}>
          <button
            type="button"
            className="inline-flex flex-col  items-center justify-center group"
          >
            <GoHomeFill className="w-6 h-6 mb-1 text-gray-800  group-hover:text-[#00B207] " />
            <span className="text-sm text-gray-800  group-hover:text-[#00B207] ">
              Home
            </span>
          </button>{" "}
        </NavLink>
        <NavLink>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center   group"
          >
            <HiShoppingCart className="w-6 h-6 mb-1 text-gray-800  group-hover:text-[#00B207] " />
            <span className="text-sm text-gray-800  group-hover:text-[#00B207] ">
              Cart
            </span>
          </button>
        </NavLink>
        <ShoppingCart />
        <NavLink>
          <button
            type="button"
            className="inline-flex flex-col  items-center justify-center   group"
          >
            <FaShopify className="w-6 h-6 mb-1 text-gray-800  group-hover:text-[#00B207] " />
            <span className="text-sm text-gray-800  group-hover:text-[#00B207] ">
              Shop
            </span>
          </button>
        </NavLink>
        <NavLink>
          <button
            type="button"
            className="inline-flex flex-col items-center  justify-center  group"
          >
            <MdDashboardCustomize className="w-6 h-6 mb-1 text-gray-800  group-hover:text-[#00B207] " />
            <span className="text-sm text-gray-800  group-hover:text-[#00B207] ">
              Dashboard
            </span>
          </button>
        </NavLink>

        <NavLink>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center "
          >
            <LuUserCircle className="w-6 h-6 mb-1 text-gray-800  group-hover:text-[#00B207] " />
            <span className="text-sm text-gray-800  group-hover:text-[#00B207] ">
              Profile
            </span>
          </button>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
