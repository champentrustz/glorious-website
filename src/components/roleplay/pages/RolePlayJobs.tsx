import {bebas, notoSansThai, spaceArmor} from "@/app/font";
import JobList from "@/components/roleplay/JobList";
import JobDetail from "@/components/roleplay/JobDetail";
import {useState} from "react";
import {rolePlayJobsData} from "@/data/rolePlayJobsData";
import JobListMobile from "@/components/roleplay/JobListMobile";

const RolePlayJobs = () => {

    const [currentJob, setCurrentJob] = useState(rolePlayJobsData[0].name);

    return (
        <div className={'w-full h-auto  overflow-auto flex flex-col gap-10 justify-center items-center relative'}>

            <div
                className={'w-full h-[35vh] overflow-hidden relative flex justify-center items-end tablet:items-end s-desktop:items-end m-desktop:items-center l-desktop:items-center bg-black py-10'}>
                <img className={'w-full h-full object-cover absolute inset-0 m-auto opacity-70'}
                     src={'/images/town-wallpaper-5.jpg'}/>
                <p className={`text-xl tablet:text-xl s-desktop:text-xl m-desktop:text-4xl l-desktop:text-4xl text-white text-shadow-md z-10 ${notoSansThai.className}`}>งานภายในเมือง</p>
            </div>

            <div className={'w-full h-full flex flex-col justify-center items-center px-2  overflow-hidden'}>
                <div
                    className={'bg-white shadow-md w-full tablet:w-full s-desktop:w-full m-desktop:w-11/12 l-desktop:w-4/5 h-full p-10 gap-16 flex flex-col justify-center items-center'}>

                    <div className={'w-full h-[100vh] flex flex-col justify-center items-center relative'}>


                        <div className={'w-full h-full flex justify-between'}>

                            <div
                                className={'w-4/12 hidden tablet:hidden s-desktop:hidden m-desktop:flex l-desktop:flex flex-col gap-6 p-10'}>
                                <JobDetail currentJob={currentJob}/>

                            </div>

                            <div className={`${bebas.className} text-6xl text-neutral-800 p-10 hidden tablet:hidden s-desktop:hidden m-desktop:flex l-desktop:flex`}>GLORIOUS ROLEPLAY JOBS</div>

                            <div
                                className={'h-full w-full flex tablet:flex s-desktop:flex m-desktop:hidden l-desktop:hidden  flex-col justify-center items-center gap-6 z-20 p-2 overflow-hidden'}>
                                <p className={`${bebas.className} text-neutral-700 text-4xl`}>GLORIOUS ROLEPLAY JOBS</p>
                                <div className={'w-full h-full flex flex-col gap-1 overflow-auto'}>
                                    <JobListMobile currentJob={currentJob} />
                                </div>


                            </div>

                        </div>

                        <div
                            className={` hidden  tablet:hidden s-desktop:hidden m-desktop:flex l-desktop:flex w-[1200px] absolute inset-0 m-auto h-full justify-center items-center z-10 `}>

                            <JobList currentJob={currentJob} setCurrentJob={setCurrentJob}/>
                        </div>


                    </div>

                </div>
            </div>
            <img
                className={'hidden m-desktop:w-[320px] l-desktop:w-[400px] m-desktop:block l-desktop:block object-cover absolute bottom-0 left-0 z-10'}
                src={'/images/admins/admin-ioun-2.png'}/>

        </div>
    );
};

export default RolePlayJobs;