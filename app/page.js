import Image from 'next/image'
import HeroPage from './components/HeroPage'
import SearchPage from './components/SearchPage'
import ServingSection from  './components/ServingSection'
import ServicesSection from  './components/ServicesSection'
import About from  './components/About'
import WhySection from  './components/WhySection'
import ExpertsSection from "./components/ExpertsSection"
import Comparison from './components/Comparison'
import FeaturedArticles from './components/FeaturedArticles'
import WaitingSection from './components/WaitingSection'
import InformationalVideos from './components/InformationalVideos'
import WhatTheySay from './components/WhatTheySay'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="">
        <HeroPage />
        <div className='p-1 md:px-8'>
        <SearchPage/> 
        <ServingSection />
        <ServicesSection />
        <About />
        <WhySection />
        <ExpertsSection />
        <Comparison />
        <FeaturedArticles />
        </div>
        <WaitingSection />
        <InformationalVideos />
        <WhatTheySay />
        <Footer />
    </main>
  ) 
}
