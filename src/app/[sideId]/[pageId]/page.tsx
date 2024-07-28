'use client'

import {useParams} from "next/navigation";
import NewPlayerGuide from "@/components/roleplay/pages/NewPlayerGuide";
import NotFound from "@/components/roleplay/pages/NotFound";
import RolePlayEvents from "@/components/roleplay/pages/RolePlayEvents";
import RolePlayRules from "@/components/roleplay/pages/RolePlayRules";
import RolePlaySystems from "@/components/roleplay/pages/RolePlaySystems";
import RolePlayJobs from "@/components/roleplay/pages/RolePlayJobs";

type Props = {}

const renderRpPage = (pageId: string) => {


    switch (pageId) {
        case 'new-player-guide':
            return <NewPlayerGuide/>;
        case 'rp-events':
            return <RolePlayEvents/>;
        case 'rp-rules':
            return <RolePlayRules/>;
        case 'rp-systems':
            return <RolePlaySystems/>;
        case 'rp-jobs':
            return <RolePlayJobs/>;
        default:
            return <NotFound/>;
    }
}

const PageContent = ({}: Props) => {

    const params = useParams<{ sideId: string, pageId: string }>();

    return (
        <div className='flex-1'>
            {renderRpPage(params.pageId)}
        </div>

    )
}
export default PageContent
