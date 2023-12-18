import { Invisalign } from "./premium/invisalign";
import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { PremiumMobile } from "./premium_mobile";
import { Detail } from "./detail";

export function Premium() {
    const isWeb = useRecoilValue(displayResolution);

    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[1]} path={"premium"}></Detail>
                    <Invisalign />
                </>
            ) : (
                <PremiumMobile />
            )}
        </>
    );
}
