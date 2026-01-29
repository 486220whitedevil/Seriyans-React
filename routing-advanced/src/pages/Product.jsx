import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="text-white flex flex-col gap-10 items-center">
      <div className="flex gap-10">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>

      {/* Nested routes yahan render honge */}
      <Outlet />
    </div>
  );
};

export default Product;
