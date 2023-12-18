import { Box, Center, Heading, Slide, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ThirdOverviewCategory } from "../../../components/main_overview/thrid_overview_category";

export function ThirdOverView() {
    const { scrollY } = useScroll();
    const [showOverview, SetShowOverview] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 1800) {
            SetShowOverview(true);
        } else if (y <= 1600) {
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
                    top: "200px",
                    width: "100%",
                    height: "900px",
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
                            w="380px"
                            backgroundColor="white"
                            px="20px"
                            fontSize="40px"
                            fontWeight="100"
                            color="#603988"
                        >
                            <Text
                                verticalAlign="middle"
                                lineHeight="1em"
                                px="10px"
                                fontSize="78px"
                                color="white"
                                backgroundColor="#603988"
                                fontWeight="300"
                            >
                                W
                            </Text>
                            <Text mx="10px">ITH</Text>
                            <Text fontWeight="600" mr="10px">
                                커뮤니티
                            </Text>
                        </Center>
                        <Text
                            color="#bfbfbf"
                            fontWeight="200"
                            letterSpacing="12px"
                            margin="15px 0 60px 50px"
                        >
                            WITH COMMUNITY
                        </Text>
                    </Box>
                    <Heading
                        color="#444"
                        fontWeight="600"
                        fontSize="22px"
                        mb="30px"
                    >
                        환자, 의료진, 가족이 함께 하는 공간입니다.
                    </Heading>
                    <Text fontSize="18px" color="#444" mb="60px">
                        환자분들이 남겨주신 소중한 후기, 치료사례, 의료진의 컬럼
                        등을 확인해보세요.
                    </Text>
                    <ThirdOverviewCategory />
                </Box>
            </Slide>
        </>
    );
}
