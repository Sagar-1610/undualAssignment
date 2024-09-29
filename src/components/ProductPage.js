import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { FetchProductData } from "./redux/slices/ProductSlice";
import FilteredProduct from "./FilteredProduct";
import Loader from "./Loader";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, total, loading, filteredItem, currentPage, itemsPerPage } =
    useSelector((state) => state.product);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = items.slice(indexofFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(total / itemsPerPage);

  useEffect(() => {
    dispatch(FetchProductData());
  }, []);
  const displayProduct = filteredItem.length > 0 ? filteredItem : currentItem;
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center gap-8 p-8">
      {displayProduct.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
      {filteredItem.length > 0 ? null : (
        <FilteredProduct totalPages={totalPages} />
      )}
    </div>
  );
};

export default ProductPage;
