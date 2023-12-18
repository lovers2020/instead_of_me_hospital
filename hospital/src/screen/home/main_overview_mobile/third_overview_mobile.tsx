import { Box, Center, Heading, Slide, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ThirdOverviewCategoryMobile } from "../../../components/main_overview_mobile/thrid_overview_category_mobile";

export function ThirdOverViewMobile() {
    const { scrollY } = useScroll();
    const [showOverview, SetShowOverview] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 1200) {
            SetShowOverview(true);
        } else if (y <= 1000) {
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
                    marginTop: "40px",
                    width: "100%",
                    paddingBottom: "20px",
                }}
            >
                <Box position="relative" w="100%" h="100%" textAlign="center">
                    <Box margin="0 auto" position="relative">
                        <Box
                            w="90%"
                            position="absolute"
                            top="20px"
                            left="22px"
                            margin="0 auto"
                            borderBottom="1px"
                            borderStyle="solid"
                            borderColor="#c1c1c1"
                        ></Box>
                        <Center
                            width="50%"
                            position="relative"
                            margin="0 auto"
                            backgroundColor="white"
                            fontSize="20px"
                            fontWeight="100"
                            color="#603988"
                        >
                            <Text
                                lineHeight="1em"
                                p="4px 8px"
                                fontSize="36px"
                                color="white"
                                backgroundColor="#603988"
                                fontWeight="200"
                            >
                                W
                            </Text>
                            <Text mx="5px">ITH</Text>
                            <Text fontWeight="600">커뮤니티</Text>
                        </Center>
                        <Text
                            fontWeight="200"
                            letterSpacing="5px"
                            fontSize="10px"
                            margin="15px 0 20px "
                        >
                            WITH COMMUNITY
                        </Text>
                    </Box>
                    <Heading
                        color="#444"
                        fontWeight="600"
                        fontSize="14px"
                        mb="15px"
                    >
                        환자, 의료진, 가족이 함께 하는 공간입니다.
                    </Heading>
                    <Text fontSize="12px" color="#444" mb="30px">
                        환자분들이 남겨주신 소중한 후기, 치료사례, 의료진의 컬럼
                        등을 확인해보세요.
                    </Text>
                    <ThirdOverviewCategoryMobile />
                </Box>
            </Slide>
        </>
    );
}
