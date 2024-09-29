import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { filterProduct, resetFilterProduct } from "./redux/slices/ProductSlice";
import { NavData } from "./data/Data";

const SideBar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={`w-2/3 fixed h-full ${
        isSideBarOpen ? "" : "hidden"
      }  pt-10 bg-white shadow-2xl shadow-black z-20 top-0 right-0  lg:hidden xl:hidden`}
    >
      <div className="flex justify-around items-center">
        <h1 className="font-bold text-3xl">Menu</h1>
        <IoMdClose onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
      </div>
      <hr className="bg-gray-200" />
      <div>
        <ul className="flex flex-col gap-2 pr-8 text-sm">
          <li
            className="font-semibold p-2"
            onClick={() => dispatch(resetFilterProduct())}
          >
            ALL PRODUCTS
          </li>
          <div className="font-semibold p-2">CATEGORY</div>
          <div className="flex flex-col gap-1 pl-12">
            {NavData.map((item) => {
              return (
                <button
                  key={item.id}
                  className="text-sm py-2 px-4 text-left hover:bg-gray-200 transition"
                  onClick={() => dispatch(filterProduct(item.category))}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
