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
      <HeroSection/>
      <AboutSection/>
      <BenefitsSection/>
      <ContactSection/>
    </>
  )
}
