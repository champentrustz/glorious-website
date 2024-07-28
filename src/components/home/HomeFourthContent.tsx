"use client"

import {useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";
import {bebas, notoSansThai} from "@/app/font";
import useInViewPort from "@/hooks/useInViewPort";
import useIsScrollUp from "@/hooks/useIsScrollUp";
import useZoomValue from "@/hooks/useZoomValue";
import useScrollPosition from "@/hooks/useScrollPosition";

const HomeFourthContent = () => {

    const viewPortRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLImageElement>(null);
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
        <>

            <div ref={viewPortRef} className='w-full h-[80vh] tablet:h-[80vh] s-desktop:h-[80vh] m-desktop:h-[100vh] l-desktop:h-[100vh] shrink-0 bg-black relative overflow-hidden'>

                <img  className='object-cover h-[100vh] w-full z-0 opacity-60' src='/images/training-banner.png'
                     alt='rp-banner'/>

                <img  ref={bgRef} className='object-cover w-full absolute -bottom-10 left-0 right-0 m-auto z-10'
                     src='/images/training-banner-c.png' alt='rp-banner-car'/>


                <div className='w-full h-full absolute inset-0 m-auto z-20 flex items-center justify-center p-20'>
                    <div
                        className=' py-4 px-10 flex flex-col gap-1 justify-center items-center whitespace-nowrap'>
                        <p className={`${bebas.className} text-4xl tablet:text-4xl s-desktop:text-5xl m-desktop:text-6xl l-desktop:text-7xl text-white drop-shadow-lg  flex gap-2 `}>GLORIOUS
                            <span className='text-amber-400'>X</span> TRAINING</p>
                        <p className={`${notoSansThai.className}  text-white drop-shadow-lg mt-1 text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>2 ปีกว่าแล้ว กับ
                            Training เก่าแก่ของ FiveM</p>
                        <p className={`${notoSansThai.className}  text-white drop-shadow-lg text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>เรานำเสนอเมืองในรูปแบบของ
                            Community ควบคู่กับการซ้อมไปด้วยกัน</p>
                        <p className={`${notoSansThai.className}  text-white drop-shadow-lg text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>ระบบต่างๆภายในเมืองที่มีครบครัน
                            ไม่ว่าจะเป็นทั้งการซ้อม</p>
                        <p className={`${notoSansThai.className}  text-white drop-shadow-lg text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base`}>รวมไปถึงการส่งเสริม
                            Community ภายในเมือง</p>

                        <div className='w-full h-20 flex justify-center items-center'>
                            <button
                                className={`h-10 w-20 tablet:w-20 s-desktop:w-24 m-desktop:w-28 l-desktop:w-28  border-2 border-white/30 hover:bg-gray-500 hover:bg-opacity-20 flex justify-center items-center text-white text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base ${notoSansThai.className}`}>ดูเพิ่มเติม
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeFourthContent;