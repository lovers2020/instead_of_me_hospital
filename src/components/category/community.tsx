import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { CommunityMobile } from "./community_mobile";
import { Detail } from "./detail";
import { Notice } from "./community/notice";

export function Community() {
    const isWeb = useRecoilValue(displayResolution);
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[3]} path={"community"}></Detail>
                    <Notice />
                </>
            ) : (
                <CommunityMobile />
            )}
        </>
    );
}
