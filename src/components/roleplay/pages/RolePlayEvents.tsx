import CitizenEventSchedule from "@/components/roleplay/CitizenEventSchedule";
import GangEventSchedule from "@/components/roleplay/GangEventSchedule";
import {bebas, notoSansThai, spaceArmor} from "@/app/font";

const RolePlayEvents = () => {
    return (
        <div className={'w-full h-auto  overflow-auto flex flex-col gap-10 justify-center items-center relative'}>

            <div className={'w-full h-[35vh] overflow-hidden relative flex justify-center items-center bg-black'}>
                <img className={'w-full h-full object-cover absolute inset-0 m-auto opacity-70'}
                     src={'/images/town-wallpaper-8.jpg'}/>
                <p className={`text-4xl text-white text-shadow-md z-10 ${notoSansThai.className}`}>ตารางกิจกรรมภายในเมือง</p>
            </div>

            <div className={'w-full h-full flex flex-col justify-center items-center px-2 gap-10 pb-10 overflow-hidden'}>


                <div
                    className={`bg-white shadow-md w-full tablet:w-full s-desktop:w-full m-desktop:w-4/5 l-desktop:w-3/5 h-full p-10 gap-16 flex flex-col justify-center items-center overflow-hidden`}>

                    <div
                        className={'h-60 w-full tablet:w-full s-desktop:w-5/6 m-desktop:w-5/6 l-desktop:w-5/6 hidden tablet:hidden s-desktop:flex m-desktop:flex l-desktop:flex justify-center items-center gap-6 overflow-auto overscroll-x-none'}>
                        <div className={'h-full rounded-md overflow-hidden relative'}>
                            <img className={`object-cover h-full `}
                                 src={`/images/roleplay/events/airdrop-event-1.png`}/>
                            <div
                                className={`w-full h-10 absolute bottom-0 bg-neutral-200 flex items-center px-4 text-lg ${bebas.className}`}>
                                AIRDROP
                            </div>
                        </div>

                        <div className={'h-full rounded-md overflow-hidden relative'}>
                            <img className={`object-cover h-full `}
                                 src={`/images/roleplay/events/team-battle-event-1.png`}/>
                            <div
                                className={`w-full h-10 absolute bottom-0 bg-neutral-200 flex items-center px-4 text-lg ${bebas.className}`}>
                                TEAM BATTLE
                            </div>
                        </div>

                        <div className={'h-full rounded-md overflow-hidden relative'}>
                            <img className={`object-cover h-full `}
                                 src={`/images/roleplay/events/flag-war-event-1.png`}/>
                            <div
                                className={`w-full h-10 absolute bottom-0 bg-neutral-200 flex items-center px-4 text-lg ${bebas.className}`}>
                                FLAG WAR
                            </div>
                        </div>


                    </div>

                    <div className={'w-full h-[80vh] z-20 flex flex-col gap-4 overflow-auto'}>
                        <p className={`${spaceArmor.className} text-xl text-neutral-800`}>CITIZEN EVENT</p>
                        <div className={'w-full h-full overflow-auto pb-2'}>
                            <CitizenEventSchedule/>
                        </div>

                        <div className={'w-full flex items-center h-10 shrink-0'}>
                        <div className={`text-left text-neutral-800 ${notoSansThai.className} bg-neutral-200 border-l-4 border-red-500 h-full flex items-center px-4 text-sm`}>BOUNTY [ล่าฆ่าหัว] ทุกๆ 1 ชั่วโมง</div>
                        </div>

                    </div>
                    <div className={'w-full h-[30vh] z-20 flex flex-col gap-4 overflow-auto'}>
                        <p className={`${spaceArmor.className} text-xl text-neutral-800`}>GANG EVENT</p>
                        <div className={'w-full h-full overflow-auto pb-2'}>
                            <GangEventSchedule/>
                        </div>
                    </div>
                </div>
            </div>

            <img
                className={'hidden m-desktop:w-[320px] l-desktop:w-[400px] m-desktop:block l-desktop:block object-cover absolute bottom-0 left-0 z-10'}
                src={'/images/admins/admin-book-2.png'}/>

        </div>
    );
};

export default RolePlayEvents;