'use client'

import FooterSocial from "@/components/layout/FooterSocial";
import {usePathname} from "next/navigation";

const Footer = () => {

    const pathname = usePathname()

    return (

        // pathname === '/' &&

        <div className='shadow-sm border border-white/5 shadow-gray-300 w-full h-32 tablet:h-36 s-desktop:h-36 m-desktop:h-40 l-desktop:h-40 shrink-0 z-50 bg-neutral-950 flex flex-col gap-4 justify-center items-center relative'>


            <FooterSocial footer={true}/>

            <p className='text-gray-400 text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-base l-desktop:text-base'>GR GLORIOUS CO., LTD. All Rights Reserved</p>

        </div>
    );
};

export default Footer;