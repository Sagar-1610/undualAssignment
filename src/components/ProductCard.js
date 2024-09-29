import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[270px] h-[350px] gap-2 flex flex-col shadow-md shadow-black items-center p-4 rounded-xl bg-[#F5F5F5]">
      <div className="w-[220px] h-[250px] rounded-xl">
        <img src={product.thumbnail} loading="lazy" alt="not load" />
      </div>
      <p className="font-semibold ">{product.title}</p>
      <p className="font-semibold">{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductCard;
