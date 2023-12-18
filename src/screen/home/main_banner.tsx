import { Box, Center } from "@chakra-ui/react";
import { BannerText } from "../../components/banner/banner_text";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import firstImg from "../../assets/dentist5.jpg";
import secondImg from "../../assets/dentist2.jpg";
import thirdImg from "../../assets/clinic.jpg";

const imgUrl = [firstImg, secondImg, thirdImg];

const Btn = styled.svg`
    position: absolute;
    top: 350px;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 2;
    polyline {
        fill: transparent;
        stroke: white;
        stroke-width: 2;
    }
`;
const BannerVariants = {
    hidden: (dir: number) => {
        return {
            x: window.innerWidth * dir,
            opacity: 0,
        };
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    exit: (dir: number) => {
        return {
            x: -window.innerWidth * dir,
            opacity: 0,
        };
    },
};
export const PageDots = styled.button<{ index: number }>`
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
    &:nth-child(${(props) => props.index + 1}) {
        width: 50px;
        height: 15px;
        border-radius: 5px;
        background-color: #603988;
    }
`;
const Slide = styled(motion.div)<{ url: string }>`
    width: 100%;
    position: absolute;
    height: 800px;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.url});
    cursor: pointer;
`;
export default function MainBanner() {
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const [leaving, setLeaving] = useState(false);

    function toggleLeaving() {
        setLeaving((prev) => !prev);
    }
    function onClickNext() {
        if (leaving) return;
        setLeaving(true);
        setDir(1);
        setIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }
    function onClickPrev() {
        if (leaving) return;
        setLeaving(true);
        setDir(-1);
        setIndex((prev) => (prev === 0 ? 2 : prev - 1));
    }
    function changeIndex(pageNumber: number) {
        if (pageNumber > index) setDir(1);
        else setDir(-1);
        setLeaving((prev) => !prev);
        setIndex(pageNumber);
    }
    return (
        <>
            <Box w="100vw" h="800px" position="relative" top="152px">
                <Btn
                    onClick={onClickNext}
                    style={{
                        right: "20%",
                    }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline points="7 2 17 12 7 22"></polyline>
                </Btn>
                <AnimatePresence
                    custom={dir}
                    initial={false}
                    onExitComplete={toggleLeaving}
                >
                    <Slide
                        custom={dir}
                        key={index}
                        variants={BannerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset }) => {
                            if (offset.x >= 300) onClickPrev();
                            else if (offset.x <= -300) onClickNext();
                        }}
                        url={imgUrl[index]}
                    >
                        {index === 0 ? (
                            <BannerText index={index}></BannerText>
                        ) : null}
                        <Center
                            position="absolute"
                            bottom="20px"
                            left="50%"
                            ml="-100px"
                        >
                            <>
                                {[0, 1, 2].map((i) => (
                                    <PageDots
                                        key={i}
                                        index={index}
                                        onClick={() => changeIndex(i)}
                                    ></PageDots>
                                ))}
                            </>
                        </Center>
                    </Slide>
                </AnimatePresence>

                <Btn
                    onClick={onClickPrev}
                    style={{
                        left: "20%",
                    }}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline
                        points="7 2 17 12 7 22"
                        transform="matrix(-1 0 0 1 24 0)"
                    ></polyline>
                </Btn>
            </Box>
        </>
    );
}
