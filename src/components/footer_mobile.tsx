import { Box, Text } from "@chakra-ui/react";
import styled from "styled-components";

const UpperText = styled.span`
    padding: 0 15px;
    border-right: 1px solid #d0d0d0;
    line-height: 1;
    &:hover {
        color: white;
    }
    &:last-child {
        border-right: none;
    }
`;

export function FooterMobile() {
    return (
        <>
            <Box w="100%" backgroundColor="#373737">
                <Box backgroundColor="#4e4e4e">
                    <Box
                        margin="auto"
                        padding="10px 20px"
                        color="#D0D0D0"
                        fontWeight="500"
                        fontSize="10px"
                        cursor="pointer"
                    >
                        <UpperText>대한민국치과 소개</UpperText>
                        <UpperText>찾아오시는 길</UpperText>
                        <UpperText>개인정보취급방침</UpperText>
                    </Box>
                </Box>
                <Box
                    padding="15px 20px"
                    margin="auto"
                    color="#D0D0D0"
                    fontSize="10px"
                >
                    <Text px="15px">경기도 안산시 단원구 1층</Text>
                    <Text px="15px">
                        의료기관명칭 : 대한민국치과교정과치과의원
                        <br></br> 대표자 : 박유현 TEL : 031.111.2222
                        사업자등록번호 : 123-45-678901
                    </Text>

                    <Text px="15px">
                        COPYRIGHT © 2023 대한민국치과교정치과의원 ALL RIGHT
                        RESERVED.
                    </Text>
                </Box>
            </Box>
        </>
    );
}
