import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const menuList = [
    {
        name: 'glorious_training',
        label: 'GLORIOUS TRAINING',
        logo: '/images/training/logo.png',
    },
]

const HeaderRightMenu = () => {

    const thisPath = '/training'
    const pathname = usePathname()

    return (
        <>
        <div className={`flex justify-center items-center h-full`}>
            {menuList.map((menu) => (
                <Link href={thisPath} key={menu.name}
                        className={`${pathname === thisPath ? 'text-amber-400' : 'text-gray-300'} w-auto h-full flex justify-center items-center gap-2 text-gray-400 hover:text-amber-400 text-xs tablet:text-sm s-desktop:text-sm m-desktop:text-sm l-desktop:text-sm`}>
                    <Image width={20} height={20}  src={menu.logo}  quality={80} alt='logo' />
                    {menu.label}
                </Link>
            ))}
        </div>
        </>
    )
};

export default HeaderRightMenu;