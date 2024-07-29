'use client'

import {bebas, notoSansThai, spaceArmor} from "@/app/font";
import {useEffect, useRef} from "react";
import {splitName} from "@/modules/splitName";
import anime from "animejs/lib/anime.es";
import {systemShowCaseData} from "@/data/systemShowCaseData";
import {rolePlayJobsData} from "@/data/rolePlayJobsData";

interface JobDetailProps {
    currentJob?: string
}

const JobDetail = ({currentJob}: JobDetailProps) => {

    const titleRef = useRef<[] | any>([]);
    const detailRef = useRef<any>(null);
    const jobDetail: any = rolePlayJobsData.find(job => job.name === currentJob);



    useEffect(() => {

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
        })
    },[currentJob])


    return (
        <>
            <div className={`${spaceArmor.className} text-neutral-800 flex`}>
                {
                    splitName('JOB DETAIL').map((e, index) => (
                        <div
                            ref={(element: any) => titleRef.current[index] = element}
                            key={`job-detail-title-${index}`}>{e === ' ' ? <div>&nbsp;</div> : e}</div>
                    ))

                }
            </div>
            <div
                ref={detailRef}
                className={'flex flex-col gap-4 opacity-0 w-full justify-center z-20'}>
                <div className={'flex w-4/6 gap-2 bg-neutral-900 rounded-md overflow-hidden p-2'}>
                    <div
                        className={'h-14 shrink-0 bg-red-8 rounded-sm bg-neutral-800 flex justify-center items-center aspect-square overflow-hidden'}>
                        <img className={'h-3/6 aspect-square'} src={`/images/roleplay/jobs/${jobDetail.name}.png`}/>
                    </div>
                    <div
                        className={' h-full flex flex-col w-full gap-1 justify-center items-center'}>
                        <p className={`${notoSansThai.className} text-amber-400 `}>{jobDetail.label}</p>
                        <p className={`${notoSansThai.className} text-white text-sm`}>ประเภท: {jobDetail.type.toUpperCase()}</p>
                    </div>
                </div>

                <div
                    className={`px-4 h-auto py-2 max-w-[400px] border-l-4 border-amber-400 flex items-center bg-neutral-100 mt-2 text-sm ${notoSansThai.className} text-neutral-800 `}>
                    {jobDetail.detail}
                </div>

                {
                    jobDetail.required_items.length > 0 ?
                    <div className={'w-full h-24 flex flex-col gap-1 shrink-0 overflow-hidden'}>
                        <p className={`${bebas.className} text-neutral-800 text-xl`}>required item</p>
                        <div className={'w-full h-full flex  gap-4 overflow-hidden'}>
                            {
                                jobDetail.required_items.map((item: any) => (
                                    <div
                                        key={`${jobDetail.name}-item-required-${item.name}`}
                                        className={'h-full aspect-square rounded-md bg-neutral-900 flex flex-col justify-center items-center relative overflow-hidden'}>
                                        <img className={'h-4/6 aspect-square'}
                                             src={`/images/roleplay/items/${item.name}.png`}/>
                                        <div className={`flex justify-center items-center text-sm text-green-500 ${bebas.className}`}>x {item.amount}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : ''
                }

                {
                    jobDetail.items_drop.length > 0 ?
                    <div className={'w-full h-24 flex flex-col gap-1 shrink-0 overflow-hidden'}>
                        <p className={`${bebas.className} text-neutral-800 text-xl`}>DROPS</p>
                        <div className={'w-4/6 h-full flex  gap-4 flex-wrap overflow-auto'}>
                            {
                                jobDetail.items_drop.map((item: any) => (
                                    <div
                                        key={`${jobDetail.name}-item-drop-${item}`}
                                        className={'h-full aspect-square rounded-md bg-neutral-900 flex justify-center items-center overflow-hidden'}>
                                        <img className={'h-4/6 aspect-square'}
                                             src={`/images/roleplay/items/${item}.png`}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : ''
                }

                {
                    jobDetail.rare_items.length > 0 ?
                        <div className={'w-full h-24 flex flex-col gap-1 shrink-0 overflow-hidden'}>
                            <p className={`${bebas.className} text-neutral-800 text-xl`}>RARE ITEMS</p>
                            <div className={'w-4/6 h-full flex  gap-4 flex-wrap overflow-auto'}>
                                {
                                    jobDetail.rare_items.map((item: any) => (
                                        <div
                                            key={`${jobDetail.name}-item-rare-${item}`}
                                            className={'h-full aspect-square rounded-md bg-neutral-900 flex justify-center items-center overflow-hidden'}>
                                            <img className={'h-4/6 aspect-square'}
                                                 src={`/images/roleplay/items/${item}.png`}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> : ''
                }

                {
                    jobDetail.items_craft.length > 0 ?
                    <div className={'w-full h-24 flex flex-col gap-1 shrink-0 overflow-hidden'}>
                        <p className={`${bebas.className} text-neutral-800 text-xl`}>CRAFT</p>
                        <div className={'w-full h-full flex  gap-4 overflow-hidden'}>
                            {
                                jobDetail.items_craft.map((item: any) => (
                                    <div
                                        key={`${jobDetail.name}-item-craft-${item}`}
                                        className={'h-full aspect-square rounded-md bg-neutral-900 flex justify-center items-center overflow-hidden'}>
                                        <img className={'h-4/6 aspect-square'}
                                             src={`/images/roleplay/items/${item}.png`}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div> : ''
                }



            </div>
        </>
    );
};

export default JobDetail;