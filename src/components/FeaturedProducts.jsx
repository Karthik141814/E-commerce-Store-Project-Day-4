import React from "react";
import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
    <div px-8 mt-6>
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </div>
  );
};

export default FeaturedProducts;
