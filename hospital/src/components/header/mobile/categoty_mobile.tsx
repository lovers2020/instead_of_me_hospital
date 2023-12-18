import { Box, Collapse, Text } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { menuIsClicked } from "../../../global/project_commin";
import { useSetRecoilState } from "recoil";

const detailList = [
    [
        ["우리의 약속"],
        ["진료시간 안내"],
        ["인테리어"],
        ["오시는길"],
        ["주차안내"],
    ],
    [
        ["인비절라인"],
        ["설측교정"],
        ["비발치교정"],
        ["성장기 턱교정"],
        ["비수술교정"],
        ["수술교정"],
    ],
    [
        ["셀프교정진단"],
        ["증상별 교정"],
        ["장치별 교정"],
        ["교정치료 진행과정"],
        ["어린이 교정"],
    ],
    [
        ["교정전후사진"],
        ["언론보도"],
        ["전문의 칼럼"],
        ["치료후기"],
        ["병원일상"],
        ["공지사항"],
    ],
    [["온라인상담"], ["카톡상담"]],
];

export function CategoryMobile({ number, ishover, path }: any) {
    const setIsClicked = useSetRecoilState(menuIsClicked);
    return (
        <>
            <Collapse
                in={ishover === number}
                dir="top"
                style={{
                    width: "100%",
                    backgroundColor: "#ECEBEA",
                    fontSize: "14px",
                }}
            >
                <Box px="20px" py="10px" borderBottom="1px solid #c1c1c1">
                    {detailList[number - 1].map((i, index) => (
                        <Link
                            to={path}
                            onClick={() => setIsClicked(false)}
                            key={index}
                        >
                            <Text
                                padding="5px 0"
                                margin="6px 0"
                                color="#666"
                                cursor="pointer"
                                _hover={{ color: "#8C6AAE" }}
                            >
                                {"- "}
                                {i}
                            </Text>
                        </Link>
                    ))}
                </Box>
            </Collapse>
        </>
    );
}
