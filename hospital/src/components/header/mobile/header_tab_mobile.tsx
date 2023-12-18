import { IoIosArrowDown } from "react-icons/io";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { CategoryMobile } from "./categoty_mobile";

const Box = styled.div`
    height: 100%;
    #clicked {
        background-color: #84619a;
        color: white;
        svg {
            rotate: 180deg;
        }
    }
`;

const CategoryBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    border-bottom: 1px solid #c1c1c1;
    padding: 10px 20px;
    font-weight: 600;
    &:first-child {
        border-top: 1px solid #c1c1c1;
    }
`;

export function HeaderTabMobile() {
    const [isClicked, setIsClicked] = useState(0);
    return (
        <>
            <Box>
                <CategoryBox
                    onClick={() => setIsClicked((prev) => (prev === 1 ? 0 : 1))}
                    id={isClicked === 1 ? "clicked" : ""}
                >
                    <Text>병원소개</Text>
                    <IoIosArrowDown />
                </CategoryBox>
                <CategoryMobile
                    ishover={isClicked}
                    number={1}
                    path="about"
                ></CategoryMobile>

                <CategoryBox
                    onClick={() => setIsClicked(2)}
                    id={isClicked === 2 ? "clicked" : ""}
                >
                    <Text>프리미엄 교정</Text>
                    <IoIosArrowDown />
                </CategoryBox>
                <CategoryMobile
                    ishover={isClicked}
                    number={2}
                    path="premium"
                ></CategoryMobile>

                <CategoryBox
                    onClick={() => setIsClicked(3)}
                    id={isClicked === 3 ? "clicked" : ""}
                >
                    <Text>치아교정</Text>
                    <IoIosArrowDown />
                </CategoryBox>
                <CategoryMobile
                    ishover={isClicked}
                    number={3}
                    path="teeth"
                ></CategoryMobile>

                <CategoryBox
                    onClick={() => setIsClicked(4)}
                    id={isClicked === 4 ? "clicked" : ""}
                >
                    <Text>커뮤니티</Text>
                    <IoIosArrowDown />
                </CategoryBox>
                <CategoryMobile
                    ishover={isClicked}
                    number={4}
                    path="community"
                ></CategoryMobile>

                <CategoryBox
                    onClick={() => setIsClicked(5)}
                    id={isClicked === 5 ? "clicked" : ""}
                >
                    <Text>온라인상담</Text>
                    <IoIosArrowDown />
                </CategoryBox>
                <CategoryMobile
                    ishover={isClicked}
                    number={5}
                    path="counsel"
                ></CategoryMobile>
            </Box>
        </>
    );
}
