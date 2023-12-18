import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { TeethMobile } from "./teeth_mobile";
import { Detail } from "./detail";

export function Teeth() {
    const isWeb = useRecoilValue(displayResolution);
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[2]} path={"teeth"}></Detail>
                </>
            ) : (
                <TeethMobile />
            )}
        </>
    );
}