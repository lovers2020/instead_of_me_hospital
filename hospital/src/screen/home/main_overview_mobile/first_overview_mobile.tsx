import { Box, Center, Heading, Slide, Text } from "@chakra-ui/react";
import { FirstOverviewCategoryMobile } from "../../../components/main_overview_mobile/first_overview_category_mobile";

export function FirstOverViewMobile() {
    return (
        <>
            <Slide
                in={true}
                direction="bottom"
                transition={{ enter: { duration: 0.5 } }}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    marginTop: "50px",
                }}
            >
                <Box w="100%" h="100%" textAlign="center">
                    <Box margin="0 auto" position="relative" textAlign="center">
                        {/* 글씨 중간에 있는 선 */}
                        <Box
                            w="90%"
                            position="absolute"
                            left="22px"
                            top="15px"
                            borderBottom="1px"
                            borderStyle="solid"
                            borderColor="#c1c1c1"
                        ></Box>
                        <Center
                            width="50%"
                            position="relative"
                            margin="0 auto"
                            backgroundColor="white"
                            fontSize="16px"
                            fontWeight="100"
                            color="#603988"
                        >
                            <Text
                                lineHeight="1.2"
                                px="5px"
                                mr="5px"
                                fontSize="28px"
                                color="white"
                                backgroundColor="#603988"
                                fontWeight="600"
                            >
                                1
                                <em
                                    style={{
                                        fontSize: "16px",
                                        fontWeight: "400",
                                    }}
                                >
                                    %
                                </em>
                            </Text>
                            <Text mr="5px">의</Text>
                            <Text mr="5px" fontWeight="600">
                                프리미엄
                            </Text>
                            의료진
                        </Center>
                        <Text
                            fontWeight="200"
                            letterSpacing="4px"
                            margin="15px 0 30px 0px"
                            fontSize="10px"
                        >
                            KOREA ORTHODONTIC CLINIC
                        </Text>
                    </Box>
                    <Heading
                        color="#444"
                        fontWeight="600"
                        fontSize="14px"
                        mb="10px"
                    >
                        치과 진료만 2003년부터...
                    </Heading>
                    <Text fontSize="12px" color="#444" display="block">
                        연세대 치대 출신 의학박사 치과전문의가 경험을 바탕으로
                        <br></br>
                        환자분들이 만족하실 수 있는 최상의 치료결과를
                        약속드립니다.
                    </Text>
                </Box>
                <FirstOverviewCategoryMobile></FirstOverviewCategoryMobile>
            </Slide>
        </>
    );
}
