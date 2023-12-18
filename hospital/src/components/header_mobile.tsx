import { Box, Slide } from "@chakra-ui/react";
import Logo from "./header/logo";
import { HeaderTabMobile } from "./header/mobile/header_tab_mobile";
import { useRecoilState } from "recoil";
import { menuIsClicked } from "../global/project_commin";

export default function HeaderMobile() {
    const [isClicked, setIsClicked] = useRecoilState(menuIsClicked);
    return (
        <>
            <Box
                zIndex="99"
                w="100%"
                position="fixed"
                top="0"
                backgroundColor="white"
                borderBottom="1px"
                borderStyle="solid"
                borderColor="#c1c1c1"
            >
                <Logo text="대한민국치과"></Logo>
                <Box onClick={() => setIsClicked((prev) => !prev)}>
                    <svg
                        style={{
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                        }}
                        version="1"
                        viewBox="0 0 48 48"
                        height="2rem"
                        width="2rem"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="#607D8B">
                            <rect x="6" y="22" width="36" height="3"></rect>
                            <rect x="6" y="10" width="36" height="3"></rect>
                            <rect x="6" y="34" width="36" height="3"></rect>
                        </g>
                    </svg>
                </Box>
                <Slide
                    in={isClicked}
                    style={{
                        position: "fixed",
                        top: "63px",
                        zIndex: "2",
                        width: "50%",
                    }}
                >
                    <Box right="0" backgroundColor="white" minHeight="100%">
                        <HeaderTabMobile />
                    </Box>
                </Slide>
                <Box
                    display={isClicked ? "block" : "none"}
                    position="fixed"
                    top="64px"
                    left="0"
                    w="100%"
                    h="100%"
                    backgroundColor="rgba(0,0,0,0.5)"
                    onClick={() => setIsClicked((prev) => !prev)}
                ></Box>
            </Box>
        </>
    );
}
