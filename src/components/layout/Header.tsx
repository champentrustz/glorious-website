"use client"

import HeaderLeftMenu from "@/components/layout/HeaderLeftMenu";
import HeaderRightMenu from "@/components/layout/HeaderRightMenu";
import HeaderTitleTxt from "@/components/layout/HeaderTitleTxt";
import {usePathname} from "next/navigation";
import HeaderSubMenu from "@/components/layout/HeaderSubMenu";
import {useState} from "react";

const HeaderTitle = () => {

    return (
        <div className='whitespace-nowrap flex justify-center items-center relative px-4'>

            <div className='w-4 h-full absolute  justify-end left-0 bottom-0 top-0 m-auto hidden tablet:hidden s-desktop:flex m-desktop:flex l-desktop:flex'>
                <div className='loader-line-2'></div>

            </div>

            <div className='w-4 h-full absolute right-0 bottom-0 top-0 m-auto hidden tablet:hidden s-desktop:flex m-desktop:flex l-desktop:flex'>
                <div className='loader-line'></div>
            </div>

            <div className='w-full h-full flex justify-center items-center relative'>

                <HeaderTitleTxt/>
            </div>
        </div>
    )
}

const Header = () => {

    const pathname = usePathname()
    const [showSubMenu, setShowSubMenu] = useState(true)

    return (

        <div className={'w-full flex flex-col fixed overflow-hidden z-40'}>


            <div
                className='w-full shrink-0 gap-4 grid grid-cols-1 tablet:grid-cols-3 s-desktop:grid-cols-3 m-desktop:grid-cols-3 l-desktop:grid-cols-3  px-4 py-6 bg-black bg-opacity-90 backdrop-blur-sm overflow-hidden'
                style={{zIndex: 999}}>

                <button
                    onClick={() => setShowSubMenu(!showSubMenu)}
                    className={'h-8 aspect-square rounded bg-gray-300 absolute top-2 right-2 z-10 flex justify-center items-center tablet:flex s-desktop:hidden m-desktop:hidden l-desktop:hidden'}>
                    {!showSubMenu ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="h-4/6 aspect-square">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="h-4/6 aspect-square">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    )}


                </button>

                <HeaderLeftMenu/>
                <HeaderTitle/>
                <HeaderRightMenu/>
            </div>
            {pathname !== '/' &&
                <HeaderSubMenu showSubMenu={showSubMenu}/>
            }
        </div>

    );
};

export default Header;
