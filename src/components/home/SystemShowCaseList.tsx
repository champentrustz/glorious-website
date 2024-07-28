import BorderSciFi from "@/components/home/BorderSciFi";
import {systemShowCaseData} from "@/data/systemShowCaseData";
import {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es";


type SystemListProps = {
    setShowCase?: (value: (((prevState: string) => string) | string)) => void,
    showCase?: string,
    shouldRenderSystemList?: boolean,
}

const SystemShowCaseList = ({setShowCase, showCase, shouldRenderSystemList}: SystemListProps) => {

    const systemRef = useRef<any>([]);

    useEffect(() => {

        const systemFilter = systemRef.current.filter((e: null) => e !== null)

        if (shouldRenderSystemList) {
            anime({
                targets: systemFilter,
                easing: 'easeInQuad',
                opacity: [0, 1.0],
                delay: function (element, index) {
                    return index * 100
                },
                complete: () => {
                    setShowCase && setShowCase('market-system')
                }
            })
        } else {
            setShowCase && setShowCase('')
            anime({
                targets: systemFilter,
                opacity: [1.0, 0],
            })
        }

        return () =>{
            anime.remove(systemFilter);
        }
    }, [shouldRenderSystemList])

    return (
        <>
            {
                systemShowCaseData.map((system, index) =>

                    <div
                        ref={(element:any) => systemRef.current[index] = element}
                        key={`system-list-${index}`}
                        className={`w-16 h-12 tablet:h-20 s-desktop:h-28 m-desktop:h-32 l-desktop:h-32 tablet:w-24 s-desktop:w-36 m-desktop:w-36 l-desktop:w-36 absolute m-auto z-10 flex flex-col justify-between items-center`}
                        style={{
                            left: system.positions.left,
                            right: system.positions.right,
                            top: system.positions.top,
                            bottom: system.positions.bottom,
                        }}
                    >
                        <button
                            onClick={() => setShowCase ? setShowCase(system.name) : 'gang-systems'}
                            className={`w-full h-full p-1 tablet:p-1 s-desktop:p-2 m-desktop:p-2 l-desktop:p-2 relative bg-black bg-opacity-50 ${showCase === system.name ? 'scale-110' : 'hover:scale-110'} transition duration-500`}>
                            {showCase === system.name && (<BorderSciFi color={'gray-100/70'}/>)}
                            <img className='w-full h-full' src={`/images/roleplay/systems/${system.name}-1.png`}
                                 loading='lazy'/>
                        </button>
                        <div
                            className='w-full h-6 shrink-0 tablet:h-6 s-desktop:h-8 m-desktop:h-8 l-desktop:h-8 flex justify-center items-center text-white text-xs tablet:text-xs s-desktop:text-sm m-desktop:text-sm l-desktop:text-sm text-shadow-md whitespace-nowrap'>
                            <div className='h-full w-5 shrink-0 flex justify-center items-center relative'>
                                <div
                                    className='h-2 tablet:h-2 s-desktop:h-3 m-desktop:h-3 l-desktop:h-3 aspect-square absolute inset-0 m-auto z-0 animate-ping rounded-full bg-green-500'></div>
                                <div
                                    className='h-1 tablet:h-1 s-desktop:h-2 m-desktop:h-2 l-desktop:h-2 aspect-square rounded-full bg-green-500 z-10'></div>
                            </div>
                            {system.label.toUpperCase()}
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default SystemShowCaseList;