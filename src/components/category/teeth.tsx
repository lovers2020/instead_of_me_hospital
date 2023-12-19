import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { Detail } from "./detail";
import { Progress } from "./teeth/progress";
import { DetailMobile } from "./detail_mobile";
import { ProgressMobile } from "./teeth/progress_mobile";

export function Teeth() {
    const isWeb = useRecoilValue(displayResolution);
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[2]} path="teeth"></Detail>
                    <Progress />
                </>
            ) : (
                <>
                    <DetailMobile
                        list={detailList[2]}
                        path="teeth"
                    ></DetailMobile>
                    <ProgressMobile />
                </>
            )}
        </>
    );
}
