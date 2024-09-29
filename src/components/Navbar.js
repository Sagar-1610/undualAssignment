import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/logo.png";
import PopUp from "./PopUp";
import { resetFilterProduct } from "./redux/slices/ProductSlice";
import { RxTriangleDown } from "react-icons/rx";
import { RxTriangleUp } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-full flex items-center justify-around list-none cursor-pointer ${
        loading ? "opacity-0" : "opacity-100"
      }  h-full bg-radial-gradient`}
    >
      <div>
        <img src={logo} alt="not load" className="w-20" />
      </div>
      <div>
        <div className="xxs:hidden">
          <ul className="flex gap-2 pr-8 text-sm">
            <li
              className="border border-black font-semibold   p-3 rounded-xl"
              onClick={() => dispatch(resetFilterProduct())}
            >
              ALL PRODUCTS
            </li>
            <div
              className="border border-black font-semibold p-3 rounded-xl transition duration-300 transform flex items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              CATEGORY{" "}
              {isOpen ? (
                <RxTriangleUp size={20} />
              ) : (
                <RxTriangleDown size={20} />
              )}
              <div>{isOpen ? <PopUp /> : null}</div>
            </div>
          </ul>
        </div>
        <div className="md:hidden xl:hidden">
          <GiHamburgerMenu onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
