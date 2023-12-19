import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import styled from "styled-components";
import firstImg from "../../../assets/progress-1.jpg";
import secondImg from "../../../assets/progress-2.jpg";
import thirdImg from "../../../assets/progress-3.jpg";
import fourthImg from "../../../assets/progress-4.jpg";
import fifthImg from "../../../assets/progress-5.jpg";
import sixthImg from "../../../assets/progress-6.jpg";

const imgUrl = [firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixthImg];
const imgText = [
    "초진 상담",
    "진단 상담",
    "장치 부착",
    "교정 치료",
    "장치 제거",
    "유지 관리",
];
const ImgBox = styled.div<{ url: string }>`
    width: 175px;
    height: 175px;
    border: 5px solid #8461a9;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.url});
`;
const InnerText = styled.span`
    font-weight: 600;
    color: #603988;
`;

export function Progress() {
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
                        교정치료 진행과정
                    </Heading>
                    <Text
                        textAlign="center"
                        color="#bfbfbf"
                        fontWeight="300"
                        letterSpacing="10px"
                    >
                        ORTHODONTIC PROGRES
                    </Text>

                    <Text fontSize="24px" mt="70px">
                        대한민국 치과는 교정도중
                        <InnerText>
                            의료진의 변경없이 처음부터 끝까지 <br></br>교정
                            전문의 대표원장이 책임지고 치료
                        </InnerText>
                        합니다.
                    </Text>
                    <Flex gap="40px" mt="40px">
                        {imgUrl.map((current, index) => (
                            <>
                                <Center flexDir="column" gap="10px">
                                    <ImgBox url={current}></ImgBox>
                                    <Text fontSize="24px">
                                        {imgText[index]}
                                    </Text>
                                </Center>
                            </>
                        ))}
                    </Flex>
                </Center>
            </Box>
        </>
    );
}
