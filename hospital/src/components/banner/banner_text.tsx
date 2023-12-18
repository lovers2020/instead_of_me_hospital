import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const BannerBox = styled(motion.div)`
    position: absolute;
    top: 25%;
    left: 30%;
`;
const BannerH2 = styled(motion.h2)`
    font-size: 42px;
    color: #333;
    p {
        font-style: italic;
    }
`;
const BannerH1 = styled(motion.h1)`
    font-size: 64px;
    font-weight: 800;
    line-height: 1;
    margin-bottom: 3rem;
    color: #603988;
`;
const BannerH3 = styled(motion.h3)`
    font-size: 28px;
    color: #333;
`;
const BannerVariants = {
    start: { opacity: 0, x: -700 },
    end: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
    exit: { opacity: 0, x: -700 },
};
export function BannerText({ index }: any) {
    return (
        <>
            <AnimatePresence initial={true} key={index}>
                <BannerBox
                    variants={BannerVariants}
                    initial="start"
                    animate="end"
                    exit="exit"
                >
                    <BannerH2 variants={BannerVariants}>
                        <p>Since 2008</p>
                        <span>15년 이상 치아를 지켜온</span>
                    </BannerH2>
                    <BannerH1 variants={BannerVariants}>대한민국치과</BannerH1>
                    <BannerH3 variants={BannerVariants}>
                        - 연세대 출신 의학박사 교정전문의
                    </BannerH3>
                    <BannerH3 variants={BannerVariants}>
                        - 1인 대표원장 1:1 책임진료
                    </BannerH3>
                </BannerBox>
            </AnimatePresence>
        </>
    );
}
