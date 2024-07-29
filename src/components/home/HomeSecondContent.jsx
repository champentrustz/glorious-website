import {bebas, notoSansThai, robotoBold} from "@/app/font";



const HomeSecondContent = () => {


    return (
        <div className='w-full relative h-auto tablet:h-auto s-desktop:h-auto m-desktop:h-[25vh] l-desktop:h-[25vh]
        grid grid-cols-1 pt-4 overflow-hidden'>



            <div
                className={`hidden tablet:hidden s-desktop:hidden m-desktop:flex l-desktop:flex justify-center items-start  text-8xl text-gray-300 absolute left-8 top-6 m-auto opacity-70 ${bebas.className}`}>
                SERVER INFO
            </div>
            <div
                className={`hidden tablet:hidden s-desktop:hidden m-desktop:flex l-desktop:flex justify-center items-end text-8xl text-gray-300 absolute right-8 bottom-6 m-auto opacity-70 ${bebas.className}`}>COMPANY
                VISION
            </div>
            <div
                className='h-1/6 tablet:h-1/6 s-desktop:h-1/6 m-desktop:h-2/6 l-desktop:h-2/6 aspect-square border-t-4 border-l-4 border-neutral-900 absolute left-4 top-4 z-0 '></div>
            <div
                className='h-1/6 tablet:h-1/6 s-desktop:h-1/6 m-desktop:h-2/6 l-desktop:h-2/6 aspect-square border-b-4 border-r-4 border-neutral-900 absolute right-4 bottom-4 z-0'></div>


            <p className={`${bebas.className} text-2xl tablet:text-3xl s-desktop:text-3xl m-desktop:text-4xl l-desktop:text-4xl text-neutral-800 text-center z-10`}>OUR
                SERVER AND VISION</p>

            <p className={`${notoSansThai.className} text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base text-neutral-950 text-center px-14 z-10`}>Glorious
                เมืองแห่งการสร้างสรรค์ ทุ่มเท และใส่ใจ กับทุกระบบที่พัฒนามาเพื่อผู้เล่นโดยเฉพาะ</p>

            <div
                className='w-full h-full grid grid-cols-1 tablet:grid-cols-1 s-desktop:grid-cols-2 m-desktop:grid-cols-2 l-desktop:grid-cols-2 gap-4 z-10'>

                <div className='flex justify-end items-center'>

                    <div
                        className='flex gap-2 p-2 relative justify-end items-center w-full  s-desktop:w-4/6 m-desktop:w-4/6 l-desktop:w-3/6'>
                        <div className='z-10 w-9/12 h-36 p-2  bg-neutral-950 relative overflow-hidden rounded-lg shadow shadow-neutral-800'>
                            <div
                                className='w-full h-full flex flex-col justify-center gap-1 z-10  border border-white/20 p-2 rounded-lg'>
                                <p className={`text-xl tablet:text-2xl s-desktop:text-2xl m-desktop:text-2xl l-desktop:text-2xl text-amber-400 z-10 ${bebas.className}`}>OUR
                                    SERVERS</p>
                                <p className={`text-xs tablet:text-xs s-desktop:text-xs m-desktop:text-sm l-desktop:text-sm text-gray-300 z-10  ${notoSansThai.className}`}>ปัจจุบัน
                                    Glorious มี Server
                                    ให้เล่นอยู่ด้วยกันอยู่ 2
                                    Server ได้แก่ Roleplay ซึ่งจะเน้นไปที่การสวมบทบาท และ Training ที่จะเป็น Server
                                    ที่ใช้สำหรับการฝึกซ้อมและการ Community เป็นหลัก</p>
                            </div>
                            <img className='w-full object-cover absolute inset-0 m-auto opacity-15'
                                 src='/images/town-wallpaper-1.jpg'/>

                        </div>
                        <div
                            className='shrink-0 h-full z-20 px-2 flex items-center justify-end  absolute left-0'>
                            <img
                                className='h-40 tablet:h-48 s-desktop:h-48 m-desktop:h-64 l-desktop:h-64 object-cover drop-shadow relative'
                                src='/images/admins/admin-kuad-2.png' alt='c-1'/>

                        </div>
                    </div>
                </div>

                <div className='flex justify-start items-center'>
                    <div
                        className='flex gap-2 justify-start items-center p-2  relative w-full s-desktop:w-4/6 m-desktop:w-4/6 l-desktop:w-3/6 '>

                        <div
                            className='shrink-0 h-full z-20 px-2 flex items-center justify-end absolute right-0'>
                            <img
                                className='h-40 tablet:h-44 s-desktop:h-44 m-desktop:h-60 l-desktop:h-60 object-cover drop-shadow relative'
                                src='/images/admins/admin-ioun-2.png' alt='c-2'/>

                        </div>

                        <div className='z-10 w-9/12 h-36 p-2 bg-neutral-950 relative overflow-hidden rounded-lg shadow shadow-neutral-800'>
                            <div
                                className='w-full h-full flex flex-col justify-center gap-1  z-10  border border-white/20 p-2 rounded-lg'>
                                <p className={`text-xl tablet:text-2xl s-desktop:text-2xl m-desktop:text-2xl l-desktop:text-2xl text-amber-400 z-10 ${bebas.className}`}>
                                    OUR VISION</p>
                                <p className={`text-xs tablet:text-xs s-desktop:text-xs m-desktop:text-sm l-desktop:text-sm text-gray-300 z-10 ${notoSansThai.className}`}>
                                    Glorious เมืองแห่งความทุ่มเท เรามุ่งสร้างเมืองที่มีคุณภาพ การอัพเดทที่สม่ำเสมอ
                                    และใส่ใจผู้เล่น เพื่อที่จะให้ผู้เล่นได้สัมผัสประสบการณ์ใหม่ๆ
                                    เล่นในเมืองได้อย่างสนุกและมีความสุข</p>
                            </div>
                            <img className='w-full object-cover absolute inset-0 m-auto opacity-15'
                                 src='/images/town-wallpaper-2.jpg'/>

                        </div>

                    </div>
                </div>


            </div>

            {/*<div className='w-full h-full flex justify-center items-center text-5xl text-gray-400 opacity-50'>ROLEPLAY</div>*/}


            {/*<div className='w-full h-full flex justify-center items-center text-5xl text-gray-400 opacity-50'>TRAINING</div>*/}

        </div>
    );
};

export default HomeSecondContent;