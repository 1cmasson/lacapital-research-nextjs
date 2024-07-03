import Image from 'next/image';
import { useBreakpoint } from "../../hooks/use-breakpoint"
import { useEffect } from "react"
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";





const items = [
    {
        link:"tel: +1 305 901-1191",
        text: "(305) 901-1191",
        icon: <FaPhone className='w-6 h-6'/>
    },
    {
        link:"mailto:info@lacapitalmedicalcenter.com",
        text: "info@lacapitalmedicalcenter.com",
        icon: <MdEmail className='w-6 h-6'/>
    },
    {
        link:"https://www.facebook.com/p/La-Capital-Medical-Center-100083738603170/",
        text: "La Capital Medical Center",
        icon: <FaFacebook className='w-6 h-6'/>
    }
]

export const Banner = () => {
    const isDesktop = useBreakpoint("lg");
    useEffect(() => {
        window.dispatchEvent(new Event("resize"));
    }, []);
    
    if(!isDesktop){
        return(
            <div className=" flex bg-red-600 justify-center">
                <div className="align-items inline-block lg:flex = text-center self-center md:flex-no-wrap px-6 py-2.5">
                    <div className="text-white flex justify-center my-1.5">
                        <a className=" hover:text-hover" href="tel: +1 305 901-1191">
                            <FaPhone className='w-8 h-8'/>
                        </a>
                        <span className="text-white mx-12">|</span>
                        <a className=" hover:text-hover" href="https://www.instagram.com/lifeaccordingtotodd/?hl=en">
                            <MdEmail className='w-8 h-8'/>

                        </a>
                        <span className="text-white mx-12">|</span>
                        <a className=" hover:text-hover" href="https://www.youtube.com/channel/UCBb9T0yL77zmLOQMhg9njNw">
                            <FaFacebook className='w-8 h-8'/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-red-600 flex justify-center">
            <ul className="align-items inline-block lg:flex text-center self-center md:flex-no-wrap px-6 py-2.5">
                {items.map((item, idx)=>{
                    return(
                        <li className="text-white flex justify-center  my-1.5" key={idx}>
                            {item?.icon}&nbsp;
                            <a className="text-ellipsis hover:underline hover:text-orange-500" href={item?.link}>
                                {item?.text}
                                {idx !== items.length -1 && (<span className="text-white mx-2">|</span>)}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}