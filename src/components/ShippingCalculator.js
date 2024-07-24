// src/components/ShippingCalculator.js
import React, { useState } from 'react';

const ShippingCalculator = () => {
  const [cep, setCep] = useState('');

  const calculateShipping = () => {
    alert('Função não implementada ainda');
  };

  return (
    <div className="shipping-calculator">
      <h2 className="shipping-title">Calcular frete e prazo</h2>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite seu CEP"
      />
      <button onClick={calculateShipping}>Calcular</button>
      <div className="shipping-options">
        <div className="option">
          <div className="text">
            <span className='text-title'>Frete Expresso</span>
            <span className='days'>2 à 6 dias</span>
          </div>
          <div className="shipping-price">
            <span>R$ 19,90</span> 
          </div>
        </div>
        <div className="option">
          <div className="text">
            <span className='text-title'>Normal</span>
            <span className='days'>4 à 15 dias</span>
          </div>
          <div className="shipping-price">
            <span>R$ 12,90</span> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
