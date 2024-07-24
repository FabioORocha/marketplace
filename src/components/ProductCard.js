import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../redux/cartSlice';

import "../style/productCard.css"

const ProductCard = ({ product, uniqueId, onOpenCart }) => {
  const [selectedProductSize, setSelectedProductSize] = useState(product.tamanho[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCartClick = (e) => {
    if (e) e.stopPropagation();
    dispatch(addItem({ ...product, quantity: 1, selectedSize: selectedProductSize }));
    onOpenCart();
  };

  const handleNavigateToDetails = () => {
    navigate(`/produto/${product.id}`);
  };

  return (
    <div className="product-card" >
      <div className="upper">
        {product.flags.length > 0 && (
          <div className="flags-container">
            {product.flags.map((flag, index) => (
              <div key={index} className="flag">{flag}</div>
            ))}
          </div>
        )}
        <img src={product.src[0]} alt={product.nome} onClick={handleNavigateToDetails}/>
      </div>
      <div className="bottom">
        <div className="size-selector">
          {product.tamanho.map((size, index) => (
            <div key={index} className="size-option">
              <input
                type="radio"
                id={`size-${uniqueId}-${product.id}-${size}`}
                name={`size-${uniqueId}-${product.id}`}
                value={size}
                checked={selectedProductSize === size}
                onChange={() => setSelectedProductSize(size)}
              />
              <label htmlFor={`size-${uniqueId}-${product.id}-${size}`} className={selectedProductSize === size ? 'selected' : ''}>
                {size}
              </label>
            </div>
          ))}
        </div>

        <div className="product-details">
          <h2 className='product-name'>{product.nome}</h2>
          <div className='price-container'>
            <span className="original-price">R${product.preço_original.toFixed(2)}</span>
            <span className="promotional-price">R${product.preço_promocional.toFixed(2)}</span>
          </div>
          <div className='installments'>
            <p>{product.parcelamento}</p>
            <p className="installments-price">{product.parcelamento_valor}</p>
          </div>

          <button onClick={(e) => { e.stopPropagation(); handleAddToCartClick(e); }}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
