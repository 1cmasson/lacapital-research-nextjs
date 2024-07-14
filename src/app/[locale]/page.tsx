'use client'
import { useTranslations } from 'next-intl'
import HeroSection from './sections/HeroSection'
import { ContactSection } from './sections/ContactSection'
import AboutSection from './sections/AboutSection'
import BenefitsSection from './sections/BenefitsSection'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardPage() {
  
  const t = useTranslations('')
  return (
    <>
      {/* <video 
          className='h-full w-full object-cover fixed top-0 -z-10' 
          id="background-video" 
          autoPlay
          loop 
          muted 
        >
          <source src="/research-lab.mp4" type="video/mp4"/>
        </video> */}
      
      <HeroSection/>
      
      <AboutSection/>
      <BenefitsSection/>
      <ContactSection/>
      

    </>
  )
}
