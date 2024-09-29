import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen absolute z-50 inset-0 w-full flex justify-center items-center">
      <Triangle
        visible={true}
        height="120"
        width="120"
        color="#00FFFF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
