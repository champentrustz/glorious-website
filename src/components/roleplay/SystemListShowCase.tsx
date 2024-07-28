import {bebas} from "@/app/font";
import {rolePlaySystemData} from "@/data/rolePlaySystemData";

const SystemListShowCase = () => {
    return (
        <>
            <div
                className={'w-full h-full flex '}>

                <div className={'w-4/6 h-full '}>
                    <img className={'h-full rounded-xl object-cover z-0 opacity-90'}
                         src={'/images/roleplay/systemss/gang-systems-1.png'}/>
                </div>

                <div className={'w-2/6 h-full bg-red-500'}></div>


            </div>

        </>
    )
        ;
};

export default SystemListShowCase;