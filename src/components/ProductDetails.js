import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../redux/cartSlice';
import Slider from 'react-slick';

import ProductCarousel from './ProductCarousel';
import ShippingCalculator from './ShippingCalculator';

import "../style/productDetails.css"

const ProductDetails = ({ onOpenCart }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.find((p) => p.id === id));

  // Renomear o estado e a função relacionados ao tamanho
  const [selectedProductSizeDetail, setSelectedProductSizeDetail] = useState(product?.tamanho[0] || '');
  if (!product) return <p>Produto não encontrado</p>;

  // Renomear a função de adicionar ao carrinho
  const handleAddToCartDetailClick = (e) => {
    if (e) e.stopPropagation();
    dispatch(addItem({ ...product, quantity: 1, selectedSize: selectedProductSizeDetail }));
  };

  return (
    <div className="product-details-page container">
      <div className="main-product">
        <div className="product-images">
          <Slider asNavFor={nav2} ref={sliderRef1} className="main-slider">
            {product.src.map((src, index) => (
              <img key={index} src={src} alt={`${product.nome} ${index + 1}`} />
            ))}
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={sliderRef2}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            verticalSwiping={true}
            className="thumbnail-slider"
          >
            {product.src.map((src, index) => (
              <div key={index} className="thumbnail-item">
                <img src={src} alt={`${product.nome} ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-info">
          <h1 className='product-name'>{product.nome}</h1>
          <p className='ref'>Ref: {product.id}</p>
          <div className="main-price">
            <span className="original-price">R${product.preço_original}</span>
            <span className="promotional-price">R${product.preço_promocional}</span>
            <p className='installments'>Em até 3x de <b>R${(product.preço_promocional / 3).toFixed(2)}</b></p>
          </div>
          <div className="main-size-selector">
            <p className="size-title">Tamanho</p>
            <div className="wrapper-sizes">
              {product.tamanho.map((size, index) => (
                <div key={index} className="size-option">
                  <input
                    type="radio"
                    id={`main-size-${size}`}
                    name={`size-${product.id}`} // Nome único por produto
                    value={size}
                    checked={selectedProductSizeDetail === size}
                    onChange={() => setSelectedProductSizeDetail(size)}
                  />
                  <label htmlFor={`main-size-${size}`} className={selectedProductSizeDetail === size ? 'selected' : ''}>
                    {size}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <button className='btn-buy' onClick={handleAddToCartDetailClick}>Adicionar ao Carrinho</button>
          <ShippingCalculator/>
        </div>
      </div>
      <div className="description-section">
        <h2 description-title>Descrição</h2>
        <p className='description'>{product.descrição}</p>
      </div>
      <ProductCarousel title="Os mais vendidos" uniqueId="sales" onOpenCart={onOpenCart} />
    </div>
  );
};

export default ProductDetails;
