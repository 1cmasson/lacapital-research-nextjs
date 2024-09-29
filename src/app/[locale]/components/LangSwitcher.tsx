'use client'
import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import Button from './Button'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const LangSwitcher: React.FC = () => {
  const t = useTranslations('')
  interface Option {
    country: string
    code: string
    icon:string
    flag:string
  }
  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
  const pathname = usePathname()
  const urlSegments = useSelectedLayoutSegments()
  
  const options: Option[] = [
    { country: 'English', code: 'en' , icon:'/us.png', flag:'US'}, // Native name is the same
    { country: 'Español', code: 'es', icon:'/es.png', flag:'Spanish' }
  ]

  return (
    <div className='flex items-center md:justify-center justify-start'>
      <div className='relative w-28'>
        <Button
          className='inline-flex text-white bg-blue-800 hover:bg-red-500 w-full items-center justify-between gap-3'
          size='small'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          {`${t('Language')}`}
          <FiGlobe />
        </Button>
        {isOptionsExpanded && (
          <div className='absolute z-10 right-0 mt-2 w-full origin-top-right rounded-md bg-white border-2 border-solid border-blue-800 shadow-lg'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {options.map(lang => {
                return (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={e => {
                        e.preventDefault()
                      }}
                      className={` w-full py-2 flex px-2 text-left text-sm hover:bg-red-500 ${
                        pathname === `/${lang.code}`
                          ? 'text-white bg-blue-800  '
                          : 'text-blue-800 hover:text-white '
                      }`}
                    >
                      
                        <div className='grow'>{capitalize(lang.country)}</div>
                        <Image className="h-5 w-8" alt={`${lang.flag} flag`} height={50} width={400} src={lang.icon}/>
                      
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LangSwitcher