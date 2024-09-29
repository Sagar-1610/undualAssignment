import React from "react";
import { Next, prev, setCurrent } from "./redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const FilteredProduct = ({ totalPages }) => {
  const { currentPage } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        <button
          disabled={currentPage === 1}
          onClick={() => dispatch(prev())}
          className="bg-radial-gradient font-semibold px-4 py-2 rounded-md"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => dispatch(setCurrent(index + 1))}
            className={` px-4 py-2 rounded-md font-semibold ${
              currentPage === index + 1 ? "bg-gray-500" : "bg-radial-gradient"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => dispatch(Next())}
          className="bg-radial-gradient font-semibold px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FilteredProduct;
