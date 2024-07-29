import {bebas, notoSansThai} from "@/app/font";

const NewPlayerGuide = () => {
    return (
        <div className={'w-full h-auto  overflow-auto flex flex-col justify-center items-center relative'}>


            <div className={'w-full h-[35vh] overflow-hidden relative flex justify-center items-end tablet:items-end s-desktop:items-end m-desktop:items-center l-desktop:items-center bg-black py-10'}>
                <img className={'w-full h-full object-cover absolute inset-0 m-auto opacity-70'}
                     src={'/images/town-wallpaper-3.jpg'}/>
                <p className={`text-2xl tablet:text-2xl s-desktop:text-3xl m-desktop:text-4xl l-desktop:text-4xl text-white text-shadow-md z-10 ${notoSansThai.className}`}>ไกด์สำหรับผู้เล่นใหม่</p>
            </div>

            <div className={'w-full h-full flex flex-col justify-center items-center px-2 py-10 overflow-hidden'}>

                <div
                    className={'w-full tablet:w-full s-desktop:w-full m-desktop:w-4/5 l-desktop:w-3/5 h-full flex flex-col justify-center items-center bg-white shadow-md'}>

                    <div className={`w-full h-[80vh] p-4 gap-16 flex flex-col justify-center items-center `}>

                    </div>



                </div>


            </div>


            <img className={'hidden m-desktop:w-[320px] l-desktop:w-[400px] m-desktop:block l-desktop:block object-cover absolute bottom-0 right-0 z-0'}
                 src={'/images/admins/admin-kuad-2.png'}/>

        </div>
    );
};

export default NewPlayerGuide;