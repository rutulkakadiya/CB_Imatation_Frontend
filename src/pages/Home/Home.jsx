
import React from 'react'
import HeroSection from './HeroSection'
import Header from '../../Common Components/Header'
import FourthSection from './FourthSection'
import Collection from './NewArrivals'
import Footer from '../../Common Components/Footer'
import Whatsapp from '../../Common Components/WhatsApp'
import ScrollToTop2 from '../../Common Components/ScrollToTop2'
import BulkOrder from './BulkOrder'
import JewelleryStories from '../../components/JewelleryStories'
import Category from './Category'
import BestSellerSection from './BestSeller'
import LatestCollection from './LatestCollection'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      {/* <ScrollToTop2 /> */}
      {/* <Whatsapp /> */}
      <Header />

      <div className="bg-[#faf8ec] block md:hidden">
        <JewelleryStories />
      </div>

      <HeroSection />
      <BestSellerSection />
      <LatestCollection />
      <FourthSection />
      <Category />
      <Collection />
      <BulkOrder />
      <Footer />
    </div>
  )
}
