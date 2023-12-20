import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const InnerBox = styled.div<{ index?: number; path?: string }>`
    border-right: 1px solid #bfbfbf;
    border-bottom: 1px solid #bfbfbf;
    width: ${(props) => (props.path === "counsel" ? "100%" : "33.33%")};
    padding: 10px 0;
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;

    &:nth-child(${(props) => (props.path === "premium" ? 3 : null)}) {
        border-right: none;
    }
    &:last-child {
        border-right: none;
    }
    &:nth-child(${(props) => props.index}) {
        border-right: none;
        background-color: #603988;
        color: white;
    }
`;

export function DetailMobile({ list, path }: any) {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        switch (path) {
            case "teeth":
                setNumber(3);
                break;
            case "community":
                setNumber(5);
        }
    }, []);

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
                        flexWrap={path === "premium" ? "wrap" : "nowrap"}
                    >
                        {list.map((i: string, index: number) => (
                            <InnerBox
                                index={number + 1}
                                key={index}
                                onClick={() => setNumber(index)}
                                path={path}
                            >
                                {i}
                            </InnerBox>
                        ))}
                    </Flex>
                </Center>
            </Box>
        </>
    );
}
