import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Invisalign } from "./premium/invisalign";
import { InvisalignMobile } from "./premium/invisalign_mobile";

const InnerBox = styled.div<{ index?: number | null }>`
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    width: 33.3%;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    padding: 10px 0;

    &:nth-child(3),
    &:last-child {
        border-right: none;
    }
    &:nth-child(${(props) => props.index}) {
        background-color: #603988;
        color: white;
    }
`;

export function PremiumMobile() {
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/premium" ? 1 : null;
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
                        <InnerBox index={index}>인비절라인</InnerBox>
                        <InnerBox>설측교정</InnerBox>
                        <InnerBox>비발치 교정</InnerBox>
                        <InnerBox>성장기 턱교정</InnerBox>
                        <InnerBox>비수술 교정</InnerBox>
                        <InnerBox>수술 교정</InnerBox>
                    </Flex>
                </Center>
            </Box>
            <InvisalignMobile />
        </>
    );
}
