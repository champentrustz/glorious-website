import {bebas, notoSansThai, robotoBold} from "@/app/font";
import {ReactElement, useEffect, useRef} from "react";
import {systemShowCaseData} from "@/data/systemShowCaseData";
import anime from "animejs/lib/anime.es";
import {splitName} from "@/modules/splitName";

type SystemShowCaseProps = {
    showCase?: string,
}


const SystemShowCase = ({showCase}: SystemShowCaseProps) => {

    const systemDetail: any = systemShowCaseData.find(system => system.name === showCase);
    const mainImgRef = useRef<HTMLImageElement | null>(null);
    const secondImgRef = useRef<HTMLImageElement | null>(null);
    const thirdImgRef = useRef<HTMLImageElement | null>(null);
    const titleRef = useRef<[] | any>([]);
    const detailRef = useRef<[] | any>([]);
    const functionTitleRef = useRef<HTMLDivElement | null>(null);
    const functionListRef = useRef<[] | any>([]);



    const animateShowCase = () =>{
        anime({
            targets: mainImgRef.current,
            easing: 'easeInQuad',
            opacity: [0, 1],
            duration: 500,
            delay: 800,

        })

        anime({
            targets: secondImgRef.current,
            easing: 'easeInQuad',
            opacity: [0, 0.2],
            duration: 200,
            delay: 400,

        })

        anime({
            targets: thirdImgRef.current,
            easing: 'easeInQuad',
            opacity: [0, 0.2],
            duration: 200,


        })

        const titleFilter = titleRef.current.filter((e: null) => e !== null)
        const functionListFilter = functionListRef.current.filter((e: null) => e !== null)

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

        anime({
            targets: functionTitleRef.current,
            easing: 'easeInQuad',
            opacity: [0, 1.0],
        })

        anime({
            targets: functionListFilter,
            easing: 'easeInQuad',
            opacity: [0, 1.0],
        })
    }

    const hideShowCase = () =>{
        anime({
            targets: mainImgRef.current,
            opacity: 0,

        })

        anime({
            targets: secondImgRef.current,
            opacity: 0,
        })

        anime({
            targets: thirdImgRef.current,
            opacity: 0,

        })

        const titleFilter = titleRef.current.filter((e: null) => e !== null)
        const functionListFilter = functionListRef.current.filter((e: null) => e !== null)

        anime({
            targets: titleFilter,
            opacity: 0,
        })

        anime({
            targets: detailRef.current,
            opacity: 0,
        })

        anime({
            targets: functionTitleRef.current,
            opacity: 0,
        })

        anime({
            targets: functionListFilter,
            opacity: 0,
        })
    }

    useEffect(() => {


        if(showCase !== ''){
            animateShowCase()
        }else{

            hideShowCase()
        }

    }, [showCase]);

    // useEffect(() => {
    //     if(shouldRenderShowCase){
    //         animateShowCase()
    //     }else {
    //         hideShowCase()
    //     }
    // },[shouldRenderShowCase])


    return (

        showCase !== '' &&
        <div className={'w-full h-full flex flex-col gap-4 justify-center'}>


            <div className={`flex justify-center items-center ${bebas.className}`}>
                {
                    systemDetail && splitName(systemDetail.label).map((e, index) => (
                        <div className='text-5xl text-neutral-800'
                             ref={(element:any) => titleRef.current[index] = element}
                             key={`title-${index}`}>{e === ' ' ? <div>&nbsp;</div> : e}</div>
                    ))

                }
            </div>

            <div className='w-full h-80 flex justify-center items-center  shrink-0 relative'>
                <img ref={mainImgRef} className='w-full object-cover rounded-lg z-20'
                     src={`/images/roleplay/systems/${systemDetail.name}-1.png`}/>
                <img ref={secondImgRef}
                     className='w-full object-cover rounded-lg z-0 scale-90 absolute opacity-20'
                     style={{right: '-25%', top: '35%'}}
                     src={`/images/roleplay/systems/${systemDetail.name}-2.png`}/>
                <img ref={thirdImgRef}
                     className='w-full object-cover rounded-lg z-0 scale-90 absolute opacity-20'
                     style={{right: '-40%', top: '0'}}
                     src={`/images/roleplay/systems/${systemDetail.name}-3.png`}/>

            </div>
            <div className='w-full h-60 shrink-0 flex flex-col gap-4 py-2 overflow-auto '>

                <p ref={detailRef} className={` text-neutral-800 flex  ${notoSansThai.className} `}>
                    {systemDetail?.detail}
                </p>

            </div>

            <div
                ref={functionTitleRef}
                className={`${robotoBold.className} rounded w-32 h-8 flex justify-center items-center text-neutral-900 gap-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-green-500">
                    <path fillRule="evenodd"
                          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                          clipRule="evenodd"/>
                </svg>

                FUNCTIONS
            </div>
            <div className='w-full h-60 shrink-0 grid grid-cols-2 gap-4 content-start'>
                {systemDetail.functions.map((func: {
                    icon: ReactElement;
                    label: string;
                }, index: any) => (

                    <div
                        ref={(element: any) => functionListRef.current[index] = element}
                        key={`func-${index}`}
                         className={'h-8 flex justify-center gap-2 items-center bg-neutral-900 drop-shadow rounded shadow shadow-neutral-800'}>
                        <div
                            className={'h-full w-full flex justify-center items-center text-gray-300'}>

                            <p className={`text-sm ${notoSansThai.className}`}>{func.label}</p>
                        </div>


                    </div>
                ))}


            </div>

        </div>
    );
};

export default SystemShowCase;