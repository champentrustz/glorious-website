"use client"

import {useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";
import {adminList} from "@/data/adminList";



const CharacterImg = () => {


    const adminImgRef = useRef<[] | any>([]);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);



    const animateShowCharacterImg = () => {
        anime({
            targets: adminImgRef.current[currentImgIndex],
            easing: 'easeInQuad',
            opacity: [0, 1],
            duration: 1500,
            complete: function (anim) {
                setTimeout(() => {
                    setCurrentImgIndex(currentImgIndex + 1)
                },1500)

            }
        })
    }





    const resetCharacter = () => {

        anime({
            targets: adminImgRef.current,
            easing: 'easeOutQuad',
            opacity: [1, 0],
            duration: 2000,
            complete: function (anim) {
                setTimeout(() => {
                    setCurrentImgIndex(0)
                },1000)
            }
        })

    }



    useEffect(() => {

        if (currentImgIndex < adminList.length) {
            animateShowCharacterImg()
        } else {

            resetCharacter()
        }

        return () => {
            anime.remove(adminImgRef.current);
        }

    }, [currentImgIndex]);



    return (

        <>


            <img src="/images/glorious-admin-black.png" className='h-2/6 tablet:h-3/6 s-desktop:h-4/6 m-desktop:h-4/6 l-desktop:h-5/6 object-cover absolute bottom-0 left-0 right-0 m-auto opacity-90'
                 alt='glorious-admin-black'/>



            {adminList.map((admin, index) => (

                <img
                    key={index}
                    ref={(element: any) => adminImgRef.current[index] = element}
                    loading='lazy'
                    className={`h-2/6 tablet:h-3/6 s-desktop:h-4/6 m-desktop:h-4/6 l-desktop:h-5/6 object-cover absolute bottom-0 left-0 right-0 m-auto opacity-0`}
                    src={admin.img} alt='glorious-admin'/>

            ))}


        </>

    )
        ;
};

export default CharacterImg;