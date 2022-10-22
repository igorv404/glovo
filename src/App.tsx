import React from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './layouts/header/Header';
import HomePage from './pages/home/HomePage';
import Categories from './pages/categories/Categories';
import Catalog from './pages/catalog/Catalog';
import ProductPage from './pages/productPage/ProductPage';
import Footer from './layouts/footer/Footer';

function App() {
  AOS.init({duration: 1000});
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/catalog/:store" element={<Catalog/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
