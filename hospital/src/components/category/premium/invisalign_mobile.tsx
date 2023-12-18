import { Box, Center, Heading, Text } from "@chakra-ui/react";

export function InvisalignMobile() {
    return (
        <>
            <Box
                width="100%"
                h="100%"
                pb="100px"
                position="relative"
                backgroundPosition="top center"
                backgroundSize="cover"
                backgroundColor="white"
                backgroundRepeat="no-repeat"
                backgroundImage={require("../../../assets/premium-1.jpg")}
            >
                <Center
                    maxWidth="1200px"
                    m="auto"
                    flexDir="column"
                    py="50"
                    color="white"
                >
                    <Box w="50px" borderBottom="2px solid black"></Box>
                    <Text mt="10px" fontSize="20px">
                        글로벌 투명 교정장치
                    </Text>
                    <Heading fontSize="24px" fontWeight="600">
                        인비절라인
                    </Heading>
                    <Text fontSize="10px" fontWeight="300" letterSpacing="4px">
                        INVISALIGN
                    </Text>
                </Center>
                <Box m="auto" px="15px">
                    <Box
                        w="150px"
                        h="50px"
                        margin="30px 0 0 50px"
                        backgroundSize="contain"
                        backgroundRepeat="no-repeat"
                        backgroundImage={require("../../../assets/invisalign.png")}
                    ></Box>
                    <Text
                        fontSize="22px"
                        px="15px"
                        color="black"
                        fontWeight="600"
                    >
                        "교정 중에도 활짝 웃으세요"
                    </Text>
                    <Text pl="10px" fontSize="14px" color="rgba(0,0,0,0.6)">
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
