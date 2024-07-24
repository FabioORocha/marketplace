import React from 'react';

import "../style/footer.css"

import footer_logotipo from '../assets/images/footer_logotipo.png';

const Footer = () => (
  <footer className="footer">
    <div className="left">
      <p className='copyright'>&copy; 2022 AGÊNCIA 2B DIGITAL.</p>
      <p className='adress'>Avenida Ibirapuera, 2315 - Moema, São Paulo</p>
      <p className='text'>Loja fictícia desenvolvida para fins de estudos e testes</p>
    </div>
    <div className="right">
      <img src={footer_logotipo} alt="Logo" className="logo-footer" />
    </div>
  </footer>
);

export default Footer;