"use client"

import {useState, useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";
import {bebas, notoSansThai} from "@/app/font";
import useInViewPort from "@/hooks/useInViewPort";
import useZoomValue from "@/hooks/useZoomValue";
import useScrollPosition from "@/hooks/useScrollPosition";
import useIsScrollUp from "@/hooks/useIsScrollUp";
import Link from "next/link";

const HomeThirdContent = () => {

    const viewPortRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef(null);
    const scrollPosition = useScrollPosition();

    const inViewport = useInViewPort(viewPortRef, { rootMargin: '-10%' });
    const isScrollUp = useIsScrollUp(scrollPosition);
    const zoomValue = useZoomValue(inViewport, scrollPosition, isScrollUp, 1.2, 1.0)


    useEffect(() => {

        if(inViewport){

            anime({
                targets: bgRef.current,
                easing: 'easeOutQuad',
                scale: zoomValue,
                duration: 500,
            })

        }
    }, [zoomValue]);



    return (
        <div ref={viewPortRef} className='w-full h-[80vh] tablet:h-[80vh] s-desktop:h-[80vh] m-desktop:h-[100vh] l-desktop:h-[100vh] shrink-0 bg-black relative overflow-hidden'>

            <img ref={bgRef} className='object-cover h-[100vh] w-full  z-0 opacity-60 scale-110' src='/images/rp-banner.jpg'
                 alt='rp-banner'/>

            <img className='object-cover  h-[60vh] tablet:h-[60vh] s-desktop:h-[70vh] m-desktop:h-[90vh] l-desktop:h-[100vh] absolute -bottom-10 left-0 right-0 m-auto z-10'
                 src='/images/rp-banner-car.png' alt='rp-banner-car'/>

            <div className='w-full h-full absolute inset-0 m-auto z-20 flex items-center justify-center p-20'>
                <div className=' py-4 b px-10 flex flex-col gap-1 justify-center items-center whitespace-nowrap '>
                    <p className={`${bebas.className}  text-white drop-shadow-lg  flex gap-2 text-4xl tablet:text-4xl s-desktop:text-5xl m-desktop:text-6xl l-desktop:text-7xl  `}>GLORIOUS
                        <span className='text-amber-400'>X</span> ROLEPLAY</p>
                    <p className={`${notoSansThai.className}  text-white drop-shadow-lg mt-1 text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>ใกล้เข้าสู่ปีที่ 2 กับ
                        Glorious Roleplay ประเทศมั่นคง สังคมคุณภาพ</p>
                    <p className={`${notoSansThai.className}  text-white drop-shadow-lg text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>กับฐานผู้เล่นมากกว่า 600+
                        เปิดมาแล้ว 1 ปี 8 เดือน</p>
                    <p className={`${notoSansThai.className}  text-white drop-shadow-lg text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>พร้อมระบบต่างๆภายในเมือง
                        ที่เรียกได้ว่าใส่ใจผู้เล่น และจัดเต็มทุกระบบ</p>
                    <p className={`${notoSansThai.className}  text-white drop-shadow-lg text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>พร้อมแล้วหรือยัง
                        มาลองสัมผัสประสบการณ์ใหม่ด้วยตัวคุณเอง</p>

                    <div className='w-full h-20 flex justify-center items-center'>
                        <Link
                            href={'/roleplay'}
                            className={`h-10 w-20 tablet:w-20 s-desktop:w-24 m-desktop:w-28 l-desktop:w-28  border-2 border-white/30 hover:bg-gray-500 hover:bg-opacity-20 flex justify-center items-center text-white text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base ${notoSansThai.className}`}>ดูเพิ่มเติม
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeThirdContent;