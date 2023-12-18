import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PromiseMobile } from "./about/promise_mobile";

const InnerBox = styled.div<{ index?: number | null }>`
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    width: 33.3%;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    padding: 10px 0;

    &:last-child {
        border-right: none;
    }
    &:nth-child(${(props) => props.index}) {
        background-color: #603988;
        color: white;
    }
`;

export function AboutMobile() {
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/about" ? 1 : null;
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
                    >
                        <InnerBox index={index}>우리의 약속</InnerBox>
                        <InnerBox>진료시간 안내</InnerBox>
                        <InnerBox>인테리어</InnerBox>
                        <InnerBox>오시는길</InnerBox>
                        <InnerBox>주차안내</InnerBox>
                    </Flex>
                </Center>
            </Box>
            <PromiseMobile></PromiseMobile>
        </>
    );
}
