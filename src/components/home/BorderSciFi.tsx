
type Props = {
    color: string
}


const BorderSciFi = ({color}: Props) => {
    return (
        <>
            <div
                className={`h-1/6 tablet:h-1/6 s-desktop:h-1/6 m-desktop:h-1/6 l-desktop:h-1/6 aspect-square border-b border-l border-${color} absolute left-0 bottom-0 z-0 `}></div>
            <div
                className={`h-1/6 tablet:h-1/6 s-desktop:h-1/6 m-desktop:h-1/6 l-desktop:h-1/6 aspect-square border-t border-r border-${color} absolute right-0 top-0 z-0`}></div>
            <div
                className={`h-1/6 tablet:h-1/6 s-desktop:h-1/6 m-desktop:h-1/6 l-desktop:h-1/6 aspect-square border-t border-l border-${color} absolute left-0 top-0 z-0 `}></div>
            <div
                className={`h-1/6 tablet:h-1/6 s-desktop:h-1/6 m-desktop:h-1/6 l-desktop:h-1/6 aspect-square border-b border-r border-${color} absolute right-0 bottom-0 z-0`}></div>
        </>
    )
};

export default BorderSciFi;