import { Box, Center, Heading, Text } from "@chakra-ui/react";
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
    width: 75px;
    height: 75px;
    border: 2px solid #8461a9;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.url});
`;
const InnerText = styled.span`
    font-weight: 600;
    color: #603988;
`;

export function ProgressMobile() {
    return (
        <>
            <Box
                width="100%"
                h="100%"
                py="50px"
                position="relative"
                backgroundColor="white"
            >
                <Center h="100%" m="0 auto" flexDir="column">
                    <Box w="50px" borderBottom="2px solid #603988"></Box>
                    <Heading
                        fontSize="32px"
                        color="#222"
                        my="10px"
                        fontWeight="600"
                    >
                        교정 진행과정
                    </Heading>
                    <Text
                        fontSize="10px"
                        textAlign="center"
                        color="#bfbfbf"
                        fontWeight="300"
                        letterSpacing="4px"
                    >
                        ORTHODONTIC PROGRESS
                    </Text>

                    <Text fontSize="14px" mt="40px">
                        대한민국 치과는 교정도중{" "}
                        <InnerText>
                            의료진의 변경없이 처음부터 끝까지 <br></br>교정
                            전문의 대표원장이 책임지고 치료
                        </InnerText>
                        합니다.
                    </Text>
                    <Center
                        maxWidth="250px"
                        gap="10px"
                        mt="40px"
                        flexWrap="wrap"
                    >
                        {imgUrl.map((current, index) => (
                            <Center flexDir="column" gap="10px" key={current}>
                                <ImgBox url={current}></ImgBox>
                                <Text fontSize="14px">{imgText[index]}</Text>
                            </Center>
                        ))}
                    </Center>
                </Center>
            </Box>
        </>
    );
}
