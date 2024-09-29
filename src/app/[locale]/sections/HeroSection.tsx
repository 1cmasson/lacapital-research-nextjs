import { useTranslations } from "next-intl"

export default function HeroSection() {
  const t = useTranslations("")
  return (
    <section className="container p-0">
      <div className="relative pb-10 overflow-hidden bg-blue-800 bg-no-repeat bg-cover bg-[url(/mobile-hero-background.webp)] lg:bg-[url(/desktop-hero-background.webp)] object-cover">
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
                className="rounded-md bg-red-600 shadow-md px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-none"
              >
                {t('See_If_You_Qualify')}
              </a>
              <a href="#benefits" className="text-sm font-semibold leading-6 hover:underline hover:text-red-600 text-gray-100">
                {`${t("Learn_more")}`} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='relative z-10 -mt-4 lg:-mt-11'>
        {/* <svg width="1410" className='max-w-full h-full' height="134" viewBox="0 0 1410 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 11.7618L78.2205 17.6426C156.441 23.5235 312.882 34.8652 470.339 28.9843C626.78 23.5235 783.22 0 939.661 0C1097.12 0 1253.56 23.5235 1331.78 34.8652L1410 46.627V134H1331.78C1253.56 134 1097.12 134 939.661 134C783.22 134 626.78 134 470.339 134C312.882 134 156.441 134 78.2205 134H0V11.7618Z" fill="#FFFFFF"/>
        </svg> */}
        {/* <svg width="1896" className='max-w-full h-full m-0' height="196" viewBox="0 0 1896 196" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1890 18.1505L1785.48 26.2257C1680.97 34.3009 1471.94 49.8746 1261.55 41.7994C1052.52 34.3009 843.484 2 634.453 2C424.063 2 215.032 34.3009 110.516 49.8746L6 66.0251V186H110.516C215.032 186 424.063 186 634.453 186C843.484 186 1052.52 186 1261.55 186C1471.94 186 1680.97 186 1785.48 186H1890V18.1505Z" fill="white"/>
        </svg>   */}
        <svg width="1884" height="184" className='max-w-full h-full' viewBox="0 0 1884 184" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1884 16.1505L1779.48 24.2257C1674.97 32.3009 1465.94 47.8746 1255.55 39.7994C1046.52 32.3009 837.484 0 628.453 0C418.063 0 209.032 32.3009 104.516 47.8746L0 64.0251V184H104.516C209.032 184 418.063 184 628.453 184C837.484 184 1046.52 184 1255.55 184C1465.94 184 1674.97 184 1779.48 184H1884V16.1505Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}