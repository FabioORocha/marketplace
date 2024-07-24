import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductCarousel from './components/ProductCarousel';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css';
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Header onCartClick={() => setIsCartOpen(true)}/>
          <Routes>
            <Route path="/" element={
              <div className="home">
                <Banner />
                <ProductCarousel title="Lançamentos" uniqueId="launches" onOpenCart={handleOpenCart} />
                <ProductCarousel title="Os mais vendidos" uniqueId="best-sellers" onOpenCart={handleOpenCart} />
                <Categories />
                <ProductCarousel title="Ofertas imperdiveis" uniqueId="best-deals" onOpenCart={handleOpenCart} />
              </div>
            } />
            <Route path="/produto/:id" element={<ProductDetails onOpenCart={handleOpenCart} />} />
          </Routes>
        <Footer />
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </Router>
    </Provider>
  );
};

export default App;
