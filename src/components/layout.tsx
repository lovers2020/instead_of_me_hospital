import { Outlet } from "react-router-dom";
import Header from "./header";
import { Footer } from "./footer";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../global/project_commin";
import HeaderMobile from "./header_mobile";
import { FooterMobile } from "./footer_mobile";

export default function Layout() {
    const setDisplayResolution = useRecoilValue(displayResolution);
    return (
        <>
            {setDisplayResolution === "web" ? (
                <>
                    <Header />
                    <Outlet></Outlet>
                    <Footer />
                </>
            ) : (
                <>
                    <HeaderMobile />
                    <Outlet></Outlet>
                    <FooterMobile />
                </>
            )}
        </>
    );
}
