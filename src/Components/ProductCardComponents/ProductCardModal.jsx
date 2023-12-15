import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Rating from "react-rating";
import brandImg from "../../assets/brand.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const ProductCardModal = ({ closeModal, items, isOpen }) => {
  const [itemQuantity, setItemQuantity] = useState(0);
  console.log(items);
  const handleQuantityUp = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleQuantityDown = () => {
    if (itemQuantity >= 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const totalPrice = items.price * itemQuantity;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start ">
                  <div className="flex-1 items-center flex justify-center">
                    <img className="w-[300px]" src={items.img} alt="" />
                  </div>
                  <div className="text-left  flex-1">
                    <h2 className="text-2xl my-2 font-semibold flex items-center gap-2">
                      {items.title}{" "}
                      <span className="py-1 px-2.5 border-none rounded bg-[#d2f0d4] text-sm text-[#2C742F] font-medium">
                        In Stock
                      </span>
                    </h2>

                    <p className=" text-orange-400 flex justify-start items-center gap-4 my-1 text-xs ">
                      <Rating
                        emptySymbol={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        }
                        fullSymbol={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        }
                        initialRating={items.rating}
                        readonly
                      />
                      <span className="text-[#666666]"> 4 Review</span>
                      <span className="text-[#202020]">SKU: 2,51,594</span>
                    </p>
                    <p className="text-[#2C742F] font-semibold flex gap-1 items-center my-1 ">
                      ${items.price}
                      <span className="py-1 px-2.5 border-none rounded-full bg-[#fdeded] text-xs text-[#EA4B48] font-medium">
                        60% off
                      </span>
                    </p>
                    <p className="text-[#2C742F] font-semibold flex gap-1 items-center my-1 ">
                      Total Price: ${totalPrice}
                    </p>
                    <div className="h-[1px] bg-gray-200 my-3"></div>

                    <div className="flex justify-between items-center my-3">
                      <div className="flex items-center gap-1">
                        <p>Brand:</p>
                        <div className="border rounded px-2 py-1 flex flex-col items-center justify-center">
                          <img className="w-6" src={brandImg} alt="" />
                          <p className="text-xs">farmary</p>
                        </div>
                      </div>

                      <div className="flex justify-start items-center">
                        <p>Share item:</p>
                        <div className="hover:bg-[#00B207] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                          <FaFacebookF className=" text-sm" />
                        </div>
                        <div className="hover:bg-[#00B207] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                          <FaPinterestP className=" text-sm" />
                        </div>
                        <div className="hover:bg-[#00B207] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                          <FaTwitter className=" text-sm" />
                        </div>
                        <div className="hover:bg-[#00B207] p-1.5 rounded-full text-[#4D4D4D] hover:text-white ">
                          <FaInstagram className=" text-sm" />
                        </div>
                      </div>
                    </div>
                    <p>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos. Nulla nibh diam,
                      blandit vel consequat nec, ultrices et ipsum. Nulla varius
                      magna a consequat pulvinar.{" "}
                    </p>
                    <div className="flex my-3 justify-between items-center">
                      <div className="border max-w-[100px] flex px-2 rounded-full gap-2 py-2 items-center justify-between">
                        <div className="bg-[#F2F2F2] text-sm rounded-full p-1">
                          <FaMinus onClick={handleQuantityDown} />{" "}
                        </div>
                        {itemQuantity}
                        <div className="bg-[#F2F2F2] text-sm rounded-full p-1">
                          <FaPlus onClick={handleQuantityUp} />{" "}
                        </div>
                      </div>
                      <button className="px-10 bg-[#d2f0d4] hover:bg-[#00B207] py-2 rounded-full text-[#00B207] hover:text-white flex justify-center items-center gap-2">
                        Add to Cart
                        <HiOutlineShoppingBag />
                      </button>
                      <button className="bg-[#d2f0d4] p-3 text-[#2C742F] rounded-full">
                        <CiHeart />
                      </button>
                    </div>
                    <div className="my-3">
                      <p className=" text-sm">
                        Category:{" "}
                        <span className="text-[#808080]">Vegetables</span>
                      </p>
                      <p className=" text-sm">
                        Tag:{" "}
                        <span className="text-[#808080]">
                          Vegetables Healthy Chinese Cabbage Green{" "}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductCardModal;
