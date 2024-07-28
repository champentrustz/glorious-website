import {useEffect, useState} from 'react';

const UseIsScrollUp = (currentScrollPosition: number) => {
    const [isScrollUp, setIsScrollUp ] = useState(false);
    const [pastScrollPosition, setPastScrollPosition ] = useState<number>(0);

    const handleScroll = () => {
        setIsScrollUp((pastScrollPosition > currentScrollPosition));
        setPastScrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        handleScroll()
    }, [currentScrollPosition]);

    return isScrollUp;
};

export default UseIsScrollUp;