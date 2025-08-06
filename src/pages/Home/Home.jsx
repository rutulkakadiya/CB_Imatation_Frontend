
import React from 'react'
import HeroSection from './HeroSection'
import Header from '../../Common Components/Header'
import SectionSection from './SectionSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import Collection from './Collection'
import Footer from '../../Common Components/Footer'
import Whatsapp from '../../Common Components/WhatsApp'
import ScrollToTop2 from '../../Common Components/ScrollToTop2'
import BulkOrder from './BulkOrder'

export default function Home() {
  return (
    <div>
      <ScrollToTop2 />
      <Whatsapp />
      <Header />
      <HeroSection />
      <FourthSection />
      <SectionSection />
      <ThirdSection />
      <Collection />
      <BulkOrder />
      <Footer />
    </div>
  )
}
