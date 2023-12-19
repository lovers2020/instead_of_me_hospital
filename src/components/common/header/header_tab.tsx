import { Flex } from "@chakra-ui/react";
import { Category } from "./category";
import { useState } from "react";
import Logo from "./logo";

interface IHideHeader {
    hideHeader?: number;
}
export function HeaderTab({ hideHeader }: IHideHeader) {
    const [ishover, setIshover] = useState(false);
    return (
        <>
            <nav
                style={{
                    borderTop: "1px solid #c1c1c1 ",
                }}
            >
                <Flex
                    maxWidth="1240px"
                    justifyContent="space-between"
                    margin="auto"
                    align="flex-start"
                    onMouseEnter={() => setIshover(true)}
                    onMouseLeave={() => setIshover(false)}
                >
                    <Logo hideHeader={hideHeader}></Logo>
                    <Category
                        title="병원소개"
                        number={0}
                        ishover={ishover}
                        menu="about"
                    ></Category>
                    <Category
                        title="프리미엄 교정"
                        number={1}
                        ishover={ishover}
                        menu="premium"
                    ></Category>
                    <Category
                        title="치아교정"
                        number={2}
                        ishover={ishover}
                        menu="teeth"
                    ></Category>
                    <Category
                        title="커뮤니티"
                        number={3}
                        ishover={ishover}
                        menu="community"
                    ></Category>
                    <Category
                        title="온라인상담"
                        number={4}
                        ishover={ishover}
                        menu="counsel"
                    ></Category>
                </Flex>
            </nav>
        </>
    );
}
