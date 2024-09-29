import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { loading } = useSelector((state) => state.product);
  return (
    <div
      className={`w-full h-full text-center ${
        loading ? "opacity-0" : "opacity-100"
      } bg-radial-gradient p-5`}
    >
      <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
