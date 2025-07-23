
import React from 'react'
import HeroSection from './HeroSection'
import Header from '../../Common Components/Header'
import SectionSection from './SectionSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import Collection from './Collection'
import Footer from '../../Common Components/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FourthSection />
      <SectionSection />
      <ThirdSection />
      <Collection />
      <Footer/>
    </div>
  )
}
