import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const InnerBox = styled.div<{ index?: number | null }>`
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    width: 33.3%;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    padding: 10px 0;
    &:nth-child(4) {
        border-left: 1px solid #bfbfbf;
    }
    &:nth-child(${(props) => props.index}) {
        background-color: #603988;
        color: white;
    }
`;

export function CommunityMobile() {
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/community" ? 1 : null;
    return (
        <>
            <Box
                position="relative"
                mt="62px"
                w="100%"
                h="210px"
                backgroundSize="cover"
                backgroundImage={require("../../assets/work4.jpg")}
            >
                <Center
                    h="100%"
                    m="auto"
                    justifyContent="space-between"
                    flexDir="column"
                >
                    <Heading
                        mt="30px"
                        fontSize="12px"
                        color="white"
                        letterSpacing="4px"
                        fontWeight="200"
                    >
                        KOREA ORTHODONTIC CLINIC
                    </Heading>
                    <Flex
                        w="100%"
                        justifyContent="center"
                        align="center"
                        backgroundColor="white"
                        fontSize="12px"
                        flexWrap="wrap"
                    >
                        <InnerBox index={index}>교정전후사진</InnerBox>
                        <InnerBox>언론보도</InnerBox>
                        <InnerBox>전문의 칼럼</InnerBox>
                        <InnerBox>치료후기</InnerBox>
                        <InnerBox>병원일상</InnerBox>
                        <InnerBox>공지사항</InnerBox>
                    </Flex>
                </Center>
            </Box>
            <Box h="500px"></Box>
        </>
    );
}
