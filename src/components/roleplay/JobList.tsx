import {systemShowCaseData} from "@/data/systemShowCaseData";
import BorderSciFi from "@/components/home/BorderSciFi";
import {rolePlayJobsData} from "@/data/rolePlayJobsData";
import {notoSansThai} from "@/app/font";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";

interface JobListProps {
    setCurrentJob?: (value: (((prevState: string) => string) | string)) => void,
    currentJob?: string
}

const JobList = ({setCurrentJob, currentJob}: JobListProps) => {

    const jobListRef = useRef<any>([]);
    const mapRef = useRef<any>(null);

    const animateMap = (minScale: number, maxScale: number, callbackFunc: Function) => {
        anime({
            targets: mapRef.current,
            easing: 'easeInQuad',
            scale: [minScale, maxScale],
            duration: 500,
            complete: callbackFunc()
        })
    }

    useEffect(() => {

        const jobFilter = jobListRef.current.filter((e: null) => e !== null)

        animateMap(0.5, 1, () => {
            anime({
                targets: jobFilter,
                easing: 'easeInQuad',
                opacity: [0, 1.0],
                delay: function (element, index) {
                    return index * 80
                },
            })
        })

        return () => {
            const jobFilter = jobListRef.current.filter((e: null) => e !== null)
            anime.remove(jobFilter)
            anime.remove(mapRef.current)
        }

    }, [])

    return (
        <>
            <img ref={mapRef} className={'w-full object-cover'} src={'/images/map-gtav-main.png'}/>
            <div className="w-full h-full absolute inset-0 m-auto z-10">
                {
                    rolePlayJobsData.map((job, index) =>

                        <button
                            onClick={() => setCurrentJob && setCurrentJob(job.name)}
                            ref={(element: any) => jobListRef.current[index] = element}
                            key={`job-list-${index}`}
                            className={`opacity-0 w-28 tablet:w-28 s-desktop:w-32 m-desktop:w-32 l-desktop:w-32 gap-2 h-8 tablet:h-8 s-desktop:h-10 m-desktop:h-10 l-desktop:h-10 absolute m-auto z-10 flex p-1 bg-neutral-900 rounded whitespace-nowrap overflow-hidden ${currentJob === job.name && 'scale-110'} hover:scale-110 duration-300`}
                            style={{
                                left: job.positions.left,
                                right: job.positions.right,
                                top: job.positions.top,
                                bottom: job.positions.bottom,
                            }}
                        >

                            <div className={'h-full aspect-square shrink-0'}>
                                <div
                                    className={'h-full aspect-square shrink-0 rounded-sm bg-neutral-950 flex justify-center items-center'}>
                                    <img className={'h-3/5 aspect-square shrink-0'}
                                         src={`/images/roleplay/jobs/${job.name}.png`}/>
                                </div>
                            </div>
                            <div className={'w-full h-full flex flex-col justify-center items-center gap-0.5 tablet:gap-0.5 s-desktop:gap-1 m-desktop:gap-1 l-desktop:gap-1'}>
                                <p className={`${notoSansThai.className} text-amber-400 text-3xs tablet:text-3xs s-desktop:text-2xs m-desktop:text-2xs l-desktop:text-2xs `}>{job.label}</p>
                                <p className={`${notoSansThai.className} text-gray-300 text-3xs tablet:text-3xs s-desktop:text-2xs m-desktop:text-2xs l-desktop:w-text-2xs`}>{job.type.toUpperCase()}</p>
                            </div>


                        </button>
                    )
                }
            </div>
        </>


    );
};

export default JobList;