import { Box, Center, Collapse, Flex, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { detailList } from "../../global/project_commin";

export function Category({ title, number, ishover, menu }: any) {
    const [hoverTab, setHoverTab] = useState(false);
    const [tabHeight, setTabHeight] = useState("60px");
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => {
        if (y >= 200) {
            setTabHeight("90px");
        } else {
            setTabHeight("60px");
        }
    });
    return (
        <>
            <Flex
                width="100%"
                textAlign="center"
                flexDir="column"
                align="center"
                justify="center"
                onMouseEnter={() => setHoverTab(true)}
                onMouseLeave={() => setHoverTab(false)}
            >
                <Link to={`/${menu}`} style={{ width: "100%" }}>
                    <Center
                        cursor="pointer"
                        height={tabHeight}
                        width="100%"
                        backgroundColor={hoverTab ? "#8C6AAE" : "white"}
                        transition="0.3s"
                    >
                        <Text
                            fontSize="20px"
                            color={hoverTab ? "white" : "#404041"}
                            fontWeight="600"
                            verticalAlign="middle"
                        >
                            {title}
                        </Text>
                    </Center>
                    <Collapse in={ishover} style={{ width: "100%" }}>
                        <Box
                            margin="10px 0 30px 0"
                            borderRight="1px"
                            borderStyle="solid"
                            borderColor="#c1c1c1"
                        >
                            {detailList[number].map((i, index) => (
                                <Text
                                    key={index}
                                    padding="5px 0"
                                    margin="6px 0"
                                    color="#666"
                                    cursor="pointer"
                                    _hover={{ color: "#8C6AAE" }}
                                >
                                    {i}
                                </Text>
                            ))}
                        </Box>
                    </Collapse>
                </Link>
            </Flex>
        </>
    );
}
