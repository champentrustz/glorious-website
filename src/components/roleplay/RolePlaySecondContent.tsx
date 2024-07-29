import {bebas, notoSansThai, robotoBold, spaceArmor} from "@/app/font";
import FooterSocial from "@/components/layout/FooterSocial";
import CharacterImg from "@/components/home/CharacterImg";
import {adminList} from "@/data/adminList";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";

const newPlayerDetail = [
    {
        name: 'new-player-card',
        label: 'CARD',
        detail1: `ผู้เล่นใหม่รับบัตร NewPlayer 7 วัน`,
        detail2: `ฟาร์ม x2, Protect ปล้น,พาวน์ฟรี`,
        items: ['new_player.png'],
        background: `/images/login-wallpaper.png`
    },
    {
        name: 'new-player-items',
        label: 'ITEMS',
        detail1: `ผู้เล่นใหม่รับอาวุธ 3 ชิ้น (ปากฉลาม, ไม้เบส, ค้อน)`,
        detail2: `พร้อมรถทำงานดำแรงๆฟรี 7 วัน (Zentorno)`,
        items: ['start_day1.png', 'start_day4.png', 'start_day7.png'],
        background: `/images/zentorno-wallpaper.jpg`
    },
    {
        name: 'new-player-code',
        label: 'CODE',
        detail1: `ผู้เล่นใหม่สามารถกรอกโค้ดเพื่อรับกาชาอีกเพียบ`,
        detail2: `สามารถติดตามโค้ดได้ใน Discord`,
        items: ['turismor_gasha.png', 'trophytruck_gasha.png', 'jester3_gasha.png'],
        background: `/images/roleplay/promote/main-3.jpg`
    }
]

const NewPlayerShowCaseList = () =>{

    const promoteRef = useRef<any>([])

    useEffect(() => {
        const refFilter = promoteRef.current.filter((e: any) => e !== null)
        anime({
            targets: refFilter,
            easing: 'easeInQuad',
            translateY: [1000, 0],
            opacity: [0, 1.0],
            duration: 700,
            delay: function (element, index) {
                return index * 100
            },
        })
    },[])

    return(
        <>
            {newPlayerDetail.map((item,index) => (
                <div
                    ref={(element: any) => promoteRef.current[index] = element}
                    key={`new-player-${index}`}
                    className={`opacity-0 h-52 tablet:h-52 s-desktop:h-52 m-desktop:h-64 l-desktop:h-64 shrink-0 
                    flex flex-col items-end gap-2 relative p-4 rounded-lg shadow-md shadow-black border border-white/10 
                    overflow-hidden bg-neutral-900 text-shadow-md hover:scale-105 duration-300`}>

                    <div className={'w-20 h-full absolute -left-10 top-0 m-auto bg-amber-400 z-10 -skew-x-12'}>
                    </div>


                    <img className={'h-full w-full object-cover absolute inset-0 m-auto opacity-30'}
                         src={item.background}/>

                    <p className={`text-white ${bebas.className} text-3xl tablet:text-3xl s-desktop:text-3xl m-desktop:text-4xl l-desktop:text-4xl z-10`}><span
                        className={'text-amber-400'}>NEW PLAYER</span> {item.label}</p>
                    <p className={`${notoSansThai.className} text-sm tablet:text-sm s-desktop:text-sm m-desktop:text-lg l-desktop:text-lg text-white z-10 text-right whitespace-nowrap `}>{item.detail1}</p>
                    <p className={`${notoSansThai.className}  text-sm tablet:text-sm s-desktop:text-sm m-desktop:text-lg l-desktop:text-lg text-white z-10 text-right whitespace-nowrap`}>{item.detail2}</p>

                    <div className={'w-full h-16 tablet:h-16 s-desktop:h-16 m-desktop:h-24 l-desktop:h-24 flex gap-3 items-center justify-end p-1'}>

                        {
                            item.items.map((item,index) => (
                                <div
                                    key={`new-player-item-${index}`}
                                    className={'h-full aspect-square rounded-lg shadow-md shadow-black border border-white/10 flex justify-center items-center p-2 svg-background-2 z-20 '}>
                                    <img className={'h-5/6 object-cover z-20'}
                                         src={`/images/roleplay/items/${item}`}/>
                                </div>
                            ))
                        }

                    </div>
                </div>
            ))}
        </>
    )
}

const RolePlaySecondContent = () => {
    return (
        <div
            className={`w-full relative min-h-[30vh] tablet:min-h-[30vh] s-desktop:min-h-[30vh] m-desktop:h-[30vh] l-desktop:h-[30vh] 
            bg-neutral-950 flex flex-col gap-4 justify-center items-center overflow-hidden 
            p-6 tablet:p-6 s-desktop:p-6 m-desktop:p-10 l-desktop:p-10
            `}>


            <div
                className={'w-full tablet:w-5/6 s-desktop:w-full m-desktop:w-[90vw] l-desktop:w-4/5 h-full grid grid-cols-1 tablet:grid-cols-1 s-desktop:grid-cols-3 m-desktop:grid-cols-3 l-desktop:grid-cols-3 gap-6 justify-center items-center overflow-hidden'}>

                <NewPlayerShowCaseList/>


            </div>


        </div>
    );
};

export default RolePlaySecondContent;