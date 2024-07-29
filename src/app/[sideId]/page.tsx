'use client'

import RolePlayMainContent from "@/components/roleplay/RolePlayMainContent";
import RolePlaySecondContent from "@/components/roleplay/RolePlaySecondContent";
import RolePlayThirdContent from "@/components/roleplay/RolePlayThirdContent";
import RolePlayFourthContent from "@/components/roleplay/RolePlayFourthContent";
import {useParams} from "next/navigation";
import NotFound from "@/components/roleplay/pages/NotFound";
import TrainingMainContent from "@/components/training/TrainingMainContent";

type Props = {}

const RolePlaySide = () =>{
    return(
        <>
            <RolePlayMainContent/>
            <RolePlaySecondContent/>
            <RolePlayThirdContent/>
            <RolePlayFourthContent/>
        </>
    )
}

const TrainingSide = () =>{
    return(
        <>
            <TrainingMainContent/>
        </>
    )
}

const renderSitePage = (sideId: string) => {

    switch (sideId) {
        case 'roleplay':
            return <RolePlaySide/>;
        case 'training':
            return <TrainingSide/>;
        default:
            return <NotFound/>;
    }
}



const RolePlayIndex = ({}: Props) => {

    const params = useParams<{sideId: string ,pageId: string}>();

    return (
        <div className='flex-1'>
            {renderSitePage(params.sideId)}
        </div>

)
}
export default RolePlayIndex
