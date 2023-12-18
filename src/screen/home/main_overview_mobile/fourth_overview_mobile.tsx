import { Box, Slide, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function FourthOverViewMobile() {
    const { scrollY } = useScroll();
    const [showOverview, SetShowOverview] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 1700) {
            SetShowOverview(true);
        } else if (y <= 1500) {
            SetShowOverview(false);
        }
    });
    return (
        <>
            <Slide
                in={showOverview}
                direction="bottom"
                transition={{ enter: { duration: 0.3 } }}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "240px",
                }}
            >
                <Box
                    position="relative"
                    w="100%"
                    h="100%"
                    textAlign="center"
                    backgroundColor="black"
                >
                    <Box
                        backgroundSize="cover"
                        w="100%"
                        h="100%"
                        backgroundImage={require("../../../assets/overview-9_mobile.jpg")}
                    >
                        <Box
                            position="absolute"
                            top="20%"
                            left="15%"
                            fontWeight="300"
                            flexDir="column"
                            textAlign="start"
                            color="white"
                        >
                            <Text fontSize="24px" fontWeight="500">
                                대한민국치과라면 안심입니다!
                            </Text>
                            <Text margin="10px 0 15px 0" fontSize="14px">
                                대표원장의 오랜 교정치료 경험과<br></br>
                                전문적인 의학적 지식을 바탕으로<br></br>안전하고
                                검증된 치료방법만을 사용합니다.
                            </Text>
                            <Text
                                fontSize="10px"
                                color="#bfbfbf"
                                letterSpacing="2px"
                                fontWeight="200"
                            >
                                KOREA ORTHODONTIC CLINIC
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Slide>
        </>
    );
}
