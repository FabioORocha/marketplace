import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

import "../style/cart.css"

import trash from '../assets/images/trash.png';

const Cart = ({ isOpen, onClose }) => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.preço_promocional * item.quantity, 0);

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className="inner">
        <div className="cart-header">
          <h2 className='cart-title'>Meu Carrinho</h2>
          <button className='close' onClick={onClose}>X</button>
        </div>
        <div className={`cart-items ${cartItems.length === 0 ? 'empty-items' : ''}`}>

          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p className="empty-title">Sua sacola está vazia!</p>
              <p className='empty-text'>Continue navegando em nossa loja para descobrir promoções e os melhores produtos!</p>
              <button onClick={onClose}>Continuar comprando</button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img  className="cart-image"src={item.src[0]} alt={item.nome} />
                <div className='cart-details'>
                  <h2 className='item-name'>{item.nome}</h2>
                  <p className='size'>Tamanho: {item.selectedSize}</p>
                  <div className="bottom-wrapper">
                    <div className='wrapper-qtd'>
                      <button className='plus' onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                      <span className='qtd'>{item.quantity}</span>
                      <button className='minus' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className='price-wrapper'>
                      <span className="original-price">R${item.preço_original}</span>
                      <span className="promotional-price">R${item.preço_promocional}</span>
                    </p>
                  </div>
                  <button className='trash' onClick={() => handleRemove(item.id)}><img src={trash} alt="remover" className="trash" /></button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className='wrapper-total'>
              <span className='sub'>Subtotal: </span><span className='total'>R${subtotal.toFixed(2)}</span>
            </div>
            <button onClick={() => { onClose(); alert('Obrigado por comprar conosco, Isso é apenas uma demostração!'); }}>Finalizar a compra</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;