'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC, useEffect } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { Banner } from './Banner'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Hamburger from 'hamburger-react'

const navigation = [
  { name: 'Home', href: '#contact' },
  { name: 'About Us', href: 'https://google.com' },
  { name: 'Laboratory', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'See If You Qualify', href: '#' },
  
]

interface Props {
  locale: string,

}
export const Header: FC<Props> = ({ locale }) => {

  const t = useTranslations('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuClasses = classNames('fixed transition-[width] inset-y-0  right-0 z-1 overflow-y-auto bg-white  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10',{
    'w-full p-6': mobileMenuOpen,
    'w-0': !mobileMenuOpen
    
  })

  useEffect(() => {
    if(mobileMenuOpen){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'scroll'
    }
      
  },[mobileMenuOpen])

  return (
    <header className='bg-white mt-0'>
      <Banner/>
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8" aria-label="Global">
        <a href="#" className=" p-1.5">
          <span className="sr-only">Your Company</span>
          <div className='relative z-10'>
            <LogoIcon/>
          </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m2.5 z-10 inline-flex items-center justify-center rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(open => !open )}
          >
            <span className="sr-only">Open main menu</span>
            <Hamburger direction="left" size={24}/>
          </button>
        </div>
        <div className="hidden lg:flex pt-10 lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <div className="lg:hidden">
        
          <div className={menuClasses}>
            <div className="mt-40 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(open => !open )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
       
      </div>
      
    </header>
    
  )
}

     {/* <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'> */}
       {/* <Link lang={locale} href='/'> */}
         {/* <div className='flex flex-row items-center'> */}
           {/* <div className='mb-2 h-14 w-14'> */}
             {/* <LogoIcon /> */}
           {/* </div> */}
           {/* <strong className='mx-2 select-none'>Template</strong> */}
         {/* </div> */}
       {/* </Link> */}
       {/* <div className='flex flex-row items-center gap-3'> */}
         {/* <nav className='mr-10 inline-flex gap-5'> */}
           {/* <Link lang={locale} href={`/about`}> */}
             {/* {t('About')} */}
           {/* </Link> */}
           {/* <a href=''>{t('Support')}</a> */}
           {/* <a href=''>{t('Other')}</a> */}
         {/* </nav> */}
         {/* <ThemeSwitch /> */}
         {/* <LangSwitcher /> */}
         {/* <a */}
            {/* href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
         > */}
           {/* <div className='size-8'> */}
             {/* <GithubIcon /> */}
           {/* </div> */}
         {/* </a> */}
       {/* </div> */}
     {/* </div> */}
