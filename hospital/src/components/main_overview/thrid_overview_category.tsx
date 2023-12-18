import { Center } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
    width: 370px;
    height: 370px;
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
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    color: white;
    background-color: rgba(64, 58, 57, 0.8);
    font-size: 24px;
    transition: all 0.5s;
    ${Container}:hover & {
        height: 100%;
    }
`;
const InnerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 85%;
    ${Container}:hover & {
        span {
            display: none;
        }
        padding: 40px;
        border: 1px solid #c1c1c1;
    }
`;
const InnerText = styled.p`
    font-size: 16px;
    display: none;
    ${Container}:hover & {
        display: block;
    }
`;
export function ThirdOverviewCategory() {
    return (
        <>
            <Center mt="20px" gap="40px">
                <Container>
                    <InnerImg src={require(`../../assets/overview-5.jpg`)} />
                    <Wrapper>
                        <InnerBox>
                            <span style={{ marginTop: "5px" }}>
                                교정전후사진
                            </span>
                            <InnerText style={{ fontSize: "24px" }}>
                                교정전후사진
                            </InnerText>
                            <InnerText
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    height: "60px",
                                }}
                            ></InnerText>
                            <InnerText>
                                교정의 결과! <br></br>사진으로 확인해보세요
                            </InnerText>
                        </InnerBox>
                    </Wrapper>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-6.jpg`)} />
                    <Wrapper>
                        <InnerBox>
                            <span style={{ marginTop: "5px" }}>언론보도</span>
                            <InnerText style={{ fontSize: "24px" }}>
                                언론보도
                            </InnerText>
                            <InnerText
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    height: "60px",
                                }}
                            ></InnerText>
                            <InnerText>
                                언론에서 주목하는 치과<br></br>다양한 매체에서
                                소개합니다.
                            </InnerText>
                        </InnerBox>
                    </Wrapper>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-7.jpg`)} />
                    <Wrapper>
                        <InnerBox>
                            <span style={{ marginTop: "5px" }}>
                                전문의 칼럼
                            </span>
                            <InnerText style={{ fontSize: "24px" }}>
                                전문의 칼럼
                            </InnerText>
                            <InnerText
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    height: "60px",
                                }}
                            ></InnerText>
                            <InnerText>
                                치과에 대한 궁금증을<br></br>해결해보세요!
                            </InnerText>
                        </InnerBox>
                    </Wrapper>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-8.jpg`)} />
                    <Wrapper>
                        <InnerBox>
                            <span style={{ marginTop: "5px" }}>치료후기</span>
                            <InnerText style={{ fontSize: "24px" }}>
                                치료후기
                            </InnerText>
                            <InnerText
                                style={{
                                    borderRight: "1px solid #c1c1c1",
                                    height: "60px",
                                }}
                            ></InnerText>
                            <InnerText>
                                환자분들의 자필 후기를<br></br>경험해보세요!
                            </InnerText>
                        </InnerBox>
                    </Wrapper>
                </Container>
            </Center>
        </>
    );
}
