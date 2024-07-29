
import CharacterImg from "@/components/home/CharacterImg";

import GloriousTitle from "@/components/home/GloriousTitle";

const HomeMainContent = () => {

    return (
        <div
            className='w-full bg-black h-screen tablet:h-[75vh] s-desktop:h-[80vh] m-desktop:h-[75vh] l-desktop:h-[75vh] shrink-0 overflow-hidden flex justify-center items-center relative'>
            <video className='opacity-70 absolute inset-0 m-auto w-full h-full object-cover' autoPlay loop
                   muted>
                <source src="/videos/intro.mp4" type="video/mp4"/>
            </video>

            <div className='w-full h-full flex items-end justify-center absolute bottom-0'>

                <GloriousTitle/>

                <CharacterImg/>


            </div>
        </div>
    );
};

export default HomeMainContent;