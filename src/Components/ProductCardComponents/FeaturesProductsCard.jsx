import { HiOutlineShoppingBag } from "react-icons/hi2";
import Rating from "react-rating";
import ProductCardModal from "./ProductCardModal";
import { useState } from "react";
import "./FeaturesProductsCard.css";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

const FeaturesProductsCard = ({ product }) => {
  console.log(product);
  const handleAddToCart = (img, title, price, rating) => {
    const addedProduct = { img, title, price, rating };
    console.log(addedProduct);
  };

  //   const items = { img, title, price, rating };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className=" featuresCard grid card grid-cols-3  mb-3 py-3 pr-1 border-[1px]  rounded-xl">
      <div className="col-span-1 flex  items-center px-3">
        <img
          className="overflow-hidden 
          h-[70px] object-cover"
          src={product.image}
          alt=""
        />
      </div>
      <div className="col-span-2">
        <div>
          <h3 className="text-xs font-medium mt-2 text-gray-600">
            {product.food_name}
          </h3>
          <h4 className="text-sm font-semibold  text-gray-800">
            Price: ${product.price}
          </h4>
          <p className=" text-orange-400 text-xs ">
            <Rating
              emptySymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
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
                  className="w-3 h-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              initialRating={product.rating}
              readonly
            />
          </p>
        </div>
        <div>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => openModal(true)}
              className=" bg-gray-100 hidden text-xl p-2 rounded-full hover:bg-[#00B207] "
            >
              <HiOutlineShoppingBag />
            </button>
            <button className=" bg-gray-100 hidden text-xl p-2 rounded-full hover:bg-[#00B207] ">
              <FiEye />
            </button>
            <button className=" bg-gray-100 hidden text-xl p-2 rounded-full hover:bg-[#00B207] ">
              <CiHeart />
            </button>
          </div>
        </div>
        <ProductCardModal
          isOpen={isOpen}
          closeModal={closeModal}
          //   items={items}
          product={product}
        />
      </div>
    </div>
  );
};

export default FeaturesProductsCard;
