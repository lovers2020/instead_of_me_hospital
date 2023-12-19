import { Promise } from "./about/promise";
import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { Detail } from "./detail";
import { DetailMobile } from "./detail_mobile";
import { PromiseMobile } from "./about/promise_mobile";

export function About() {
    const isWeb = useRecoilValue(displayResolution);

    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[0]} path="about"></Detail>
                    <Promise></Promise>
                </>
            ) : (
                <>
                    <DetailMobile
                        list={detailList[0]}
                        path="about"
                    ></DetailMobile>
                    <PromiseMobile />
                </>
            )}
        </>
    );
}
