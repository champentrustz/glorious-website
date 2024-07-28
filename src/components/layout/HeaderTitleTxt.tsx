"use client"

import {azonix} from "@/app/font";
import {useRef} from "react";
import Link from "next/link";

const HeaderTitleTxt = () => {

    return (
        <Link href={'/'}
                className={`text-sm tablet:text-sm s-desktop:text-base m-desktop:text-xl l-desktop:text-xl text-gray-300 flex gap-2 items-center justify-center h-full relative  ${azonix.className}`}>
            GLORIOUS STUDIO <span className='text-amber-400'>X</span> FIVEM

        </Link>
    );
};

export default HeaderTitleTxt;