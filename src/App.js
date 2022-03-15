import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Provider
import CartProvider from './Context/CartContext';

// Components
import NavBar from './components/Header/NavBar';

// Views
import Home from './views/Home/Home';
import About from './views/About/About';
import ProductDetail from './views/ProductDetail/ProductDetail';
import Electronics from './views/Electronics/Electronics';
import Jewelry from './views/Jewelry/Jewelry';
import MenClothing from './views/MenClothing/MenClothing';
import WomenClothing from './views/WomenClothing/WomenClothing';
import Cart from './views/Cart/Cart';
import Form from './views/Form/Form';
import ErrorPage from './views/ErrorPage/ErrorPage';

const App = ()=> {
  
    return(
      <CartProvider>
        <Router>
          <div className='App'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/electronics' element={<Electronics />} />
              <Route path='/jewelry' element={<Jewelry />} />
              <Route path="/men's%20clothing" element={<MenClothing />} />
              <Route path="/women's%20clothing" element={<WomenClothing />} />
              <Route path='/About' element={<About />} />
              <Route path='*' element={<ErrorPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/:Category/:id' element={<ProductDetail />} />
              <Route path='/FinishPurchase' element={<Form />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    )

}

export default App;
