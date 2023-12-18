import { Center, Text } from "@chakra-ui/react";
import styled from "styled-components";

const Container = styled.div`
    width: 170px;
    height: 170px;
    padding: 0 10px;
    position: relative;
    color: #666;
    cursor: pointer;
    overflow: hidden;
`;
const InnerImg = styled.img`
    width: 100%;
    height: 100%;
    alt: "overview";
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 150px;
    height: 40px;
    color: white;
    background-color: rgba(64, 58, 57, 0.8);
    font-size: 16px;
`;
export function ThirdOverviewCategoryMobile() {
    return (
        <>
            <Center mt="20px">
                <Container>
                    <InnerImg src={require(`../../assets/overview-5.jpg`)} />
                    <Wrapper>
                        <Text>교정전후사진</Text>
                    </Wrapper>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-6.jpg`)} />
                    <Wrapper>
                        <Text>언론보도</Text>
                    </Wrapper>
                </Container>
            </Center>

            <Center mt="20px">
                <Container>
                    <InnerImg src={require(`../../assets/overview-7.jpg`)} />
                    <Wrapper>
                        <Text>전문의 칼럼</Text>
                    </Wrapper>
                </Container>
                <Container>
                    <InnerImg src={require(`../../assets/overview-8.jpg`)} />
                    <Wrapper>
                        <Text>치료후기</Text>
                    </Wrapper>
                </Container>
            </Center>
        </>
    );
}
