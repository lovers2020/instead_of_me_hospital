import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BannerTextMobile } from "../../components/banner/banner_text_mobile";
import firstImg from "../../assets/dentist5_mobile.jpg";
import secondImg from "../../assets/dentist2_mobile.jpg";
import thirdImg from "../../assets/clinic.jpg";

const imgUrl = [firstImg, secondImg, thirdImg];

const BannerVariants = {
    hidden: (dir: number) => {
        return {
            x: 500 * dir,
            opacity: 0,
        };
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    exit: (dir: number) => {
        return {
            x: -500 * dir,
            opacity: 0,
        };
    },
};
export const PageDots = styled.button<{ index: number }>`
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 50%;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
    &:nth-child(${(props) => props.index + 1}) {
        width: 30px;
        height: 10px;
        border-radius: 5px;
        background-color: #603988;
    }
`;
const Slide = styled(motion.div)<{ url: string }>`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 100%;
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 620px;
    background-image: url(${(props) => props.url});
    cursor: pointer;
`;
export default function MainBannerMobile() {
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
            <Box
                w="100%"
                h="400px"
                position="relative"
                mt="63px"
                backgroundColor="#A8E3EF"
            >
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
                            <BannerTextMobile index={index}></BannerTextMobile>
                        ) : null}
                        <Center
                            position="absolute"
                            bottom="20px"
                            left="50%"
                            ml="-50px"
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
            </Box>
        </>
    );
}
