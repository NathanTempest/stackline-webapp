import React, { useState, useEffect } from 'react';
import { ProductData } from '../types';
import data from '../assets/stackline_frontend_assessment_data_2021.json';

const ProductDetails: React.FC = () => {
  const [productData, setProductData] = useState<ProductData | null>(null);

  useEffect(() => {
    const product: ProductData = data[0];
    setProductData(product);
  }, []);

  if (!productData) return null;

  return (
    <div className="product-details">
      <img
        src={productData.image}
        alt={productData.title}
        className="product-image"
      />
      <h3 className="product-title">{productData.title}</h3>
      <h5 className="product-subtitle">{productData.subtitle}</h5>
      <ul className="product-tags">
        {productData.tags.map((tag, index) => (
          <li key={index} className="product-tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;