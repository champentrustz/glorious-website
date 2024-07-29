'use client'

import {notoSansThai} from "@/app/font";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";
import {rolePlayMenus} from "@/data/rolePlayMenus";
import {useParams} from "next/navigation";
import {trainingMenus} from "@/data/trainingMenus";


type HeaderSubMenuProps = {
    showSubMenu: boolean
}

const HeaderSubMenu = ({showSubMenu} : HeaderSubMenuProps) => {

    const menuRef = useRef<HTMLDivElement>(null)
    const [subMenuList, setSubMenuList] = useState<any>([])
    const params = useParams<{sideId: string ,pageId: string}>();



    const animateShowSubMenu = () =>{
        if(showSubMenu){
            anime({
                targets: menuRef.current,
                easing: 'easeInQuad',
                translateY: [-500,0],
                duration: 300
            })
        }else{
            anime({
                targets: menuRef.current,
                easing: 'easeOutQuad',
                translateY: [0,-500],
                duration: 300
            })
        }
    }

    useEffect(() => {
        if(params.sideId === 'training'){
            setSubMenuList(trainingMenus)
        }else if(params.sideId === 'roleplay'){
            setSubMenuList(rolePlayMenus)
        }
    }, [params]);

    useEffect(() => {
        animateShowSubMenu()
    },[showSubMenu])




    return (
        <>
        <div className={'w-full flex justify-center items-center  bg-neutral-950 z-0'}>
            <div
                className={'w-3/5 p-2 hidden tablet:hidden s-desktop:grid-cols-5 m-desktop:grid-cols-5 l-desktop:grid-cols-5 s-desktop:grid m-desktop:grid l-desktop:grid gap-4'}>

                {
                    subMenuList && subMenuList.map((menu: any) => (
                        <Link
                            key={`sub-menu-${menu.name}`}
                            href={menu.url}
                            className={`${params.sideId === 'training' && 'col-span-5'} flex text-xs tablet:text-xs s-desktop:text-xs m-desktop:text-base l-desktop:text-base items-center justify-center ${params.pageId === menu.name ? 'text-amber-300' : 'text-gray-300'} hover:text-amber-400 p-2 whitespace-nowrap ${notoSansThai.className}`}>
                            {menu.label}
                        </Link>
                    ))
                }


            </div>
        </div>
    <div ref={menuRef} className={'w-full flex justify-center items-center  bg-neutral-950 z-0'}>
        <div
            className={'w-3/5 p-2 grid grid-cols-1 tablet:grid-cols-1 s-desktop:hidden m-desktop:hidden l-desktop:hidden  gap-4'}>

            {
                subMenuList && subMenuList.map((menu: any) => (
                    <Link
                        key={`sub-menu-${menu.name}`}
                        href={menu.url}
                        className={`flex text-xs tablet:text-xs s-desktop:text-xs m-desktop:text-base l-desktop:text-base items-center justify-center ${params.pageId === menu.name ? 'text-amber-300' : 'text-gray-300'} hover:text-amber-400 p-2 whitespace-nowrap ${notoSansThai.className}`}>
                        {menu.label}
                    </Link>
                ))
            }


        </div>
    </div>
        </>
    );
};

export default HeaderSubMenu;