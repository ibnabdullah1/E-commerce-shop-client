import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllProducts from "../AllProducts/AllProducts";
import React, { useState } from "react";
import { RxChevronUp } from "react-icons/rx";
import { RxChevronDown } from "react-icons/rx";
import LinkBanner from "../LinkBanner/LinkBanner";

const Categories = () => {
  const [categoryItem, setCategoryItem] = useState([]);
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const {
    refetch,
    data: categories = [],
    isLoading: isCategoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/categories");
      return res.data;
    },
  });

  const handleCategories = (newCategory) => {
    if (!categoryItem.includes(newCategory)) {
      setCategoryItem((prevCategory) => [...prevCategory, newCategory]);
    } else {
      setCategoryItem((prevCategory) =>
        prevCategory.filter((item) => item !== newCategory)
      );
    }
  };

  if (isCategoriesLoading) {
    return "loading...";
  }

  return (
    <div>
      <LinkBanner location={"All Categories"} />

      <div className="grid lg:grid-cols-7 max-w-5xl gap-5 mx-auto my-20 ">
        <div className="md:flex flex-col lg:col-span-2 px-5">
          {/* {categories.map((category, i) => (
            <Checkbox
              onClick={() => handleCategories(category.category)}
              color={categoryItem.includes(category.category) ? "green" : ""}
              className="h-5 w-5 rounded-full border-[#CCCCCC] bg-[#fcfcfc] transition-all hover:scale-105 hover:before:opacity-0"
              key={i}
              label={
                <Typography color="blue-gray" className="flex font-medium">
                  {category.category} ({category.quantity})
                </Typography>
              }
            />
          ))} */}
          <Accordion open={open === 1}>
            <button
              onClick={() => handleOpen(1)}
              className=" flex  justify-between items-center w-full"
            >
              <h2 className="text-lg font-semibold"> All Categories</h2>

              {open === 1 ? (
                <RxChevronUp className="text-lg" />
              ) : (
                <RxChevronDown className="text-lg" />
              )}
            </button>
            <AccordionBody className="lg:flex flex-wrap lg:flex-col">
              {categories?.map((category, i) => (
                <Checkbox
                  onClick={() => handleCategories(category.category)}
                  color={
                    categoryItem.includes(category.category)
                      ? "green"
                      : "undefined"
                  }
                  className="h-5 w-5 rounded-full border-[#CCCCCC] bg-[#fcfcfc] transition-all hover:scale-105 hover:before:opacity-0"
                  key={i}
                  label={
                    <Typography color="blue-gray" className="flex font-medium">
                      {category.category} ({category.quantity})
                    </Typography>
                  }
                />
              ))}
            </AccordionBody>
            <div className="w-full bg-[#E6E6E6] h-[1px] my-2"></div>
          </Accordion>
        </div>
        <div className="lg:col-span-5 px-3 md:px-4 lg:px-0">
          <AllProducts categoryItem={categoryItem} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
