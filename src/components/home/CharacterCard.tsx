"use client"

import {adminList} from "@/data/adminList";
import {spaceArmor} from "@/app/font";
import {useEffect, useState} from "react";
import anime from "animejs/lib/anime.es";

type CharacterCardProps = {
    setCurrentIndex: (value: (((prevState: number) => number) | number)) => void,
    characterCardRef: any,
    currentIndex: number,
    shouldAnimate: boolean
}

const CharacterCard = ({setCurrentIndex, characterCardRef, currentIndex, shouldAnimate} : CharacterCardProps) => {

    const [canHover, setCanHover] = useState(false);

    const animateHover = (index: number, scale: number) =>{

        if(!canHover) return

        anime({
            targets: characterCardRef.current[index],
            scale: scale,
            duration: 1000,
        })
    }

    const animateCharacterCard = () =>{
        const characterCard = characterCardRef.current.filter((e: any) => e !== null)
        anime({
            targets: characterCard,
            easing: 'easeInQuad',
            translateY: [1000, 0],
            duration: 700,
            delay: function (element, index) {
                return index * 100
            },
            complete: () => {
                setCanHover(true)
            }
        })
    }

    useEffect(() => {
        if(shouldAnimate) animateCharacterCard()

        return () =>{
            // const characterCard = characterCardRef.current.filter((e: any) => e !== null)
            // anime.remove(characterCard);
            setCanHover(false)
        }
    }, [shouldAnimate]);

    return (
        adminList.map((admin, index) => (
            <button
                ref={(element: any) => characterCardRef.current[index] = element}
                onClick={() => setCurrentIndex(index)}
                onMouseEnter={() => animateHover(index, 1.1)}
                onMouseLeave={() => animateHover(index, 1.0)}
                key={`admin-card-${admin.name}`}
                className={`object-cover z-50  relative overflow-hidden shadow-md shadow-black svg-background border border-white/5 text-neutral-900`}
                style={{transform: 'skewX(-20deg)'}}>

                <img
                    className={'object-cover absolute -right-4 tablet:-right-4 s-desktop:-right-6 m-desktop:-right-8 l-desktop:-right-8 bottom-0 m-auto z-10'}
                    src={`/images/admins/admin-${admin.name}-2.png`}
                    style={{transform: 'skewX(20deg)', height: '90%'}}/>


                <div

                    className={`${spaceArmor.className} w-full h-full text-sm tablet:text-sm s-desktop:text-base m-desktop:text-base l-desktop:text-base py-2  whitespace-nowrap flex  items-end gap-1  `}
                    style={{transform: 'skewX(20deg)'}}>
                    {admin.name}
                </div>

                <div className={'w-4 h-2 absolute top-1 right-1  bg-neutral-900 shadow'}></div>
            </button>
        ))

    );
};

export default CharacterCard;