import {bebas, notoSansThai, roboto, robotoBold} from "@/app/font";
import FooterSocial from "@/components/layout/FooterSocial";
import CharacterImg from "@/components/home/CharacterImg";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";

const RolePlayMainContent = () => {

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
            className='w-full bg-neutral-900 h-screen tablet:h-[70vh] s-desktop:h-[70vh] m-desktop:h-[70vh] l-desktop:h-[70vh] shrink-0 overflow-hidden flex justify-center items-center relative'>
            {/*<video className=' absolute inset-0 m-auto w-full h-full object-cover' autoPlay loop*/}
            {/*    muted>*/}
            {/*    <source src="/videos/intro.mp4" type="video/mp4"/>*/}
            {/*</video>*/}

            <img className={'absolute inset-0 m-auto w-full h-full object-cover opacity-30'} src={'/images/town-wallpaper-6.jpg'}/>

            <div className='w-full h-full flex items-center justify-center absolute inset-0 m-auto pt-[170px]'>

                <div ref={ref1} className={'h-full w-[950px] left-0 hidden tablet:hidden s-desktop:hidden m-desktop:block l-desktop:block p-10 shrink-0'}>
                    <div className={'rounded-xl w-full h-full shadow-md shadow-black flex flex-col border border-white/10'}>
                        <div className={'w-full h-3/5 flex '}>
                            <img className={'w-3/6 h-full rounded-tl-xl'} src={'images/roleplay/promote/main-1.jpg'}/>
                            <img className={'w-3/6 h-full rounded-tr-xl'} src={'images/roleplay/promote/main-2.jpg'}/>
                        </div>
                        <div className={'w-full h-2/5 flex'}>
                            <img className={'w-2/6 h-full rounded-bl-xl'} src={'images/roleplay/promote/main-3.jpg'}/>
                            <img className={'w-2/6 h-full'} src={'images/roleplay/promote/main-4.jpg'}/>
                            <img className={'w-2/6 h-full rounded-br-xl'} src={'images/roleplay/promote/main-5.jpg'}/>
                        </div>
                    </div>
                </div>

                <div ref={ref2} className={'h-full grow flex flex-col gap-2 justify-center items-center relative'}>
                    <div
                        className={` ${bebas.className} text-center text-4xl  tablet:text-4xl s-desktop:text-4xl m-desktop:text-5xl l-desktop:text-7xl text-white text-shadow-md z-10 whitespace-nowrap`}>GLORIOUS <span
                        className='text-amber-400'>X</span> ROLEPLAY
                    </div>
                    <p className={`${notoSansThai.className} text-base text-center tablet:text-base s-desktop:text-base m-desktop:text-xl l-desktop:text-xl text-white`}>ประเทศมั่นคง ระบบอัพเดททุกเดือน
                        สังคมคุณภาพกับฐานผู้เล่นกว่า 600</p>
                    <p className={`${notoSansThai.className} text-base text-center tablet:text-base s-desktop:text-base m-desktop:text-xl l-desktop:text-xl text-white`}>มาลองสัมผัสความสนุกด้วยตัวคุณเอง</p>
                    <div
                        className={`${bebas.className} text-2xl tablet:text-2xl s-desktop:text-2xl m-desktop:text-4xl l-desktop:text-4xl text-neutral-900 px-3 py-1 bg-amber-400 rounded shadow-md shadow-black border border-white/10
                          mt-4 tablet:mt-4 s-desktop:mt-4 m-desktop:mt-8 l-desktop:mt-10`}>FREE
                        WHITELIST
                    </div>

                    {/*<div className={'flex gap-4 absolute bottom-2 right-2 left-2 m-auto w-60'}>*/}
                    {/*    <div className={'h-full flex flex-col '}>*/}
                    {/*        <div*/}
                    {/*            className={`h-16 aspect-square bg-neutral-950 rounded-md text-4xl text-white flex justify-center items-center ${bebas.className}`}>1*/}
                    {/*        </div>*/}
                    {/*        <div className={`w-full h-8 flex justify-center items-center text-gray-300 text-sm `}>YEAR*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'h-full flex flex-col '}>*/}
                    {/*        <div*/}
                    {/*            className={`h-16 aspect-square bg-neutral-950 rounded-md text-4xl text-white flex justify-center items-center ${bebas.className}`}>7*/}
                    {/*        </div>*/}
                    {/*        <div className={'w-full h-8 flex justify-center items-center text-gray-300 text-sm'}>MONTH*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className={'h-full flex flex-col '}>*/}
                    {/*        <div*/}
                    {/*            className={`h-16 aspect-square bg-neutral-950 rounded-md text-4xl text-white flex justify-center items-center ${bebas.className}`}>22*/}
                    {/*        </div>*/}
                    {/*        <div className={'w-full h-8 flex justify-center items-center text-gray-300 text-sm'}>DAYS*/}
                    {/*        </div>*/}
                    {/*    </div>*/}


                    {/*</div>*/}


                    <div className='w-full h-24 flex flex-col gap-4 justify-center items-center z-10 mt-2'>

                        <FooterSocial footer={true}/>
                        <p className={'text-sm text-gray-300'}>SOCIALS MEDIA</p>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default RolePlayMainContent;