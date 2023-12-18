import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const InnerBox = styled.div<{ index?: number | null }>`
    width: 100%;
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    padding: 8px 30px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;

    &:nth-child(${(props) => props.index}) {
        background-color: #603988;
        color: white;
    }
`;

export function CounselMobile() {
    const location = useLocation().pathname;
    let index: number | null = 0;
    index = location === "/counsel" ? 1 : null;
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
                        backgroundColor="white"
                        w="100%"
                        justifyContent="center"
                        align="center"
                        fontSize="12px"
                    >
                        <InnerBox index={index}>온라인 상담</InnerBox>
                        <InnerBox>카톡 상담</InnerBox>
                    </Flex>
                </Center>
            </Box>
            <Box h="500px"></Box>
        </>
    );
}
