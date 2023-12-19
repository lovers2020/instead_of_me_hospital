import { Invisalign } from "./premium/invisalign";
import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { Detail } from "./detail";
import { InvisalignMobile } from "./premium/invisalign_mobile";
import { DetailMobile } from "./detail_mobile";

export function Premium() {
    const isWeb = useRecoilValue(displayResolution);

    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[1]} path="premium"></Detail>
                    <Invisalign />
                </>
            ) : (
                <>
                    <DetailMobile list={detailList[1]} path="premium" />
                    <InvisalignMobile />
                </>
            )}
        </>
    );
}
