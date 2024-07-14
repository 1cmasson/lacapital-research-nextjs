import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

export const ContactSection = () => {
    const t = useTranslations("")
    return (
      <section  className="relative overflow-hidden bg-blue-900 -mt-14 z-10  px-4 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto  max-w-xl lg:max-w-4xl">
          <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
            <div className="flex flex-col">
            <h2 id="contact" className="text-4xl font-bold tracking-tight text-gray-100">{t("Apply_With_Us")}</h2>
            <p className="mt-2 mb-8 text-lg leading-8 text-gray-100">
              {t("Apply_With_Us_Description")}
            </p>
            <form action="#" method="POST" className="lg:flex-auto">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-100">
                    {t("First_Name")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-100">                    
                    {t("Last_Name")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-100">
                  {t("Phone")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="phonenumber"
                      className="block w-full ring-1 shadow-sm outline-none ring-inset rounded-md border-0 px-3.5 py-2 text-gray-800  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-100">
                  {t("Email")}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
            
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  {t("See_If_You_Qualify")}
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-200">
                  {t("Privacy_Policy_Agreement")}
                <a href="#" className="font-semibold hover:underline hover:text-white text-red-600">
                  {t("Privacy_Policy")}
                </a>
                .
              </p>
            </form>
            </div>
            
            <div className="lg:w-80 lg:flex-none  before:overflow-hidden before:top-0 before:opacity-40 before:content-[url(/logo-background.svg)] before:absolute before:-z-10">
            <iframe title="Google Maps location of Double R Vending"className="rounded-3xl w-full mb-9 h-48 shadow border-0 block" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.0744067802875!2d-80.27352138972971!3d25.86702837719114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b07a03325fa3%3A0x71244bb070790547!2s590%20E%2049th%20St%2C%20Hialeah%2C%20FL%2033013!5e0!3m2!1sen!2sus!4v1720990886002!5m2!1sen!2sus" width="300" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <dl className="mt-10 space-y-4 text-base leading-7 text-white">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  590 East 49th Street
                  <br />
                  Hialeah, FL 33013
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-300" href="tel:+1 (786) 254-7666">
                  (786) 254-7666
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-white" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-300" href="mailto:info@lacapitalmedicalcenter.com">
                    info@lacapitalmedicalcenter.com
                  </a>
                </dd>
              </div>
            </dl>
              {/* <figure className="mt-10">
                <blockquote className="text-lg font-semibold leading-8 text-gray-100">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote>
                <figcaption className="mt-10 flex gap-x-6">
                  <Image
                    height={500} 
                    width={500}
                    src="/profile.png"
                    alt=""
                    className="h-28 w-28 flex-none rounded-full bg-gray-50"
                  />
                  <div className="flex flex-col justify-center">
                    <div className="text-base font-semibold text-gray-200">Ruben & Isis Masson</div>
                    <div className="text-sm leading-6 text-gray-200">Owners of</div>
                    <WhiteLogoIcon className="h-20 w-48"/>
                  </div>
                </figcaption>
              </figure> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
  