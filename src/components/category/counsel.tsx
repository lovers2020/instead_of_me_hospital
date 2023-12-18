import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { CounselMobile } from "./counsel_mobile";
import { Detail } from "./detail";

export function Counsel() {
    const isWeb = useRecoilValue(displayResolution);
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[4]} path={"teeth"}></Detail>
                </>
            ) : (
                <CounselMobile />
            )}
        </>
    );
}
