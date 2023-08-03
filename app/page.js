import Image from 'next/image'
import HeroPage from './components/HeroPage'
import SearchPage from './components/SearchPage'
import ServingSection from  './components/ServingSection'
import ServicesSection from  './components/ServicesSection'
import About from  './components/About'
import WhySection from  './components/WhySection'
import ExpertsSection from "./components/ExpertsSection"
import FeaturedArticles from "./components/FeaturedArticles"
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
        <FeaturedArticles />
        </div>
    </main>
  )
}
