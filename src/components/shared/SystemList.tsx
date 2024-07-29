import {rolePlaySystemData} from "@/data/rolePlaySystemData";
import {bebas, notoSansThai, spaceArmor, spaceMonkey} from "@/app/font";

interface SystemListProps {
    setShowSystem?: (value: (((prevState: string) => string) | string)) => void,
    showSystem?: string,
    systemData?: {
        name: string,
        label: string,
        detail: string
    }[]
}

const SystemList = ({setShowSystem, showSystem, systemData}: SystemListProps) => {
    return (
        <>
            {
                systemData && systemData.map((system, index) => (
                    <button
                        key={`system-list-${index}`}
                        onClick={() => setShowSystem && setShowSystem(system.name)}
                        className={`h-36 tablet:h-36 s-desktop:h-32 m-desktop:h-48 l-desktop:h-48 ${showSystem === system.name ? 'w-full bg-neutral-950' : 'w-11/12 bg-white'} shrink-0 flex flex-col justify-end hover:w-full duration-300 overflow-hidden shadow-md rounded-md relative  p-2 gap-2`}>

                        <div className={'w-full h-3/5 flex overflow-hidden rounded'}>

                            <img className='h-full rounded-sm shrink-0'
                                 src={`/images/systems/${system.name}-1.png`}/>

                            <div className={'w-full h-full grid grid-cols-1 gap-1 px-2 content-start'}>
                                <img className='rounded-sm'
                                     src={`/images/systems/${system.name}-2.png`}/>
                                <img className='rounded-sm'
                                     src={`/images/systems/${system.name}-3.png`}/>
                            </div>
                        </div>


                        <div
                            className={`w-full h-2/5 shrink-0  z-10 overflow-hidden flex flex-col`}>

                            <p
                                className={`text-3xs tablet:text-3xs s-desktop:text-3xs m-desktop:text-2xs l-desktop:text-2xs ${showSystem === system.name ? 'bg-white text-neutral-800' : 'bg-neutral-950 text-white'}  px-2 py-1 text-left ${spaceArmor.className}  border-l-2 border-amber-400 z-10 whitespace-nowrap`}>{system.label}</p>


                            <div className={'overflow-hidden w-full h-full px-2'}>
                                <p className={`text-gray-400 text-xs text-left ${notoSansThai.className}`}>
                                    <span>&nbsp;</span>
                                    <span>&nbsp;</span>
                                    <span>&nbsp;</span>
                                    <span>&nbsp;</span>
                                    <span>&nbsp;</span>
                                    {system.detail}</p>
                            </div>
                        </div>
                    </button>
                ))
            }
        </>
    );
};

export default SystemList;