import {useEffect, useState} from "react";

const UseScrollPosition = () => {
    const [scrollPosition, setScrollPosition ] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY
        setScrollPosition(scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return scrollPosition;
};

export default UseScrollPosition;