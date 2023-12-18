import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { displayResolution } from "../../global/project_commin";
import { AboutMobile } from "./about_mobile";
import { useState } from "react";

const InnerBox = styled.button<{ index?: number | null }>`
    width: 100%;
    background-color: white;
    border: none;
    border-right: 1px solid #bfbfbf;
    padding: 10px 30px;
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-family: inherit;
    font-size: 20px;
    color: #2e2e2e;

    &:hover {
        background-color: #34343c;
        color: white;
    }
    &:last-child {
        border: none;
    }
    &:nth-child(${(props) => props.index}) {
        background-color: #603988;
        color: white;
    }
`;

export function Detail({ list, path }: any) {
    const [number, setNumber] = useState(0);
    const isWeb = useRecoilValue(displayResolution);

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
                                {list.map((i: any, index: any) => (
                                    <InnerBox
                                        index={number + 1}
                                        key={index}
                                        onClick={() => setNumber(index)}
                                    >
                                        {i}
                                    </InnerBox>
                                ))}
                            </Flex>
                        </Center>
                    </Box>
                </>
            ) : (
                <AboutMobile />
            )}
        </>
    );
}
