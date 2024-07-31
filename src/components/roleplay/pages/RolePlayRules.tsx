import {notoSansThai, spaceArmor} from "@/app/font";
import Link from "next/link";


const RolePlayRules = () => {
    return (
        <div className={'w-full h-auto  overflow-auto flex flex-col justify-center items-center relative'}>

            <div
                className={'w-full h-[35vh] overflow-hidden relative flex justify-center items-end tablet:items-end s-desktop:items-end m-desktop:items-center l-desktop:items-center bg-black py-10'}>
                <img className={'w-full h-full object-cover absolute inset-0 m-auto opacity-70'}
                     src={'/images/town-wallpaper-4.jpg'}/>
                <p className={`text-xl tablet:text-xl s-desktop:text-xl m-desktop:text-xl l-desktop:text-2xl text-white text-shadow-md z-10 ${notoSansThai.className}`}>กฏภายในเมือง</p>
            </div>

            <div className={'w-full h-full flex flex-col justify-center items-center px-2 py-10 overflow-hidden'}>

                <div
                    className={'w-full tablet:w-full s-desktop:w-full m-desktop:w-4/5 l-desktop:w-3/5 h-full flex flex-col justify-center items-center bg-white shadow-md'}>



                    <div className={`w-full h-[80vh] p-4 gap-10 flex flex-col justify-center items-center `}>
                        <p className={` ${notoSansThai.className} text-lg tablet:text-lg s-desktop:text-lg m-desktop:text-2xl l-desktop:text-2xl text-neutral-800 flex gap-6`}>
                            กฏการเล่นพื้นฐาน

                            <Link href={'https://docs.google.com/spreadsheets/d/1MyxcPQ5PMpuf7Rq91-kqdG0OqhthJkOx9UjXcghPi48/edit?gid=0#gid=0'} target="_blank"
                                  className={`h-full w-24 hover:bg-amber-500 bg-amber-400 rounded flex justify-center items-center text-base ${notoSansThai.className}`}>ดูแบบเต็ม</Link>
                        </p>
                        <iframe
                            loading={'lazy'}
                            className={'w-full h-full z-10'}
                            src={'https://docs.google.com/spreadsheets/d/1MyxcPQ5PMpuf7Rq91-kqdG0OqhthJkOx9UjXcghPi48/edit?gid=0#gid=0'}></iframe>
                    </div>

                    <div className={`w-full h-[80vh] p-4 gap-10 flex flex-col justify-center items-center  `}>
                        <p className={` ${notoSansThai.className} text-lg tablet:text-lg s-desktop:text-lg m-desktop:text-2xl l-desktop:text-2xl text-neutral-800 flex gap-6`}>
                            กฏการเล่น STORY

                            <Link
                                href={'https://docs.google.com/spreadsheets/d/14jjgIIWbdf_kq2nKRohqYxzjojkxPC9IFOlDFap_YEg/edit#gid=0'}
                                target="_blank"
                                className={`h-full w-24 hover:bg-amber-500 bg-amber-400 rounded flex justify-center items-center text-base ${notoSansThai.className}`}>ดูแบบเต็ม</Link>
                        </p>

                        <iframe
                            loading={'lazy'}
                            className={'w-full h-full z-10'}
                            src={'https://docs.google.com/spreadsheets/d/14jjgIIWbdf_kq2nKRohqYxzjojkxPC9IFOlDFap_YEg/edit#gid=0'}></iframe>
                    </div>

                </div>


            </div>

            <img
                className={'hidden m-desktop:w-[270px] l-desktop:w-[400px] m-desktop:block l-desktop:block object-cover absolute bottom-0 right-0 z-20'}
                src={'/images/admins/admin-nook-2.png'}/>

        </div>
    );
};

export default RolePlayRules;