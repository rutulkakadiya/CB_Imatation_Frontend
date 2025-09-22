import React, { useEffect } from 'react'
import ImitationWebsite from './pages/Home/Home'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import ScrollToTop from './Common Components/ScrollToTop';
import DetailedProduct from './Common Components/DetailedProduct';
import HomePage from 'c:/Users/rutul/Downloads/cb_imitation_redesign';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // animation duration in ms
    });
  }, []);
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/redesign' element={<HomePage/>}></Route>
        <Route path="/" element={<ImitationWebsite />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/detailedProduct" element={<DetailedProduct/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
