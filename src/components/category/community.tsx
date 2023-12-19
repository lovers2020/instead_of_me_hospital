import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { Detail } from "./detail";
import { Notice } from "./community/notice";
import { DetailMobile } from "./detail_mobile";
import { NoticeMobile } from "./community/notice_mobile";

export function Community() {
    const isWeb = useRecoilValue(displayResolution);
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[3]} path="community"></Detail>
                    <Notice />
                </>
            ) : (
                <>
                    <DetailMobile
                        list={detailList[3]}
                        path="community"
                    ></DetailMobile>
                    <NoticeMobile />
                </>
            )}
        </>
    );
}
