import { atom } from "recoil";

export const displayResolution = atom<string>({
    key: "DisplayResolution",
    default: "web",
});

export const menuIsClicked = atom<boolean>({
    key: "menuStatus",
    default: false,
});

export const detailList = [
    [
        ["우리의 약속"],
        ["진료시간 안내"],
        ["인테리어"],
        ["오시는길"],
        ["주차안내"],
    ],
    [
        ["인비절라인"],
        ["설측교정"],
        ["비발치교정"],
        ["성장기 턱교정"],
        ["비수술교정"],
        ["수술교정"],
    ],
    [
        ["셀프교정진단"],
        ["증상별 교정"],
        ["장치별 교정"],
        ["교정 진행과정"],
        ["어린이 교정"],
    ],
    [
        ["교정전후사진"],
        ["언론보도"],
        ["전문의 칼럼"],
        ["치료후기"],
        ["병원일상"],
        ["공지사항"],
    ],
    [["온라인상담"], ["카톡상담"]],
];
