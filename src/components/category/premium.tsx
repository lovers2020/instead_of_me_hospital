import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Invisalign } from "./premium/invisalign";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../../global/project_commin";
import { PremiumMobile } from "./premium_mobile";

const InnerBox = styled.div<{ index?: number | null }>`
    width: 100%;
    border-right: 1px solid #bfbfbf;
    padding: 8px 30px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;

    &:hover {
        background-color: #603988;
        color: white;
    }
    &:nth-child(${(props) => props.index}) {
        background-color: #603988;
        color: white;
    }
`;

export function Premium() {
    const isWeb = useRecoilValue(displayResolution);
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/premium" ? 1 : null;
    return (
        <>
            {isWeb === "web" ? (
                <>
                    <Box
                        position="relative"
                        mt="154px"
                        w="100%"
                        h="300px"
                        backgroundSize="cover"
                        backgroundImage={require("../../assets/work4.jpg")}
                    >
                        <Center
                            maxWidth="1200px"
                            h="100%"
                            m=" auto"
                            justifyContent="space-between"
                            py="60px"
                            flexDir="column"
                        >
                            <Heading
                                mt="30px"
                                fontSize="32px"
                                color="#bfbfbf"
                                letterSpacing="14px"
                                fontWeight="200"
                            >
                                KOREA ORTHODONTIC CLINIC
                            </Heading>
                            <Flex
                                backgroundColor="white"
                                w="100%"
                                fontSize="20px"
                            >
                                <InnerBox index={index}>인비절라인</InnerBox>
                                <InnerBox>설측교정</InnerBox>
                                <InnerBox>비발치 교정</InnerBox>
                                <InnerBox>성장기 턱교정</InnerBox>
                                <InnerBox>비수술 교정</InnerBox>
                                <InnerBox>수술 교정</InnerBox>
                            </Flex>
                        </Center>
                    </Box>
                    <Invisalign />
                </>
            ) : (
                <PremiumMobile />
            )}
        </>
    );
}
