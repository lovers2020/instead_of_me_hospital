import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import styled from "styled-components";

export function FirstOverviewCategoryMobile() {
    return (
        <>
            <Flex
                w="100%"
                margin="15px 0 15px 0"
                px="20px"
                justifyContent="space-between"
            >
                <Center flexDir="column">
                    <Center
                        width="170px"
                        height="170px"
                        border="1px solid #c1c1c1"
                        color="rgba(0,0,0,0.5)"
                        fontSize="56px"
                        lineHeight="0.9"
                        fontWeight="700"
                        flexDir="column"
                    >
                        <p>20</p>
                        <Text fontSize="32px" fontWeight="400">
                            YEARS
                        </Text>
                    </Center>
                    <Text fontSize="14px" mt="15px" fontWeight="600">
                        치과 진료만 20년 이상
                    </Text>
                </Center>

                <Center flexDir="column">
                    <Center
                        width="170px"
                        height="170px"
                        border="1px solid #c1c1c1"
                        color="rgba(0,0,0,0.5)"
                        fontSize="54px"
                        lineHeight="0.9"
                        fontWeight="700"
                        flexDir="column"
                    >
                        <Text fontWeight="400" fontSize="36px">
                            SINCE
                        </Text>
                        <Text fontWeight="700">2003</Text>
                    </Center>
                    <Text fontSize="14px" mt="15px" fontWeight="600">
                        2003년부터 지켜온 치과
                    </Text>
                </Center>
            </Flex>

            <Flex w="100%" px="20px" justifyContent="space-between">
                <Center flexDir="column">
                    <Center
                        width="170px"
                        height="170px"
                        border="1px solid #c1c1c1"
                        color="rgba(0,0,0,0.5)"
                        flexDir="column"
                    >
                        <Image
                            w="100%"
                            h="100%"
                            filter="grayscale(100%)"
                            src={require(`../../assets/yonsei_logo.png`)}
                        />
                    </Center>
                    <Text fontSize="14px" mt="15px" fontWeight="600">
                        연세대학교 / 의학박사
                    </Text>
                </Center>
                <Center flexDir="column">
                    <Center
                        width="170px"
                        height="170px"
                        border="1px solid #c1c1c1"
                        color="rgba(0,0,0,0.5)"
                        flexDir="column"
                    >
                        <Image
                            w="100px"
                            filter="grayscale(100%)"
                            src={require(`../../assets/보건복지부_로고.png`)}
                        />
                    </Center>
                    <Text fontSize="14px" mt="15px" fontWeight="600">
                        치과 전문의
                    </Text>
                </Center>
            </Flex>
        </>
    );
}
