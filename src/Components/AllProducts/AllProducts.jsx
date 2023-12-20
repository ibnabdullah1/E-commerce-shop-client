// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import ProductCard from "../ProductCardComponents/ProductCard";
// import { Spinner } from "@material-tailwind/react";
// import { useState } from "react";

// const AllProducts = ({ categoryItem }) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3;
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   console.log(categoryItem);
//   const {
//     refetch,
//     data: products = [],
//     isLoading: isProductsLoading,
//   } = useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//       const res = await axios.get("http://localhost:3000/products");
//       return res.data;
//     },
//   });

//   const itemsToShow = products.slice(startIndex, endIndex);

//   const totalItems = products.length;
//   const numberOfPages = Math.ceil(totalItems / itemsPerPage);
//   const pages = [...Array(numberOfPages).keys()];

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + (index + 1) + "</span>";
//     },
//   };

//   if (isProductsLoading) {
//     return (
//       <div className="min-h-[60vh] flex justify-center">
//         <Spinner className="h-10 w-10" color="green" />
//       </div>
//     );
//   }
//   // Filter products based on categoryItem
//   const filteredProducts =
//     categoryItem.length > 0
//       ? products.filter((product) => categoryItem.includes(product.category))
//       : products;
//   return (
//     <>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//         {filteredProducts.map((product, i) => (
//           <ProductCard key={i} product={product} />
//         ))}
//       </div>
//       {filteredProducts.length >= 6 && (
//         <div className="flex justify-center pb-10 gap-3">
//           {filteredProducts.map((page) => (
//             <button
//               className={`bg-gray-300 px-2 hover:bg-gray-400 py-1 ${
//                 currentPage === page ? "font-bold" : ""
//               }`}
//               key={page}
//               onClick={() => setCurrentPage(page)}
//             >
//               {page + 1}
//             </button>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default AllProducts;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "../ProductCardComponents/ProductCard";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const AllProducts = ({ categoryItem }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  const {
    refetch,
    data: products = [],
    isLoading: isProductsLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/products");
      return res.data;
    },
  });

  // Filter products based on categoryItem
  const filteredProducts =
    categoryItem.length > 0
      ? products.filter((product) => categoryItem.includes(product.category))
      : products;

  const totalItems = filteredProducts.length;
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = filteredProducts.slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, numberOfPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  if (isProductsLoading) {
    return (
      <div className="min-h-[60vh] flex justify-center">
        <Spinner className="h-10 w-10" color="green" />
      </div>
    );
  }

  return (
    <>
      {totalItems > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {itemsToShow.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          {totalItems >= itemsPerPage && (
            <div className=" flex-wrap md:flex justify-center py-16 gap-3">
              <button
                className="bg-gray-300 rounded-full flex items-center justify-center w-8 hover:bg-gray-400 h-8"
                onClick={handlePreviousPage}
              >
                <IoIosArrowBack />
              </button>
              {Array.from({ length: numberOfPages }, (_, index) => (
                <button
                  className={` w-8   h-8 rounded-full ${
                    currentPage === index
                      ? "font-bold bg-[#00B207]  text-white"
                      : "hover:bg-[rgb(0,178,7,0.4)]"
                  }`}
                  key={index}
                  onClick={() => handlePageClick(index)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="bg-gray-300 rounded-full flex items-center justify-center w-8 hover:bg-gray-400 h-8"
                onClick={handleNextPage}
              >
                <IoIosArrowForward />
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No matching products found.</p>
      )}
    </>
  );
};

export default AllProducts;
