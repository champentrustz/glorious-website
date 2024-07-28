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
        <div className={'w-full h-full rounded-lg flex flex-col gap-4 '}>
            <div
                className={`${spaceArmor.className} h-10 w-full flex items-center text-neutral-800 text-xl`}>
                {
                    splitName(`${systemDetail.label}`).map((e, index) => (
                        <div
                            ref={(element: any) => titleRef.current[index] = element}
                            key={`system-detail-title-${index}`}>{e === ' ' ?
                            <div>&nbsp;</div> : e}</div>
                    ))

                }
            </div>

            <div ref={detailRef} className={'flex flex-col gap-4 w-full h-full '}>

                <div className={'w-5/6 h-96 shrink-0  overflow-hidden flex items-center'}>
                    <img className='h-full object-cover rounded-lg'
                         src={`/images/roleplay/systems/${systemDetail.name}-${currentImg}.png`}/>
                </div>


                <div className={'w-full h-28 flex items-center gap-4 shrink-0'}>
                    <img onClick={() => setCurrentImg(1)} className={`object-cover rounded-md ${currentImg !== 1 ? 'opacity-50  h-5/6' : 'h-full'} cursor-pointer duration-300`}
                         src={`/images/roleplay/systems/${systemDetail.name}-1.png`}/>
                    <img onClick={() => setCurrentImg(2)} className={`object-cover cursor-pointer ${currentImg !== 2 ? 'opacity-50 h-5/6' : 'h-full'} rounded-md duration-300`}
                         src={`/images/roleplay/systems/${systemDetail.name}-2.png`}/>
                    <img onClick={() => setCurrentImg(3)} className={`object-cover cursor-pointer ${currentImg !== 3 ? 'opacity-50 h-5/6' : 'h-full'} rounded-md duration-300`}
                         src={`/images/roleplay/systems/${systemDetail.name}-3.png`}/>
                </div>

                <p className={`${bebas.className} text-neutral-800 mt-4 w-4/6 border-b border-neutral-800 text-lg`}>SYSTEM
                    DETAIL</p>
                <div
                    className={`w-4/6 h-full pr-2 overflow-auto ${notoSansThai.className} text-neutral-800`}>
                    {systemDetail.detail}
                </div>
            </div>


        </div>
    );
};

export default SystemDetail;