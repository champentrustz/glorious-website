import {bebas, notoSansThai, spaceArmor} from "@/app/font";
import {useState} from "react";
import {rolePlaySystemData} from "@/data/rolePlaySystemData";
import SystemDetail from "@/components/roleplay/SystemDetail";
import SystemList from "@/components/roleplay/SystemList";

const RolePlaySystems = () => {

    const [showSystem, setShowSystem] = useState(rolePlaySystemData[0].name);



    return (
        <div className={'w-full h-auto  overflow-auto flex flex-col justify-center items-center relative'}>

            <div
                className={'w-full h-[35vh] overflow-hidden relative flex justify-center items-end tablet:items-end s-desktop:items-center m-desktop:items-center l-desktop:items-center bg-black py-10'}>
                <img className={'w-full h-full object-cover absolute inset-0 m-auto opacity-70'}
                     src={'/images/town-wallpaper-6.jpg'}/>
                <p className={`text-2xl tablet:text-2xl s-desktop:text-3xl m-desktop:text-4xl l-desktop:text-4xl text-white text-shadow-md z-10 ${notoSansThai.className}`}>ระบบภายในเมือง</p>
            </div>
            <div className={'w-full h-[80vh] flex justify-center items-center gap-10 px-2 py-10 overflow-hidden'}>

                <div
                    className={'w-full h-full tablet:w-full s-desktop:w-full m-desktop:w-4/5 l-desktop:w-2/5 flex flex-col justify-center items-center bg-white shadow-md'}>

                    <div className={`w-full h-full p-10 gap-10 flex  justify-center items-center overflow-hidden`}>

                        <SystemDetail showSystem={showSystem}/>


                    </div>


                </div>

                <div className={'w-80 shrink-0 h-full flex flex-col gap-4 overflow-hidden'}>

                    <div className={`text-xl text-neutral-800 ${bebas.className} px-2 flex gap-2 items-center w-full justify-end`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-6">
                            <path fillRule="evenodd"
                                  d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z"
                                  clipRule="evenodd"/>
                        </svg>

                        SYSTEM LIST
                    </div>

                    <div className={'w-full h-full flex flex-col items-end px-2 gap-4 content-start overflow-auto'}>
                        <SystemList setShowSystem={setShowSystem} showSystem={showSystem}/>

                    </div>

                </div>


            </div>

            <img
                className={'hidden m-desktop:w-[260px] l-desktop:w-[350px] m-desktop:block l-desktop:block object-cover absolute bottom-0 right-0 z-10'}
                src={'/images/admins/admin-champ-2.png'}/>

        </div>
    );
};

export default RolePlaySystems;