import { Center, Text } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
    width: 375px;
    height: 490px;
    position: relative;
    color: #666;
    cursor: pointer;
    overflow: hidden;
`;
const InnerImg = styled.img`
    width: 100%;
    height: 100%;
    alt: "overview";
    transition: scale 0.5s;
    ${Container}:hover & {
        scale: 1.1;
    }
`;
const InnerBox = styled.div`
    position: absolute;
    top: 35%;
    left: 20px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 44px;
    text-align: start;
`;
const InnerText = styled.p`
    position: absolute;
    top: 22px;
    left: 13px;
    font-size: 32px;
    font-weight: 100;
`;

export function SecondOverviewCategory() {
    return (
        <>
            <Center mt="20px" gap="40px">
                <Container>
                    <InnerImg src={require(`../../assets/overview-1.jpg`)} />
                    <InnerBox>
                        <Text>P</Text>
                        <InnerText>+</InnerText>
                        <Text fontSize="24px" fontWeight="600">
                            얼굴과학
                        </Text>
                        <Text fontSize="16px" pl="2px" mt="5px">
                            얼굴전체의 균형과<br></br>조화를 고려하여
                            <br></br>치료합니다.
                        </Text>
                    </InnerBox>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-2.jpg`)} />
                    <InnerBox style={{ top: "58%", color: "white" }}>
                        <Text>P</Text>
                        <InnerText>+</InnerText>
                        <Text fontSize="24px" fontWeight="600">
                            비발치교정
                        </Text>
                        <Text fontSize="16px" pl="2px" mt="5px">
                            소중한 치아,<br></br>뽑지말고 교정 받으세요.
                        </Text>
                    </InnerBox>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-3.jpg`)} />
                    <InnerBox>
                        <Text>P</Text>
                        <InnerText>+</InnerText>
                        <Text fontSize="24px" fontWeight="600">
                            Natural 돌출입 교정
                        </Text>
                        <Text fontSize="16px" pl="2px" mt="5px">
                            자연스러운 얼굴이,<br></br>가장 아름답습니다.
                        </Text>
                    </InnerBox>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-4.jpg`)} />
                    <InnerBox style={{ top: "58%" }}>
                        <Text>P</Text>
                        <InnerText>+</InnerText>
                        <Text fontSize="24px" fontWeight="600">
                            인비절라인
                        </Text>
                        <Text fontSize="16px" pl="2px" mt="5px">
                            겉으로 보이지 않아,<br></br>비밀스러운 교정이
                            가능합니다.
                        </Text>
                    </InnerBox>
                </Container>
            </Center>
        </>
    );
}
