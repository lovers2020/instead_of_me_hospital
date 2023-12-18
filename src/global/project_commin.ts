import { atom } from "recoil";

export const displayResolution = atom<string>({
    key: "DisplayResolution",
    default: "web",
});

export const menuIsClicked = atom<boolean>({
    key: "menuStatus",
    default: false,
});
