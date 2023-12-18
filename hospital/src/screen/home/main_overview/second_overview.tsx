import { Box, Slide, Center, Text, Heading } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { SecondOverviewCategory } from "../../../components/main_overview/second_overview_category";

export function SecondOverview() {
    const { scrollY } = useScroll();
    const [showOverview, SetShowOverview] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 800) {
            SetShowOverview(true);
        } else if (y <= 600) {
            SetShowOverview(false);
        }
    });
    return (
        <>
            <Slide
                in={showOverview}
                direction="bottom"
                transition={{ enter: { duration: 0.5 } }}
                style={{
                    position: "relative",
                    top: "100px",
                    width: "100%",
                    paddingTop: "100px",
                    height: "1000px",
                    backgroundColor: "#454047",
                }}
            >
                <Box position="relative" w="100%" h="100%" textAlign="center">
                    <Box
                        w="1200px"
                        margin="0 auto"
                        position="relative"
                        textAlign="center"
                    >
                        <Box
                            w="100%"
                            position="absolute"
                            top="40px"
                            borderBottom="2px"
                            borderStyle="solid"
                            borderColor="#c1c1c1"
                        ></Box>
                        <Center
                            position="relative"
                            margin="0 auto"
                            w="450px"
                            backgroundColor="#474249"
                            fontSize="40px"
                            fontWeight="100"
                            color="white"
                        >
                            <Text
                                verticalAlign="middle"
                                lineHeight="1em"
                                p="5px 15px 5px 15px"
                                mr="10px"
                                fontSize="74px"
                                color="white"
                                backgroundColor="#1c1c1c"
                                fontWeight="400"
                                position="relative"
                            >
                                P
                            </Text>
                            <Text>REMIUM 치아교정</Text>
                            <Text
                                position="absolute"
                                left="85px"
                                top="-42px"
                                fontSize="48px"
                            >
                                +
                            </Text>
                        </Center>
                        <Text
                            textAlign="center"
                            color="#bfbfbf"
                            fontWeight="200"
                            letterSpacing="12px"
                            margin="10px auto"
                        >
                            PREMIUM ORTHODONTIC CLINIC
                        </Text>
                    </Box>
                    <Heading
                        color="white"
                        fontWeight="400"
                        fontSize="18px"
                        mt="80px"
                        lineHeight="1.6"
                    >
                        지금까지의 치아교정과는 차원이 다른 한 단계 업그레이드
                        된 치아교정,<br></br>
                        프리미엄 치아교정은 치아의 가지런함을 너머 얼굴전체의
                        아름다움을 실현합니다.
                    </Heading>
                    <Text fontSize="18px" color="#444" display="block">
                        연세대 치대 출신 의학박사 치과전문의가 경험을 바탕으로
                        <br></br>
                        환자분들이 만족하실 수 있는 최상의 치료결과를
                        약속드립니다.
                    </Text>
                    <SecondOverviewCategory />
                </Box>
            </Slide>
        </>
    );
}
