import {LegacyRef} from "react";
import {adminList} from "@/data/adminList";

type AdminImageShowCaseProps = {
    mainCharacterRef?: LegacyRef<HTMLImageElement>,
    currentIndex: number
}

const AdminImageShowCase = ({mainCharacterRef, currentIndex} : AdminImageShowCaseProps) => {
    return (
        <img ref={mainCharacterRef} className={'h-3/5 hidden tablet:h-3/5 s-desktop:h-4/6 m-desktop:h-4/5 l-desktop:h-4/5 tablet:hidden s-desktop:block m-desktop:block l-desktop:block object-cover absolute bottom-0 left-4  z-50 opacity-0'}
             src={`/images/admins/admin-${adminList[currentIndex].name}-2.png`}/>
    );
};

export default AdminImageShowCase;