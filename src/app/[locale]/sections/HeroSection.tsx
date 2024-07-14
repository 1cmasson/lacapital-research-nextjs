import { useTranslations } from "next-intl"


export default function HeroSection() {
  const t = useTranslations("")
  return (
    <>
    <section className="relative  pb-10 overflow-hidden bg-blue-800 bg-no-repeat bg-cover bg-[url(/mobile-hero-background.svg)] lg:bg-[url(/Vector.svg)] object-cover">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex  lg:px-8 lg:py-12">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 z-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {t("Hero")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            {t("Hero_Description")}
          </p>
          <div className="mt-10 z-10 flex items-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t('See_If_You_Qualify')}
            </a>
            <a href="#" className="text-sm font-semibold leading-6 hover:underline hover:text-red-600 text-gray-100">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
    </section>
    <div className='relative z-10 -mt-4 lg:-mt-11'>
      <svg width="1410" className='max-w-full h-full' height="134" viewBox="0 0 1410 134" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 11.7618L78.2205 17.6426C156.441 23.5235 312.882 34.8652 470.339 28.9843C626.78 23.5235 783.22 0 939.661 0C1097.12 0 1253.56 23.5235 1331.78 34.8652L1410 46.627V134H1331.78C1253.56 134 1097.12 134 939.661 134C783.22 134 626.78 134 470.339 134C312.882 134 156.441 134 78.2205 134H0V11.7618Z" fill="#FFFFFF"/>
      </svg>
    </div>
    

    </>
  )
}
