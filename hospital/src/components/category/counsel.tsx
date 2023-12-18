import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { displayResolution } from "../../global/project_commin";
import { CounselMobile } from "./counsel_mobile";

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

export function Counsel() {
    const isWeb = useRecoilValue(displayResolution);
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/counsel" ? 1 : null;
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
                                <InnerBox index={index}>온라인 상담</InnerBox>
                                <InnerBox>카톡 상담</InnerBox>
                            </Flex>
                        </Center>
                    </Box>
                    <Box h="500px"></Box>
                </>
            ) : (
                <CounselMobile />
            )}
        </>
    );
}
