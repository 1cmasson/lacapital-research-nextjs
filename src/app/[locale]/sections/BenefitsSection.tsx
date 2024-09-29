import { useTranslations } from "next-intl";
import React from "react";

const benefits = [
    {
      name: 'Compensation',
      description: 'Compensation_Description',
    },
    {
      name: 'Focused_Healthcare',
      description: 'Focused_Healthcare_Description',
    },
    {
      name: 'Access_To_Cutting_Edge_Treatments',
      description: 'Access_To_Cutting_Edge_Treatments_Description',
    },
  ]
export default function AboutSection() {
    const t = useTranslations("")
    return (
      <section className='bg-white container p-0 -mt-2'>
        <svg className='max-w-full h-full -mb-2' width="1602" height="368" viewBox="0 0 1602 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M-111 16.1505L-6.48415 24.2257C98.0317 32.3009 307.063 47.8746 517.452 39.7994C726.484 32.3009 935.516 0 1144.55 0C1354.94 0 1563.97 32.3009 1668.48 47.8746L1773 64.0251V184H1668.48C1563.97 184 1354.94 184 1144.55 184C935.516 184 726.484 184 517.452 184C307.063 184 98.0317 184 -6.48415 184H-111V16.1505Z" fill="#254085"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1773 108.15L1668.48 116.226C1563.97 124.301 1354.94 139.875 1144.55 131.799C935.516 124.301 726.484 92 517.452 92C307.063 92 98.0318 124.301 -6.48406 139.875L-111 156.025V276H-6.48406C98.0318 276 307.063 276 517.452 276C726.484 276 935.516 276 1144.55 276C1354.94 276 1563.97 276 1668.48 276H1773V108.15Z" fill="#2F73F7"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M-111 200.15L-6.48416 208.226C98.0317 216.301 307.063 231.875 517.452 223.799C726.484 216.301 935.516 184 1144.55 184C1354.94 184 1563.97 216.301 1668.48 231.875L1773 248.025V368H1668.48C1563.97 368 1354.94 368 1144.55 368C935.516 368 726.484 368 517.452 368C307.063 368 98.0317 368 -6.48416 368H-111V200.15Z" fill="#6197FF"/>
        </svg>
        <div className='bg-[#6197FF]'>
          <h2 id="benefits" className='pt-8 text-5xl font-bold text-gray-100 w-full flex justify-center'>{t('Benefits')}</h2>
          <div className="py-16 px-10 md:px-52 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.name}
                className='ring-gray-200 bg-gray-100 shadow-lg rounded-3xl p-8 ring-1 xl:p-10'
              >
                <h3
                  className='text-blue-700 text-lg font-semibold leading-8'
                >
                  {`${t(benefit.name)}`}
                </h3>
                <p className='text-gray-600 mt-4 text-sm leading-6'>
                {`${t(benefit.description)}`}            
                </p>
              </div>
            ))}
          </div>
        </div>
        <svg className='max-w-full relative z-20 h-full -mt-2' width="1563" height="368" viewBox="0 0 1563 368" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M1563 351.85L1476.29 343.774C1389.58 335.699 1216.17 320.125 1041.62 328.201C868.208 335.699 694.792 368 521.375 368C346.833 368 173.416 335.699 86.7083 320.125L8.24928e-05 303.975V184H86.7083C173.416 184 346.833 184 521.375 184C694.792 184 868.208 184 1041.62 184C1216.17 184 1389.58 184 1476.29 184H1563V351.85Z" fill="#254085"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M0 259.85L86.7082 251.774C173.416 243.699 346.833 228.125 521.375 236.201C694.792 243.699 868.208 276 1041.62 276C1216.17 276 1389.58 243.699 1476.29 228.125L1563 211.975V92H1476.29C1389.58 92 1216.17 92 1041.62 92C868.208 92 694.792 92 521.375 92C346.833 92 173.416 92 86.7082 92H0V259.85Z" fill="#2F73F7"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M1563 167.85L1476.29 159.774C1389.58 151.699 1216.17 136.125 1041.62 144.201C868.208 151.699 694.792 184 521.375 184C346.833 184 173.416 151.699 86.7082 136.125L-3.05176e-05 119.975V-6.19888e-06H86.7082C173.416 -6.19888e-06 346.833 -6.19888e-06 521.375 -6.19888e-06C694.792 -6.19888e-06 868.208 -6.19888e-06 1041.62 -6.19888e-06C1216.17 -6.19888e-06 1389.58 -6.19888e-06 1476.29 -6.19888e-06H1563V167.85Z" fill="#6197FF"/>
        </svg>
      </section>
    );
}
