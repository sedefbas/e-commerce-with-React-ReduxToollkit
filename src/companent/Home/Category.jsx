import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./../../redux/categorySlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="w-1/6   bg-gray-100  hover:border border-white mt-4 ">
      <div className="text-3xl border-b border-gray-600 "> Kategori</div>
      {categories?.map((category, i) => (
        <div
          onClick={() => setCategory(category)}
          className="text-lg mt-2 cursor-pointer  hover:bg-gray-200 p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
