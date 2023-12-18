import { Box, Center, Heading, Text } from "@chakra-ui/react";

export function Invisalign() {
    return (
        <>
            <Box
                width="100%"
                h="1000px"
                position="relative"
                backgroundPosition="top center"
                backgroundColor="white"
                backgroundRepeat="no-repeat"
                backgroundImage={require("../../../assets/premium-1.jpg")}
            >
                <Center
                    maxWidth="1200px"
                    m="auto"
                    flexDir="column"
                    py="100"
                    color="white"
                >
                    <Box w="100px" borderBottom="2px solid black"></Box>
                    <Text mt="40px" fontSize="30px">
                        글로벌 투명 교정장치
                    </Text>
                    <Heading fontSize="60px" fontWeight="600">
                        인비절라인
                    </Heading>
                    <Text
                        color="#222"
                        fontWeight="300"
                        letterSpacing="14px"
                        ml="8px"
                    >
                        INVISALIGN
                    </Text>
                </Center>
                <Box maxWidth="1200px" m="auto">
                    <Box
                        w="250px"
                        h="50px"
                        backgroundRepeat="no-repeat"
                        backgroundImage={require("../../../assets/invisalign.png")}
                        my="40px"
                    ></Box>
                    <Text
                        fontSize="48px"
                        px="15px"
                        color="black"
                        fontWeight="600"
                    >
                        "교정 중에도 활짝 웃으세요"
                    </Text>
                    <Text pl="10px" fontSize="24px" color="rgba(0,0,0,0.6)">
                        대한민국치과는 인비절라인 코리아 공식 지정
                        협력병원입니다.<br></br>
                        대한민국치과의 인비절라인으로 자신있게 교정치료
                        받으세요!
                    </Text>
                </Box>
            </Box>
        </>
    );
}
