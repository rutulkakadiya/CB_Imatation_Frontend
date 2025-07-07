import React, { useEffect } from 'react'
import ImitationWebsite from './pages/CBImitationWebsite'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImitationWebsite />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
