import React from "react";
import { products } from "../api/products";

const Product_list = () => {
  return (
    
    <div className='flex flex-col items-center'>
      <h1 className='bg-primary text-2xl md:text-4xl font-bold mb-4 text-blue-400 mt-10'>Product list</h1>
      <div className="flex flex-wrap justify-evenly">
        {products.slice(0, 6).map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2 className='flex flex-row text-2xl font-bold text-blue-900'>{product.name}</h2>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product_list;
