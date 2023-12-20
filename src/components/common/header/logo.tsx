import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../../../utils/util";
import {
    displayResolution,
    menuIsClicked,
} from "../../../global/project_commin";
import { useRecoilValue, useSetRecoilState } from "recoil";

interface ILogoText {
    text?: string;
    hideHeader?: number;
    fontsize?: string;
}

export default function Logo({ text, hideHeader, fontsize }: ILogoText) {
    const isWeb = useRecoilValue(displayResolution);
    const setIsClicked = useSetRecoilState(menuIsClicked);
    const navigate = useNavigate();
    const location = useLocation();

    function onLogoClicked() {
        setIsClicked(false);
        if (location.pathname === "/") go_to_top(0);
        else navigate("/");
    }

    return (
        <Center
            _hover={{
                cursor: "pointer",
            }}
            onClick={onLogoClicked}
            transition="0.3s"
            width={isWeb === "web" ? "100%" : "50%"}
            margin={isWeb === "web" ? "0" : "auto"}
            marginTop={!hideHeader ? "5px" : "20px"}
        >
            <Box mr="15px">
                <Image
                    w="50px"
                    h="50px"
                    src={require("../../../assets/태극기.png")}
                    alt="태극기"
                ></Image>
            </Box>
            <Text fontSize={fontsize} fontWeight="bold" color="rgba(0,0,0,0.7)">
                {text}
            </Text>
        </Center>
    );
}
