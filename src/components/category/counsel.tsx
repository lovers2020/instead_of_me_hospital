import { useRecoilValue } from "recoil";
import { detailList, displayResolution } from "../../global/project_commin";
import { Detail } from "./detail";
import { CounselForm } from "./counsel/counsel_form";
import { DetailMobile } from "./detail_mobile";
import { CounselFormMobile } from "./counsel/counsel_form_mobile";

export function Counsel() {
    const isWeb = useRecoilValue(displayResolution);
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Detail list={detailList[4]} path="counsel"></Detail>
                    <CounselForm />
                </>
            ) : (
                <>
                    <DetailMobile
                        list={detailList[4]}
                        path="counsel"
                    ></DetailMobile>
                    <CounselFormMobile />
                </>
            )}
        </>
    );
}
