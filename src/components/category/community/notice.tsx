import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const noticeTitle = [
    "12월 진료 안내",
    "11월 휴진 안내",
    "10월 진료 안내",
    "9월 진료 안내",
    "8월 진료 안내",
    "7월 진료 안내",
    "6월 진료 안내",
    "5월 진료 안내",
    "4월 진료 안내",
    "4월 15일(토) ~ 4월 18일(화) 휴진 입니다.",
    "3월 진료 안내",
    "2월 진료 안내",
    "1월 진료 안내",
    "홈페이지를 새로 오픈하였습니다.",
];
const noticeDate = [
    "2023-11-28",
    "2023-10-18",
    "2023-09-18",
    "2023-08-21",
    "2023-07-28",
    "2023-06-15",
    "2023-05-14",
    "2023-04-24",
    "2023-04-12",
    "2023-03-06",
    "2023-02-02",
    "2023-01-22",
    "2022-12-13",
    "2022-11-28",
];
export function Notice() {
    return (
        <>
            <Box
                width="100%"
                h="100%"
                py="100px"
                position="relative"
                backgroundColor="white"
            >
                <Center maxWidth="1200px" h="100%" m="0 auto" flexDir="column">
                    <Box w="100px" borderBottom="2px solid #603988"></Box>
                    <Heading
                        fontSize="60px"
                        color="#222"
                        my="10px"
                        fontWeight="600"
                    >
                        공지사항
                    </Heading>
                    <Text
                        textAlign="center"
                        color="#bfbfbf"
                        fontWeight="300"
                        letterSpacing="10px"
                    >
                        NEWS & NOTICE
                    </Text>
                    <Box w="100%" borderTop="2px solid black" mt="80px">
                        <Flex
                            justify="space-between"
                            p="20px 30px"
                            w="100%"
                            fontSize="20px"
                            borderBottom="1px solid black"
                            textAlign="center"
                        >
                            <Text>번호</Text>
                            <Text w="55%">제목</Text>
                            <Text>등록일</Text>
                            <Text>조회수</Text>
                        </Flex>
                        {noticeTitle.map((current, index) => (
                            <Flex
                                justify="space-between"
                                p="20px 30px"
                                w="100%"
                                fontSize="18px"
                                borderBottom="1px solid #c1c1c1"
                                textAlign="start"
                                alignItems="center"
                                _hover={{
                                    backgroundColor: "#F9F7FB",
                                }}
                            >
                                <Text w="20px" px="10px">
                                    {index}
                                </Text>
                                <Text w="60%" px="10px">
                                    {current}
                                </Text>
                                <Text w="110px">{noticeDate[index]}</Text>
                                <Text w="40px">
                                    {Math.ceil(Math.random() * 300)}
                                </Text>
                            </Flex>
                        ))}
                    </Box>
                </Center>
            </Box>
        </>
    );
}
