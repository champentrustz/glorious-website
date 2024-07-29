import {bebas, notoSansThai, spaceArmor} from "@/app/font";
import {splitName} from "@/modules/splitName";
import {useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";
import {rolePlayJobsData} from "@/data/rolePlayJobsData";
import {rolePlaySystemData} from "@/data/rolePlaySystemData";

interface SystemDetailProps {
    showSystem?: string
}

const SystemDetail = ({showSystem}: SystemDetailProps) => {

    const titleRef = useRef<any>([])
    const detailRef = useRef<any>(null);
    const systemDetail: any = rolePlaySystemData.find(system => system.name === showSystem);
    const [currentImg, setCurrentImg] = useState<number>(1);

    useEffect(() => {

        setCurrentImg(1);

        const titleFilter = titleRef.current.filter((e: null) => e !== null)

        anime({
            targets: titleFilter,
            opacity: [0, 1.0],
            delay: function (element, index) {
                return index * 100
            },
        })

        anime({
            targets: detailRef.current,
            easing: 'easeInQuad',
            opacity: [0, 1.0],
            duration: 1000,
        })

    },[showSystem])


    return (
        <div className={'w-full h-full rounded-lg flex flex-col'}>
            <div
                className={`${spaceArmor.className} h-10 w-full flex items-center text-neutral-800 text-base tablet:text-base s-desktop:text-base m-desktop:text-xl l-desktop:text-xl`}>
                {
                    splitName(`${systemDetail.label}`).map((e, index) => (
                        <div
                            ref={(element: any) => titleRef.current[index] = element}
                            key={`system-detail-title-${index}`}>{e === ' ' ?
                            <div>&nbsp;</div> : e}</div>
                    ))

                }
            </div>

            <div ref={detailRef} className={'flex flex-col gap-2 w-full h-full p-2'}>

                <div className={'flex m-desktop:flex-col l-desktop:flex-col gap-2 w-full h-full'}>
                    <div className={`w-3/6 tablet:w-3/6 s-desktop:w-3/6 m-desktop:w-4/5 l-desktop:w-5/6 
                h-40  tablet:h-40 s-desktop:h-40 m-desktop:h-80 l-desktop:h-96 shrink-0  overflow-hidden flex items-center`}>
                        <img className='h-full object-cover rounded-lg'
                             src={`/images/roleplay/systems/${systemDetail.name}-${currentImg}.png`}/>
                    </div>

                    <div
                        className={'w-full h-20  tablet:h-20 s-desktop:h-20 m-desktop:h-28 l-desktop:h-28 grid grid-cols-7 items-center gap-2 shrink-0'}>
                        <img onClick={() => setCurrentImg(1)}
                             className={`object-cover rounded-md ${currentImg !== 1 ? 'opacity-50  h-5/6' : 'h-full'} cursor-pointer duration-300`}
                             src={`/images/roleplay/systems/${systemDetail.name}-1.png`}/>
                        <img onClick={() => setCurrentImg(2)}
                             className={`object-cover cursor-pointer ${currentImg !== 2 ? 'opacity-50 h-5/6' : 'h-full'} rounded-md duration-300`}
                             src={`/images/roleplay/systems/${systemDetail.name}-2.png`}/>
                        <img onClick={() => setCurrentImg(3)}
                             className={`object-cover cursor-pointer ${currentImg !== 3 ? 'opacity-50 h-5/6' : 'h-full'} rounded-md duration-300`}
                             src={`/images/roleplay/systems/${systemDetail.name}-3.png`}/>
                    </div>
                </div>


                <p className={`${bebas.className} text-neutral-800 mt-4 w-full tablet:w-full s-desktop:w-full m-desktop:w-4/6 l-desktop:w-4/6 border-b border-neutral-800 text-lg`}>SYSTEM
                    DETAIL</p>
                <div
                    className={`w-full tablet:w-full s-desktop:w-full m-desktop:w-4/6 l-desktop:w-4/6 h-full pr-2 overflow-auto
                    text-sm tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base
                     ${notoSansThai.className} text-neutral-800`}>
                    {systemDetail.detail}
                </div>
            </div>


        </div>
    );
};

export default SystemDetail;