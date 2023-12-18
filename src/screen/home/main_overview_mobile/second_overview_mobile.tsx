import { Box, Slide, Center, Text, Heading } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { SecondOverviewCategoryMobile } from "./../../../components/main_overview_mobile/second_overview_category_mobile";

export function SecondOverviewMobile() {
    const { scrollY } = useScroll();
    const [showOverview, SetShowOverview] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 400) {
            SetShowOverview(true);
        } else if (y <= 300) {
            SetShowOverview(false);
        }
    });
    return (
        <>
            <Slide
                in={showOverview}
                direction="bottom"
                transition={{
                    enter: { duration: 0.5 },
                    exit: { duration: 0.5 },
                }}
                style={{
                    position: "relative",
                    width: "100%",
                    marginTop: "50px",
                    padding: "40px 0",
                    backgroundColor: "#454047",
                }}
            >
                <Box
                    position="relative"
                    w="100%"
                    h="100%"
                    textAlign="center"
                    px="20px"
                >
                    <Box margin="0 auto" position="relative" textAlign="center">
                        <Center
                            position="relative"
                            margin="0 auto"
                            fontSize="40px"
                            fontWeight="100"
                            color="white"
                        >
                            <Text
                                verticalAlign="middle"
                                lineHeight="1em"
                                p="5px 15px 5px 15px"
                                mr="5px"
                                fontSize="36px"
                                color="white"
                                backgroundColor="#1c1c1c"
                                fontWeight="400"
                                position="relative"
                            >
                                P
                            </Text>
                            <Text fontSize="22px">REMIUM 치아교정</Text>
                            <Text
                                position="absolute"
                                left="32%"
                                top="-32px"
                                fontSize="36px"
                            >
                                +
                            </Text>
                        </Center>
                        <Text
                            textAlign="center"
                            color="#bfbfbf"
                            fontWeight="300"
                            letterSpacing="2px"
                            fontSize="12px"
                            margin="10px auto"
                        >
                            PREMIUM ORTHODONTIC CLINIC
                        </Text>
                    </Box>
                    <Heading
                        color="white"
                        fontWeight="300"
                        fontSize="12px"
                        mt="30px"
                    >
                        지금까지의 치아교정과는 차원이 다른 한 단계 업그레이드
                        된 치아교정,<br></br>
                        프리미엄 치아교정은 치아의 가지런함을 너머 <br></br>
                        얼굴전체의 아름다움을 실현합니다.
                    </Heading>

                    <SecondOverviewCategoryMobile />
                </Box>
            </Slide>
        </>
    );
}
