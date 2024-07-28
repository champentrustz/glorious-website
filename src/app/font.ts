import {Bebas_Neue, Noto_Sans_Thai, Roboto} from "next/font/google";
import localFont from 'next/font/local'

export const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
})


export const robotoBold = Roboto({
    weight: '400',
    subsets: ['latin'],
})



export const notoSansThai = Noto_Sans_Thai({
    weight: '400',
    subsets: ['latin'],
})

export const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
})

export const azonix = localFont({
    src: '../../public/fonts/Azonix.otf',
})

export const spaceMonkey = localFont({
    src: '../../public/fonts/SpaceMonkeyBold.otf',
})

export const spaceArmor = localFont({
    src: '../../public/fonts/SpaceArmor.otf',
})