import FooterSocial from "@/components/layout/FooterSocial";
import {bebas, robotoBold} from "@/app/font";
import CharacterImg from "@/components/home/CharacterImg";

const HomeMainContent = () => {
    return (
        <div
            className='w-full bg-black h-screen tablet:h-[75vh] s-desktop:h-[75vh] m-desktop:h-[75vh] l-desktop:h-[75vh] shrink-0 overflow-hidden flex justify-center items-center relative'>
            <video className='opacity-70 absolute inset-0 m-auto w-full h-full object-cover' autoPlay loop
                   muted>
                <source src="/videos/intro.mp4" type="video/mp4"/>
            </video>

            <div className='w-full h-full flex items-end justify-center absolute bottom-0'>

                <div
                    className='w-full h-full tablet:h-full s-desktop:h-4/6 m-desktop:h-4/6 l-desktop:h-4/6 flex flex-col gap-4 justify-center items-center absolute bottom-0'>

                    <div
                        className={` ${bebas.className} text-4xl tablet:text-5xl s-desktop:text-7xl m-desktop:text-7xl l-desktop:text-7xl text-white p-4 text-shadow-md z-10 whitespace-nowrap`}>GLORIOUS
                        STUDIO <span
                            className='text-amber-400'>X</span> FIVEM
                    </div>
                    <p className='text-white text-shadow-md text-sm tablet:text-lg s-desktop:text-lg m-desktop:text-lg l-desktop:text-xl z-10'>EMBRACE
                        THE <span
                            className='text-amber-400'>GLORIOUS</span> THAT YOU ARE</p>

                    <div className='w-full h-20 flex justify-center items-center z-10'>
                        <FooterSocial footer={false}/>
                    </div>


                </div>

                <CharacterImg/>


            </div>
        </div>
    );
};

export default HomeMainContent;