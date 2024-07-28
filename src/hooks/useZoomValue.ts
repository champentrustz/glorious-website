import {useEffect, useState} from "react";


const UseZoomValue = (inViewport: boolean, scrollPosition: number, isScrollUp: boolean ,maxZoom: number, minZoom: number) => {
    const [zoomValue, setZoomValue] = useState(1.1);
    const [zoomPointScrollPosition, setZoomPointScrollPosition] = useState(0);

    const handleViewPort = () =>{
        if(inViewport){
            if(Math.abs(scrollPosition - zoomPointScrollPosition) >= 100){


                if(isScrollUp){
                    if(zoomValue >= maxZoom) {
                        setZoomValue(maxZoom)
                        return
                    }

                    setZoomValue(zoomValue + 0.01);
                }else{
                    if(zoomValue <= minZoom) {
                        setZoomValue(minZoom)
                        return
                    }
                    setZoomValue(zoomValue - 0.01);
                }

                setZoomPointScrollPosition(scrollPosition)
            }
        }
    }


    useEffect(() => {
        handleViewPort()
    }, [scrollPosition]);

    return zoomValue;
};

export default UseZoomValue;