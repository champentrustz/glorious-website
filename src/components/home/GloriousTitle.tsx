'use client'

import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";
import {bebas} from "@/app/font";
import FooterSocial from "@/components/layout/FooterSocial";


const GloriousTitle = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        anime({
            targets: mainRef.current,
            easing: 'easeInQuad',
            opacity: [0, 1],
        })
    },[])

    return (
        <div
            ref={mainRef}
            className='w-full h-full tablet:h-full s-desktop:h-4/6 m-desktop:h-4/6 l-desktop:h-4/6 flex flex-col gap-4 justify-center items-center absolute bottom-0 '>

            <div
                className={` ${bebas.className} text-4xl tablet:text-5xl s-desktop:text-7xl m-desktop:text-7xl l-desktop:text-7xl text-white p-4 text-shadow-md z-10 whitespace-nowrap`}>GLORIOUS
                STUDIO <span
                    className='text-amber-400'>X</span> FIVEM
            </div>
            <p className='text-white text-shadow-md text-sm tablet:text-lg s-desktop:text-lg m-desktop:text-lg l-desktop:text-xl z-10'>EMBRACE
                THE <span
                    className='text-amber-400'>GLORIOUS</span> THAT YOU ARE</p>

            <div className='w-full h-20 flex justify-center items-center z-10'>
                <FooterSocial footer={false}/>
            </div>


        </div>
    );
};

export default GloriousTitle;