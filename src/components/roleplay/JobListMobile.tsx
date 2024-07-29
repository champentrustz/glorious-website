import {rolePlayJobsData} from "@/data/rolePlayJobsData";
import {bebas, notoSansThai, roboto} from "@/app/font";

interface JobListMobileProps {

}

interface JobListMobileProps {
    currentJob?: string
}

const JobListMobile = ({currentJob}: JobListMobileProps) => {

    const jobDetail: any = rolePlayJobsData.find(job => job.name === currentJob);

    return (
        <>

            <div className={'w-full h-14 shrink-0 flex gap-1'}>
                <div className={'h-full shrink-0 w-20 bg-amber-400 flex justify-center items-center'}>
                    <img className={'h-4/6 aspect-square drop-shadow-md'} src={'/images/roleplay/logo.png'}/>
                </div>
                <div
                    className={`h-full grow min-w-72   shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className}`}>งาน
                </div>

                <div
                    className={`h-full w-28 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className}`}>ประเภท
                </div>

                <div
                    className={`h-full w-60 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className}`}>คำอธิบาย
                </div>
                <div
                    className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className} overflow-auto`}>ไอเทมทำงาน
                </div>

                <div
                    className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className} overflow-auto`}>ไอเทมที่ได้รับ
                </div>

                <div
                    className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className} overflow-auto`}>ไอเทมแรร์
                </div>

                <div
                    className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-400 ${notoSansThai.className} overflow-auto`}>คราฟ
                </div>
            </div>

            {
                rolePlayJobsData.map((job, index) =>

                    <div key={`job-list-mobile-${index}`} className={'w-full h-20 shrink-0 flex gap-1'}>
                        <div className={'h-full shrink-0 w-20 bg-neutral-900 flex justify-center items-center'}>
                            <img className={'h-2/5 aspect-square drop-shadow-md'}
                                 src={`/images/roleplay/jobs/${job.name}.png`}/>
                        </div>
                        <div
                            className={`h-full grow min-w-72   shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-amber-400 text-sm ${notoSansThai.className}`}>{job.label}
                        </div>

                        <div
                            className={`h-full w-28 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-300 text-xs ${notoSansThai.className}`}>{job.type.toUpperCase()}
                        </div>

                        <div
                            className={`h-full w-60 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-xs text-gray-300 px-2 ${notoSansThai.className}`}>{job.detail}
                        </div>
                        <div
                            className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-300 ${notoSansThai.className} overflow-auto`}>
                            {
                                job.required_items.length > 0 ?

                                    <div className={'w-full h-5/6 flex  gap-2 p-2'}>
                                        {
                                            job.required_items.map((item: any) => (
                                                <div
                                                    key={`${job.name}-item-required-${item.name}-mobile`}
                                                    className={'h-full aspect-square rounded-md bg-neutral-900 flex flex-col justify-center items-center relative overflow-hidden border border-white/20'}>
                                                    <img className={'h-4/6 aspect-square'}
                                                         src={`/images/roleplay/items/${item.name}.png`}/>
                                                    <div
                                                        className={`flex justify-center items-center text-sm text-green-500 ${bebas.className}`}>x {item.amount}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    : ''
                            }
                        </div>

                        <div
                            className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-300 ${notoSansThai.className} overflow-auto`}>
                            {
                                job.items_drop.length > 0 ?

                                    <div className={'w-full h-5/6 flex  gap-2 p-2'}>
                                        {
                                            job.items_drop.map((item: any) => (
                                                <div
                                                    key={`${jobDetail.name}-item-drop-${item}-mobile`}
                                                    className={'h-full aspect-square shrink-0 rounded-md bg-neutral-900 flex flex-col justify-center items-center relative overflow-hidden border border-white/20'}>
                                                    <img className={'h-4/6 aspect-square'}
                                                         src={`/images/roleplay/items/${item}.png`}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    : ''
                            }
                        </div>

                        <div
                            className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-300 ${notoSansThai.className} overflow-auto`}>
                            {
                                job.rare_items.length > 0 ?

                                    <div className={'w-full h-5/6 flex  gap-2 p-2'}>
                                        {
                                            job.rare_items.map((item: any) => (
                                                <div
                                                    key={`${jobDetail.name}-item-rare-${item}-mobile`}
                                                    className={'h-full aspect-square shrink-0 rounded-md bg-neutral-900 flex flex-col justify-center items-center relative overflow-hidden border border-white/20'}>
                                                    <img className={'h-4/6 aspect-square'}
                                                         src={`/images/roleplay/items/${item}.png`}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    : ''
                            }
                        </div>

                        <div
                            className={`h-full w-56 shrink-0 aspect-square bg-neutral-900 flex justify-center items-center text-gray-300 ${notoSansThai.className} overflow-auto`}>
                            {
                                job.items_craft.length > 0 ?

                                    <div className={'w-full h-5/6 flex  gap-2 p-2'}>
                                        {
                                            job.items_craft.map((item: any) => (
                                                <div
                                                    key={`${jobDetail.name}-item-craft-${item}-mobile`}
                                                    className={'h-full aspect-square shrink-0 rounded-md bg-neutral-900 flex flex-col justify-center items-center relative overflow-hidden border border-white/20'}>
                                                    <img className={'h-4/6 aspect-square'}
                                                         src={`/images/roleplay/items/${item}.png`}/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    : ''
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default JobListMobile;