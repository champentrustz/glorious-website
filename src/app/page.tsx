import React from 'react'
import HomeMainContent from "@/components/home/HomeMainContent";
import HomeSecondContent from "@/components/home/HomeSecondContent";
import HomeThirdContent from "@/components/home/HomeThirdContent";
import HomeFourthContent from "@/components/home/HomeFourthContent";
import HomeFifthContent from "@/components/home/HomeFifthContent";
import HomeSixthContent from "@/components/home/HomeSixthContent";

type Props = {}


const Home = ({}: Props) => {
    return (
        <div className='flex-1'>
            <HomeMainContent/>
            <HomeSecondContent/>
            <HomeThirdContent/>
            <HomeFourthContent/>
            <HomeFifthContent/>
            <HomeSixthContent/>
        </div>
    )
}
export default Home
