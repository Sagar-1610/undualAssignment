import React from "react";
import { NavData } from "./data/Data";
import { filterProduct } from "./redux/slices/ProductSlice";
import { useDispatch } from "react-redux";

const PopUp = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[200px] border border-black h-auto bg-radial-gradient fixed flex flex-col items-center p-4 gap-2 rounded-2xl">
      {NavData.map((item) => {
        return (
          <>
            <button
              key={item.id}
              className="text-sm"
              onClick={() => dispatch(filterProduct(item.category))}
            >
              {item.title}
            </button>
            <hr className="w-full border-t-1 border-black my-2" />
          </>
        );
      })}
    </div>
  );
};

export default PopUp;
