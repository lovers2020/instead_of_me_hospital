import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState } from "react";

interface IForm {
    id: string;
    name: string;
    password: string;
    phone: string;
    phone_middle: string;
    phone_last: string;
    title: string;
    contents: string;
    privacy: boolean;
}
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;
`;
const ColumnLeft = styled.div`
    background-color: #f9f7fb;
    width: 35%;
    height: 100%;
    padding: 10px 0;
    text-align: center;
`;
const ColumnRight = styled.div`
    width: 60%;
`;
const Title = styled.span`
    font-size: 12px;
    background-color: #f9f7fb;
`;
const Warn = styled.p`
    position: absolute;
    top: 35px;
    left: 130px;
    color: red;
    font-size: 0.4rem;
    font-weight: 700;
`;
const InputNamePw = styled.input`
    border: 1px solid #c1c1c1;
    margin-left: 10px;
    width: 95%;
    height: 20px;
`;
const InputPhone = styled.input`
    border: 1px solid #c1c1c1;
    margin-left: 10px;
    width: 25%;
    height: 20px;
`;
const SubmitBtn = styled.button`
    width: 90px;
    height: 35px;
    margin-top: 30px;
    border: none;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background-color: #8461a9;
    cursor: pointer;
`;
export function CounselFormMobile() {
    const [personalInfo, setPersonalInfo] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IForm>({
        mode: "onBlur",
        defaultValues: {
            id: "",
            name: "",
            password: "",
            phone: "",
            phone_middle: "",
            phone_last: "",
            title: "",
            contents: "",
            privacy: false,
        },
    });
    function onValid(data: IForm) {
        reset();
    }
    return (
        <>
            <Box
                width="100%"
                h="100%"
                py="50px"
                position="relative"
                backgroundColor="white"
            >
                <Center h="100%" m="0 auto" flexDir="column">
                    <Box w="50px" borderBottom="2px solid #603988"></Box>
                    <Heading
                        fontSize="32px"
                        color="#222"
                        my="10px"
                        fontWeight="600"
                    >
                        온라인 상담
                    </Heading>
                    <Text
                        textAlign="center"
                        color="#bfbfbf"
                        fontWeight="300"
                        fontSize="10px"
                        letterSpacing="4px"
                        mb="40px"
                    >
                        ONLINE CONSULTATION
                    </Text>
                    <form
                        style={{ width: "85%", borderTop: "2px solid black" }}
                        onSubmit={handleSubmit(onValid)}
                    >
                        <Center flexDir="column">
                            <Wrapper>
                                <ColumnLeft>
                                    <Title>작성자</Title>
                                </ColumnLeft>
                                <ColumnRight>
                                    <InputNamePw
                                        type="text"
                                        {...register("name", {
                                            required: "이름을 입력해 주세요.",
                                            minLength: {
                                                value: 2,
                                                message:
                                                    "2글자 이상 입력해 주세요.",
                                            },
                                        })}
                                    ></InputNamePw>
                                </ColumnRight>

                                <Warn>{errors.name?.message}</Warn>
                            </Wrapper>
                            <Wrapper>
                                <ColumnLeft>
                                    <Title>비밀번호</Title>
                                </ColumnLeft>
                                <ColumnRight>
                                    <InputNamePw
                                        type="password"
                                        {...register("password", {
                                            required:
                                                "비밀번호를 입력해 주세요.",
                                            minLength: {
                                                value: 4,
                                                message:
                                                    "4글자 이상 입력해 주세요.",
                                            },
                                        })}
                                    ></InputNamePw>
                                </ColumnRight>

                                <Warn>{errors.password?.message}</Warn>
                            </Wrapper>
                            <Wrapper>
                                <ColumnLeft>
                                    <Title>연락처</Title>
                                </ColumnLeft>
                                <ColumnRight>
                                    <InputPhone
                                        type="number"
                                        {...register("phone", {
                                            required:
                                                "휴대폰 번호를 입력해 주세요.",
                                            maxLength: {
                                                value: 4,
                                                message:
                                                    "4글자 이하로 입력해 주세요",
                                            },
                                        })}
                                    ></InputPhone>
                                    {" - "}
                                    <InputPhone
                                        style={{ margin: "0" }}
                                        type="number"
                                        {...register("phone_middle", {
                                            required:
                                                "휴대폰 번호를 입력해 주세요.",
                                            maxLength: {
                                                value: 4,
                                                message:
                                                    "4글자 이하로 입력해 주세요.",
                                            },
                                        })}
                                    ></InputPhone>
                                    {" - "}
                                    <InputPhone
                                        style={{ margin: "0" }}
                                        type="number"
                                        {...register("phone_last", {
                                            required:
                                                "휴대폰 번호를 입력해 주세요.",
                                            maxLength: {
                                                value: 4,
                                                message:
                                                    "4글자 이하로 입력해 주세요.",
                                            },
                                        })}
                                    ></InputPhone>
                                </ColumnRight>
                                <Warn>
                                    {errors.phone?.message ||
                                        errors.phone_last?.message ||
                                        errors.phone_middle?.message}
                                </Warn>
                            </Wrapper>
                            <Wrapper>
                                <ColumnLeft>
                                    <Title>제목</Title>
                                </ColumnLeft>
                                <ColumnRight>
                                    <InputNamePw
                                        type="text"
                                        {...register("title", {
                                            required: "제목을 입력해 주세요.",
                                            minLength: {
                                                value: 2,
                                                message:
                                                    "2글자 이상 입력해 주세요.",
                                            },
                                        })}
                                    ></InputNamePw>
                                </ColumnRight>

                                <Warn>{errors.title?.message}</Warn>
                            </Wrapper>
                            <Wrapper>
                                <ColumnLeft>
                                    <Title>내용</Title>
                                </ColumnLeft>
                                <ColumnRight>
                                    <textarea
                                        style={{
                                            padding: "0",
                                            width: "100%",
                                            border: "1px solid #c1c1c1",
                                            marginLeft: "10px",
                                            fontFamily: "Pretendard",
                                        }}
                                        {...register("contents", {
                                            required: "내용을 입력해 주세요.",
                                            minLength: {
                                                value: 2,
                                                message:
                                                    "2글자 이상 입력해 주세요.",
                                            },
                                        })}
                                    ></textarea>
                                </ColumnRight>
                            </Wrapper>
                            <Wrapper>
                                <ColumnLeft>
                                    <Title style={{ width: "42.5%" }}>
                                        개인정보 취급방침
                                    </Title>
                                </ColumnLeft>

                                <input
                                    style={{
                                        width: "15px",
                                        margin: "0 10px",
                                        height: "15px",
                                    }}
                                    type="checkbox"
                                    {...register("privacy", {
                                        required:
                                            "개인정보 취급방침에 동의해 주세요.",
                                    })}
                                    onChange={() =>
                                        setPersonalInfo((prev) => !prev)
                                    }
                                ></input>
                                <span style={{ fontSize: "12px" }}>
                                    개인정보 취급방침에 동의
                                </span>
                                <Warn>{errors.privacy?.message}</Warn>
                            </Wrapper>
                            <SubmitBtn
                                type="submit"
                                onSubmit={handleSubmit(onValid)}
                            >
                                확인
                            </SubmitBtn>
                        </Center>
                    </form>
                </Center>
            </Box>
        </>
    );
}
