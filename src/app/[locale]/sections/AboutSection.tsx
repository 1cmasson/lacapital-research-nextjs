import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
    const t = useTranslations("")
    return (
        <section id="about" className='flex flex-col  bg-contain bg-no-repeat bg-white items-center justify-center'>
            <div className="xl:container xl:mx-auto after:content-[url(/bubbles-right.svg)] after:lg:-mt-20 after:pt-8 after:pb-12 after:w-full  after:flex after:justify-end">
                <div className=" flex before:content-[url(/bubbles-left.svg)] relative flex-col md:flex-row items-strech justify-center">
                    <div className="md:w-full relative">
                        <Image width={893} height={641} src="/desktop-team.png" alt="The team at La Capital Research Center" role="img" className="absolute inset-0 object-contain w-full h-full hidden lg:block " />
                        <Image width={493} height={341} src="/mobile-team.png" alt="The team at La Capital Research Center" role="img" className="absolute inset-0 object-contain object-center w-full h-full lg:hidden" />
                    </div>
                    <div className="md:w-full  flex justify-center items-center -mt-10 md:-mt-0 md:py-24 lg:py-36 relative z-10 mx-4 md:mx-0">
                        <div className="p-8 lg:p-10">
                        <p className="text-2xl text-red-500 font-extrabold leading-none lg:text-3xl lg:leading-tight">
                            {t('About_Us')}
                        </p>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-semibold lg:font-bold md:leading-10 text-blue-800 mt-6 md:mt-4 lg:mt-8">{t('About_Subtitle')}</p>
                        <p className="text-base leading-normal text-blue-800 mt-4 lg:mt-6">
                            {t("About_Description1")}
                            <br/>
                            <br/>
                            {t("About_Description2")}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
      </section>
    );
}
