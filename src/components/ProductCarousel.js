import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Slider from "react-slick";

import '../style/productCarousel.css';

const ProductCarousel = ({ title, uniqueId, onOpenCart }) => {
  const products = useSelector(state => state.products);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        }
      },
    ]
  };


  return (
    <div className="product-carousel container">
      <h2 className='title'>{title}</h2>
      <div className="carousel">
        <Slider {...settings}>
          {products.map(product => (
            <ProductCard 
              key={`${uniqueId}-${product.id}`}
              product={product} 
              uniqueId={uniqueId}
              onOpenCart={onOpenCart}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
