import { Helmet } from "react-helmet";
import MainBanner from "./home/main_banner";
import { FirstOverView } from "./home/main_overview/first_overview";
import { SecondOverview } from "./home/main_overview/second_overview";
import { ThirdOverView } from "./home/main_overview/third_overview";
import { FourthOverView } from "./home/main_overview/fourth_overview";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../global/project_commin";
import MainBannerMobile from "./home/main_banner_mobile";
import { FirstOverViewMobile } from "./home/main_overview_mobile/first_overview_mobile";
import { SecondOverviewMobile } from "./home/main_overview_mobile/second_overview_mobile";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { ThirdOverViewMobile } from "./home/main_overview_mobile/third_overview_mobile";
import { FourthOverViewMobile } from "./home/main_overview_mobile/fourth_overview_mobile";
import { refresh } from "../utils/util";

export default function Home() {
    const setDisplayResolution = useRecoilValue(displayResolution);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y <= -100) refresh();
    });
    return (
        <>
            <Helmet>
                <title>대한민국치과</title>
            </Helmet>
            {setDisplayResolution === "web" ? (
                <>
                    <MainBanner />
                    <FirstOverView />
                    <SecondOverview />
                    <ThirdOverView />
                    <FourthOverView />
                </>
            ) : (
                <>
                    <MainBannerMobile />
                    <FirstOverViewMobile />
                    <SecondOverviewMobile />
                    <ThirdOverViewMobile />
                    <FourthOverViewMobile />
                </>
            )}
        </>
    );
}
