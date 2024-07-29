"use client"

import {bebas} from "@/app/font";
import SystemShowCaseList from "@/components/home/SystemShowCaseList";
import SystemShowCase from "@/components/home/SystemShowCase";
import {ReactElement, useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";
import useInViewPort from "@/hooks/useInViewPort";


const HomeFifthContent = () => {

    const [showCase, setShowCase] = useState<string>('');
    const [shouldRenderSystemList, setShouldRenderSystemList] = useState(false)
    const viewportRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const inViewport = useInViewPort(viewportRef, { rootMargin: '-30%' });



    const animateMap = (minScale: number, maxScale: number, callbackFunc: Function) =>{
        anime({
            targets: bgRef.current,
            easing: 'easeInQuad',
            scale: [minScale, maxScale],
            duration: 500,
            complete: callbackFunc()
        })
    }


    useEffect(() => {

        setShouldAnimate(inViewport)

    }, [inViewport]);

    useEffect(() => {

        if(shouldAnimate){
            animateMap(0.5, 1, () => {
                setShouldRenderSystemList(true)
            })
        }else{
            animateMap(1.0, 0.5, () => {
                setShouldRenderSystemList(false)
            })
        }

    }, [shouldAnimate]);


    return (
        <div
            ref={viewportRef}
            className='w-full h-[60vh] tablet:h-[70vh] s-desktop:h-[100vh] m-desktop:h-[100vh] l-desktop:h-[100vh] shrink-0 relative overflow-hidden flex flex-col items-end gap-2 p-2 tablet:p-2 s-desktop:p-4 m-desktop:p-10 l-desktop:p-10'>

            <img
                className={'w-1/5 tablet:w-1/5 s-desktop:w-1/6 m-desktop:w-1/6 l-desktop:w-1/6 object-cover absolute right-0 bottom-0 drop-shadow z-50'}
                src={'/images/admins/admin-nook-back.png'} alt=''/>

            <p className={`${bebas.className} text-5xl tablet:text-5xl absolute top-0 right-4 s-desktop:text-5xl m-desktop:text-8xl l-desktop:text-8xl text-neutral-700 opacity-30`}>SYSTEM
                SHOWCASE</p>

            <div
                className='w-full pt-10 h-full flex justify-center tablet:justify-center s-desktop:justify-end m-desktop:justify-end l-desktop:justify-end items-center z-10 relative'>
                <div
                    className='z-50 hidden tablet:hidden s-desktop:flex m-desktop:flex l-desktop:flex  s-desktop:w-3/12 m-desktop:w-3/12 l-desktop:w-1/6  h-full justify-center items-center absolute left-0 p-2'>
                    <div className='w-full h-full'>
                        <SystemShowCase showCase={showCase}/>
                    </div>

                </div>
                <div className='w-full tablet:w-full s-desktop:w-9/12 m-desktop:w-9/12 l-desktop:w-9/12 h-full '>

                    <div ref={bgRef} className='h-full w-full relative flex justify-center items-center'>

                        <SystemShowCaseList setShowCase={setShowCase} showCase={showCase}
                                            shouldRenderSystemList={shouldRenderSystemList}/>
                        <img
                            className='h-3/5 tablet:h-3/5 s-desktop:h-3/5 m-desktop:h-4/5 l-desktop:h-5/6 object-cover drop-shadow z-0'
                            src='/images/map-gtav-main.png'
                        />
                    </div>

                </div>
            </div>



        </div>
    );
};

export default HomeFifthContent;