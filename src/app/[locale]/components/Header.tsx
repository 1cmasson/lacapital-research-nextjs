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





interface Props {
  locale: string,

}
export const Header: FC<Props> = ({ locale }) => {

  const t = useTranslations('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuClasses = classNames('fixed transition-[width]  inset-y-0  right-0 z-1 overflow-y-auto bg-white  sm:max-w-sm sm:ring-1 sm:ring-gray-900/10',{
    'w-3/5 p-6 border-l-4 border-blue-500': mobileMenuOpen,
    'w-0': !mobileMenuOpen
    
  })

  const navigation = [
    { name: t('Home'), href: '#' },
    { name: t('About_Us'), href: '#about' },
    { name: t('Benefits'), href: '#benefits' },
    { name: t('See_If_You_Qualify'), href:'#contact' }
    
    
  ]

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
          <LogoIcon/>          
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold items-center flex text-gray-900">
              {item.name}
            </a>
          ))}
          {/* <ThemeSwitch/> */}
          <LangSwitcher/>
        </div>
      </nav>
      <div className="lg:hidden">
        
          <div className={menuClasses}>
            <div className="mt-20 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold  text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(open => !open )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <LangSwitcher/>
              </div>
            </div>
          </div>
       
      </div>
      
    </header>
    
  )
}
