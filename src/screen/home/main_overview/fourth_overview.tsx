import { Box, Slide, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export function FourthOverView() {
    const { scrollY } = useScroll();
    const [showOverview, SetShowOverview] = useState(false);
    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 2800) {
            SetShowOverview(true);
        } else if (y <= 2600) {
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
                    marginTop: "135px",
                    width: "100%",
                    height: "550px",
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
                        backgroundImage={require("../../../assets/overview-9.jpg")}
                    >
                        <Box
                            position="absolute"
                            top="39%"
                            left="20%"
                            fontWeight="100"
                            flexDir="column"
                            textAlign="start"
                            color="white"
                        >
                            <Text fontSize="48px" fontWeight="500">
                                대한민국치과라면 안심입니다!
                            </Text>
                            <Text margin="20px 0 15px 0" fontSize="24px">
                                대표원장의 오랜 교정치료 경험과 전문적인 의학적
                                지식을 바탕으로<br></br>안전하고 검증된
                                치료방법만을 사용합니다.
                            </Text>
                            <Text
                                color="#bfbfbf"
                                letterSpacing="12px"
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
