import image from "../../assets/logo.png";
import { RiVisaLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border-b-gray-800 border-b pb-10">
          <div>
            <div className="flex items-center gap-2">
              <img src={image} alt="" />
              <h2 className="text-2xl text-white font-bold">EcoBazar</h2>
            </div>

            <p className="mt-4 max-w-xs text-gray-700">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex mt-3 text-white gap-3">
              <h2 className="border-b-[2px] border-b-[#00B207] pb-1">
                (219) 555-0114
              </h2>
              or
              <h2 className="border-b-[2px] border-b-[#00B207] pb-1">
                ecobazabd@gmail.com
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-[#FFFFFF]">My Account</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Order History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Shoping Cart
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Wishlist
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#FFFFFF]">Helps</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Faqs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#FFFFFF]">Proxy</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Shop
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Product
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Track Order
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#FFFFFF]">Categories</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Fruit & Vegetables
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Meat & Fish
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Bread & Bakery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:text-white"
                  >
                    Beauty & Health
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; Ecobazar eCommerce © 2023. All Rights Reserved || Designed By
            Arafat Hosen
          </p>
          <div className="flex items-center gap-3">
            <img
              className="h-6"
              src="https://www.svgrepo.com/show/382731/pay-pal-paypal-payments-platform.svg"
              alt=""
            />
            <img
              className="w-8"
              src="https://www.svgrepo.com/show/328151/discover.svg"
              alt=""
            />
            <RiVisaLine className="text-4xl text-white" />

            <img
              className="w-8"
              src="https://www.svgrepo.com/show/355117/mastercard.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
