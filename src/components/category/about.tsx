import { Promise } from "./about/promise";
import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { AboutMobile } from "./about_mobile";
import { Detail } from "./detail";

export function About() {
    const isWeb = useRecoilValue(displayResolution);

    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[0]} path={"about"}></Detail>
                    <Promise></Promise>
                </>
            ) : (
                <AboutMobile />
            )}
        </>
    );
}
