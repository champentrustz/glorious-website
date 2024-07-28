import {useEffect, useRef, useState} from "react";
import anime from "animejs/lib/anime.es";

const AdminBackgroundAnimate = () => {

    const maxIndex = 8
    const [currentAnimatePicIndex, setCurrentAnimatePicIndex] = useState(1);
    const [currentAnimatePicUrl, setCurrentAnimatePicUrl] = useState('');
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        setCurrentAnimatePicUrl(`/images/admins/admin-bg-${currentAnimatePicIndex}.png`);
        anime({
            targets: imgRef.current,
            easing: 'easeInQuad',
            opacity: [0,0.3],
            duration: 5000,
            complete: () => {
                setTimeout(() => {
                    if(currentAnimatePicIndex < maxIndex){
                        setCurrentAnimatePicIndex(currentAnimatePicIndex + 1);
                    }else{
                        setCurrentAnimatePicIndex(1)
                    }
                }, 1000 * 10)
            }
        })

        return () =>{
            anime.remove(imgRef.current);
        }
    }, [currentAnimatePicIndex]);

    return (
        <>
            <img ref={imgRef} loading={"lazy"} className={'h-full w-full opacity-0 object-cover absolute inset-0 m-auto'}
                 src={currentAnimatePicUrl}/>
        </>
    );
};

export default AdminBackgroundAnimate;