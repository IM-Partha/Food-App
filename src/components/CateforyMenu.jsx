import { useEffect, useState } from "react";
import React from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setcategory } from "./CategorySlice";

export const CateforyMenu = () => {
  const [categorys, setcategorys] = useState([]);

  const listUniqCategory = () => {
    const uniqCategory = [...new Set(FoodData.map((food) => food.category))];
    setcategorys(uniqCategory);
  };
  useEffect(() => {
    listUniqCategory();
  }, []);

  const dispatch = useDispatch();
  const selectedcategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 mt-7">
        <button
          onClick={() => dispatch(setcategory("All"))}
          className={`px-3 py2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedcategory === "All" && "bg-green-500 text-white"} `}
        >
          All
        </button>

        {categorys.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setcategory(category))}
              key={index}
              className={`px-3 py2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white${selectedcategory === category && "bg-green-500 text-white"} `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};
