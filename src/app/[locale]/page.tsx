'use client'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import Button from './components/Button'
import HeroSection from './sections/HeroSection'
import { CheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '$15', annually: '$144' },
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    featured: false,
    cta: 'Buy plan',
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '$30', annually: '$288' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    featured: false,
    cta: 'Buy plan',
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: 'Custom',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    featured: true,
    cta: 'Contact sales',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardPage() {
  const [frequency, setFrequency] = useState(frequencies[0])
  
  const t = useTranslations('')
  return (
    <div>
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
      
      <section className='flex flex-col  bg-contain bg-no-repeat bg-white items-center justify-center'>
        <div className="xl:container xl:mx-auto after:content-[url(/bubbles-right.svg)] after:lg:-mt-20 after:pt-8 after:pb-12 after:w-full  after:flex after:justify-end">
          <div className=" flex before:content-[url(/bubbles-left.svg)] relative flex-col md:flex-row items-strech justify-center">
            <div className="md:w-full relative">
                <Image width={493} height={341} src="/team.jpg" alt="A typewriter" role="img" className="absolute inset-0 object-contain w-full h-full hidden lg:block rounded" />
                <Image width={493} height={341} src="/team.jpg" alt="A typewriter" role="img" className="absolute inset-0 object-contain object-center w-full h-full lg:hidden rounded" />
                <Image width={493} height={341} src="/team.jpg" alt="A typewriter" role="img" className="object-cover object-center w-full h-full md:hidden rounded" />
            </div>
            <div className="md:w-full  flex justify-center items-center -mt-10 md:-mt-0 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0">
                <div className="p-8 lg:p-10">
                  <p className="text-2xl text-red-600 font-extrabold leading-none lg:text-3xl lg:leading-tight">
                      About us
                  </p>
                  <p className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-blue-800 mt-6 md:mt-4 lg:mt-8">Here is all you need to know about us</p>
                  <p className="text-base leading-normal text-blue-800 mt-4 lg:mt-6">
                      Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs.
                      <br className="lg:hidden" />
                      <br className="lg:hidden" />
                      At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called.No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className='bg-white'>
        <svg className='max-w-full h-full -mb-2' width="1602" height="368" viewBox="0 0 1602 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M-111 16.1505L-6.48415 24.2257C98.0317 32.3009 307.063 47.8746 517.452 39.7994C726.484 32.3009 935.516 0 1144.55 0C1354.94 0 1563.97 32.3009 1668.48 47.8746L1773 64.0251V184H1668.48C1563.97 184 1354.94 184 1144.55 184C935.516 184 726.484 184 517.452 184C307.063 184 98.0317 184 -6.48415 184H-111V16.1505Z" fill="#254085"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1773 108.15L1668.48 116.226C1563.97 124.301 1354.94 139.875 1144.55 131.799C935.516 124.301 726.484 92 517.452 92C307.063 92 98.0318 124.301 -6.48406 139.875L-111 156.025V276H-6.48406C98.0318 276 307.063 276 517.452 276C726.484 276 935.516 276 1144.55 276C1354.94 276 1563.97 276 1668.48 276H1773V108.15Z" fill="#2F73F7"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M-111 200.15L-6.48416 208.226C98.0317 216.301 307.063 231.875 517.452 223.799C726.484 216.301 935.516 184 1144.55 184C1354.94 184 1563.97 216.301 1668.48 231.875L1773 248.025V368H1668.48C1563.97 368 1354.94 368 1144.55 368C935.516 368 726.484 368 517.452 368C307.063 368 98.0317 368 -6.48416 368H-111V200.15Z" fill="#6197FF"/>
        </svg>
        <div className='bg-[#6197FF]'>
          <div className="py-16 px-10 md:px-52 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className='ring-gray-200 rounded-3xl p-8 ring-1 xl:p-10'
              >
                <h3
                  id={tier.id}
                  className='text-gray-900 text-lg font-semibold leading-8'
                >
                  {tier.name}
                </h3>
                <p className='text-gray-600 mt-4 text-sm leading-6'>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <svg className='max-w-full h-full -mt-2' width="1563" height="368" viewBox="0 0 1563 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1563 351.85L1476.29 343.774C1389.58 335.699 1216.17 320.125 1041.62 328.201C868.208 335.699 694.792 368 521.375 368C346.833 368 173.416 335.699 86.7083 320.125L8.24928e-05 303.975V184H86.7083C173.416 184 346.833 184 521.375 184C694.792 184 868.208 184 1041.62 184C1216.17 184 1389.58 184 1476.29 184H1563V351.85Z" fill="#254085"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 259.85L86.7082 251.774C173.416 243.699 346.833 228.125 521.375 236.201C694.792 243.699 868.208 276 1041.62 276C1216.17 276 1389.58 243.699 1476.29 228.125L1563 211.975V92H1476.29C1389.58 92 1216.17 92 1041.62 92C868.208 92 694.792 92 521.375 92C346.833 92 173.416 92 86.7082 92H0V259.85Z" fill="#2F73F7"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1563 167.85L1476.29 159.774C1389.58 151.699 1216.17 136.125 1041.62 144.201C868.208 151.699 694.792 184 521.375 184C346.833 184 173.416 151.699 86.7082 136.125L-3.05176e-05 119.975V-6.19888e-06H86.7082C173.416 -6.19888e-06 346.833 -6.19888e-06 521.375 -6.19888e-06C694.792 -6.19888e-06 868.208 -6.19888e-06 1041.62 -6.19888e-06C1216.17 -6.19888e-06 1389.58 -6.19888e-06 1476.29 -6.19888e-06H1563V167.85Z" fill="#6197FF"/>
        </svg>

        
      </section>
      <section className='bg-blue-800 h-96 -mt-16'>

      </section>
      

    </div>
  )
}
