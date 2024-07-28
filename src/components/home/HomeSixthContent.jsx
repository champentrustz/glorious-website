"use client"

import {azonix, bebas, notoSansThai, roboto, robotoBold, spaceArmor, spaceMonkey} from "@/app/font";
import {useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";
import CharacterCard from "@/components/home/CharacterCard";
import AdminBackgroundAnimate from "@/components/home/AdminBackgroundAnimate";
import AdminImageShowCase from "@/components/home/AdminImageShowCase";
import {adminList} from "@/data/adminList";
import {splitName} from "@/modules/splitName";
import useInViewPort from "@/hooks/useInViewPort";


const HomeSixthContent = () => {

    const mainCharacterRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(4);
    const adminNameRef = useRef([])
    const positionRef = useRef(null)
    const viewportRef = useRef(null)
    const characterCardRef = useRef([])
    const inViewport = useInViewPort(viewportRef, { rootMargin: '-30%' });
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const leftNameRef = useRef(null)

    const animateAdminPic = () =>{
        anime({
            targets: mainCharacterRef.current,
            easing: "easeInQuad",
            opacity: [0, 1],
            duration: 1000,
        })
    }

    const animateLeftName = () =>{
        anime({
            targets: leftNameRef.current,
            easing: "easeInQuad",
            opacity: [0, 1],
            duration: 1000,
            delay: 1000
        })
    }

    const animateAdminPosition = () =>{
        anime({
            targets: positionRef.current,
            easing: "easeInQuad",
            opacity: [0, 1],
            duration: 1000,
            delay: 1500,
        })
    }



    const animateAdminNameText = () =>{
        const adminRefFilter = adminNameRef.current.filter((e) => e !== null)

        anime({
            targets: adminRefFilter,
            scale: [3,1],
            opacity: [0, 1],
            delay: function (element, index) {
                return index * 90
            },
        })

    }

    const animateThisPage = () =>{
        animateAdminPic()
        animateAdminNameText()
        animateAdminPosition()
        animateLeftName()
    }

    const cleanUp = () =>{
        const adminRefFilter = adminNameRef.current.filter((e) => e !== null)
        anime.remove(adminRefFilter)
        anime.remove(mainCharacterRef.current)
        anime.remove(positionRef.current)
        anime.remove(leftNameRef.current)
    }

    useEffect(() => {
        setShouldAnimate(inViewport)
    }, [inViewport]);


    useEffect(() => {

        if(shouldAnimate){
            animateThisPage()
        }

        return () =>{
            cleanUp()
        }
    }, [shouldAnimate]);


    useEffect(() => {

        animateThisPage()

    },[currentIndex])



    return (
        <div
            ref={viewportRef}
            className='w-full bg-black h-[60vh] tablet:h-[70vh] s-desktop:h-[80vh] m-desktop:h-[100vh] l-desktop:h-[90vh] shrink-0 overflow-hidden flex justify-center items-center relative'>
            <video className='absolute opacity-80 inset-0 m-auto h-full w-full object-cover z-10' autoPlay loop
                   muted>
                <source src="/videos/ember-spark.mp4" type="video/mp4"/>
            </video>

            <AdminImageShowCase mainCharacterRef={mainCharacterRef} currentIndex={currentIndex} />

            <div className={'w-0 tablet:w-0 s-desktop:w-72 m-desktop:w-80 l-desktop:w-96 shrink-0 h-full z-20 bg-white relative overflow-hidden'}>
                {/*<div className={'trapezoid'}>*/}

                {/*</div>*/}
                <img className={'h-full object-cover absolute inset-0 m-auto opacity-10'}
                     src={'/images/abstract-bg.jpg'}/>

                <div
                    ref={leftNameRef}
                    className={`${spaceArmor.className} opacity-0 w-full h-full py-8 px-4 -rotate-180 hidden tablet:hidden s-desktop:text-2xl m-desktop:text-3xl l-desktop:text-3xl s-desktop:flex m-desktop:flex l-desktop:flex text-neutral-900 whitespace-nowrap justify-end items-start gap-1`}
                    style={{writingMode: 'vertical-rl', textOrientation: 'mixed'}}>
                    {adminList[currentIndex].label.split(' ')[0]}
                </div>

            </div>



            <div className={'w-full h-full flex justify-center items-center relative'}>

                <AdminBackgroundAnimate/>


                <div className={'w-full h-full flex justify-center items-center flex-col gap-6 relative p-2'}>

                    <div
                        className={` py-2 absolute top-6 left-6 flex items-center ${spaceArmor.className} text-xl tablet:text-2xl s-desktop:text-2xl m-desktop:text-3xl l-desktop:text-4xl z-30 px-4 text-white border-l-8 border-amber-400`}>GLORIOUS
                        TEAM
                    </div>


                    <div className={'flex'}>
                        {
                            adminList[currentIndex] && splitName(adminList[currentIndex].label).map((e, index) => (
                                <div
                                    className={` z-50 drop-shadow text-2xl tablet:text-3xl s-desktop:text-5xl m-desktop:text-6xl l-desktop:text-7xl ${spaceMonkey.className} text-amber-400 z-10 `}
                                    ref={(element) => adminNameRef.current[index] = element}
                                    key={`admin-showcase-name-${index}`}>{e === ' ' ? <div>&nbsp;</div> : e}</div>
                            ))

                        }
                    </div>

                    <p ref={positionRef}
                       className={`z-50 text-xl tablet:text-xl s-desktop:text-2xl m-desktop:text-4xl l-desktop:text-4xl ${azonix.className} text-white z-10 opacity-0`}>glorious {adminList[currentIndex].type}</p>

                    <div
                        className={'h-60 tablet:h-96 s-desktop:h-96 m-desktop:h-2/6 l-desktop:h-2/5 gap-4 grid grid-cols-3 w-[280px] tablet:w-[450px] s-desktop:w-[480px] m-desktop:w-[580px] mt-10 l-desktop:w-[580px] shrink-0'}>
                        <CharacterCard setCurrentIndex={setCurrentIndex} characterCardRef={characterCardRef}
                                       currentIndex={currentIndex} shouldAnimate={shouldAnimate}/>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default HomeSixthContent;