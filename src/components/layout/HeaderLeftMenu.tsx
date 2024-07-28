import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuList = [
    {
        name: 'glorious_rp',
        label: 'GLORIOUS ROLEPLAY',
        logo: '/images/roleplay/logo.png',
    },

]

const HeaderLeftMenu = () => {

    const thisPath = '/roleplay'
    const pathname = usePathname()


    return (
        <>
            <div className={`flex justify-center items-center`}>
                {menuList.map((menu) => (
                    <Link href={thisPath} key={menu.name}
                            className={` ${pathname === thisPath ? 'text-amber-400' : 'text-gray-300'} w-auto h-full flex justify-center items-center gap-2  hover:text-amber-400 text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-sm l-desktop:text-sm`}>
                        <Image width={25} height={25}  src={menu.logo}  quality={80} alt='logo' />
                        {menu.label}
                    </Link>
                ))}
            </div>
        </>
    )
};

export default HeaderLeftMenu;