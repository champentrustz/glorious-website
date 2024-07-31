import {bebas, notoSansThai, roboto, robotoBold} from "@/app/font";
import FooterSocial from "@/components/layout/FooterSocial";
import CharacterImg from "@/components/home/CharacterImg";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";

const TrainingMainContent = () => {

    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        anime({
            targets: ref1.current,
            easing: 'easeInQuad',
            opacity: [0, 1.0],
            duration: 700,
        })

        anime({
            targets: ref2.current,
            easing: 'easeInQuad',
            opacity: [0, 1.0],
            duration: 700,
        })
    },[])

    return (
        <div
            className='w-full bg-neutral-900 h-screen tablet:h-[70vh] s-desktop:h-[80vh] m-desktop:h-[70vh] l-desktop:h-[70vh] shrink-0 overflow-hidden flex justify-center items-center relative'>


            <img className={'absolute inset-0 m-auto w-full h-full object-cover opacity-30'} src={'/images/town-wallpaper-5.jpg'}/>

            <div className='w-full h-full flex items-center justify-center absolute inset-0 m-auto pt-[170px]'>

                <div ref={ref1} className={'h-full w-[950px] left-0 hidden tablet:hidden s-desktop:hidden m-desktop:block l-desktop:block p-10 shrink-0 '}>
                    <div className={'w-full h-full flex justify-center items-center'}>
                        <div
                            className={'rounded-xl w-full h-5/6 shadow-md shadow-black flex justify-center items-center border border-white/10'}>
                            <img className={'h-full object-cover rounded-xl'}
                                 src={'images/free-whitelist-glorious-1.png'}/>
                        </div>
                    </div>

                </div>

                <div ref={ref2} className={'h-full grow flex flex-col gap-2 justify-center items-center relative px-4'}>
                    <div
                        className={` ${bebas.className} text-center text-4xl  tablet:text-4xl s-desktop:text-4xl m-desktop:text-5xl l-desktop:text-7xl text-white text-shadow-md z-10 whitespace-nowrap`}>GLORIOUS <span
                        className='text-amber-400'>X</span> TRAINING
                    </div>
                    <p className={`${notoSansThai.className} text-base text-center tablet:text-base s-desktop:text-base m-desktop:text-xl l-desktop:text-xl text-white`}>ระบบพร้อมทุกการซ้อม กับคอมมูนิตี้ที่หลากหลาย เทรนนิ่งที่เป็นมากกว่าเทรนนิ่ง</p>
                    <p className={`${notoSansThai.className} text-base text-center tablet:text-base s-desktop:text-base m-desktop:text-xl l-desktop:text-xl text-white`}>มาลองสัมผัสความสนุกด้วยตัวคุณเอง</p>
                    <div
                        className={`${bebas.className} text-2xl tablet:text-2xl s-desktop:text-2xl m-desktop:text-4xl l-desktop:text-4xl text-neutral-900 px-3 py-1 bg-amber-400 rounded shadow-md shadow-black border border-white/10
                          mt-4 tablet:mt-4 s-desktop:mt-4 m-desktop:mt-8 l-desktop:mt-10`}>FREE
                        WHITELIST
                    </div>



                    <div className='w-full h-24 flex flex-col gap-4 justify-center items-center z-10 mt-2'>

                        <FooterSocial footer={true}/>
                        <p className={'text-sm text-gray-300'}>SOCIALS MEDIA</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default TrainingMainContent;