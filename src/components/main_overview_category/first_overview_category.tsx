import { Center, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled.div`
    color: #666;
    cursor: pointer;
    &:hover {
        div {
            border: 5px solid #8b6bae;
            p {
                font-size: 64px;
                transition: 0.2s linear;
            }
            img {
                filter: grayscale(0%);
                scale: 1.3;
                transition: 0.3s linear;
            }
        }

        color: #8b6bae;
    }
`;

export function FirstOverviewCategory() {
    return (
        <>
            <Center mt="100px" gap="30px">
                <Wrapper>
                    <Center
                        w="210px"
                        h="210px"
                        border="1px solid #c1c1c1"
                        fontSize="60px"
                        lineHeight="1"
                        fontWeight="700"
                        flexDir="column"
                    >
                        <p>20</p>
                        <Text fontSize="54px" fontWeight="400">
                            YEARS
                        </Text>
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        치과 진료만 20년 이상
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center
                        w="210px"
                        h="210px"
                        border="1px solid #c1c1c1"
                        fontSize="54px"
                        lineHeight="1"
                        fontWeight="700"
                        flexDir="column"
                    >
                        <Text fontWeight="400">SINCE</Text>
                        <Text fontWeight="700">2003</Text>
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        2003년부터 지켜온 치과
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Image
                            w="70%"
                            h="70%"
                            filter="grayscale(100%)"
                            src={require(`../../assets/hat.jpg`)}
                            alt="학사모"
                        />
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        의학박사
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Image
                            w="100px"
                            filter="grayscale(100%)"
                            src={require(`../../assets/보건복지부_로고.png`)}
                            alt="보건복지부 로고"
                        />
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        치과 전문의
                    </Text>
                </Wrapper>
                <Wrapper>
                    <Center w="210px" h="210px" border="1px solid #c1c1c1">
                        <Image
                            w="100px"
                            filter="grayscale(100%)"
                            src={require(`../../assets/face-chopping.png`)}
                            alt="구강악안면학"
                        />
                    </Center>
                    <Text fontSize="20px" mt="15px" fontWeight="600">
                        구강악안면학 부전공
                    </Text>
                </Wrapper>
            </Center>
        </>
    );
}
