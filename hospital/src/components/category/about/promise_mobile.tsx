import { Box, Center, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";

const InnerText = styled.span`
    font-weight: 600;
    color: #603988;
`;

export function PromiseMobile() {
    return (
        <>
            <Box
                width="100%"
                h="100%"
                position="relative"
                backgroundColor="white"
                py="30px"
            >
                <Center h="100%" m="0 auto" flexDir="column">
                    <Box w="50px" borderBottom="2px solid #603988"></Box>
                    <Heading
                        fontSize="24px"
                        color="#222"
                        my="20px"
                        fontWeight="600"
                    >
                        우리의 약속
                    </Heading>
                    <Text
                        textAlign="center"
                        color="#bfbfbf"
                        fontWeight="300"
                        letterSpacing="4px"
                        fontSize="10px"
                    >
                        OUR PROMISES
                    </Text>
                    <Box
                        position="relative"
                        w="100%"
                        h="180px"
                        my="30px"
                        backgroundSize="cover"
                        backgroundImage={require("../../../assets/dentist6.jpg")}
                    ></Box>
                    <Text
                        fontSize="18px"
                        backgroundColor="white"
                        zIndex="1"
                        px="15px"
                        mb="20px"
                    >
                        <b>환자가 소개</b>하고 <b>의사가 추천</b>하는 치과
                    </Text>
                    <Text fontSize="13px" px="15px">
                        치과치료 시 시설이나 비용보다도 중요한 점은{" "}
                        <InnerText>의료진의 실력과 경험</InnerText>입니다.
                        <br></br>
                        대한민국치과는 지인 소개로 찾아오시는 분들의 비율이 매우
                        높습니다.<br></br>
                        대한민국치과에서는 환자분들께{" "}
                        <InnerText>수준 높은 치료, 정직과 신뢰</InnerText>를
                        약속드립니다.
                    </Text>
                </Center>
            </Box>
        </>
    );
}
