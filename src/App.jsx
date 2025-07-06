import React, { useEffect } from 'react'
import ImitationWebsite from './pages/CBImitationWebsite'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
    });
  }, []);
  return (
    <div>
      <ImitationWebsite />
    </div>
  )
}
