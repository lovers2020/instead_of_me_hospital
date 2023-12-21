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
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c1c1c1;
    position: relative;
`;
const Title = styled.span`
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding: 20px 0;
    width: 250px;
    height: 100%;
    font-size: 18px;
    background-color: #f9f7fb;
`;
const Warn = styled.p`
    position: absolute;
    top: 50px;
    left: 0px;
    color: red;
    padding-left: 300px;
    font-size: 0.8rem;
    font-weight: 700;
`;
const InputNamePw = styled.input`
    border: 1px solid #c1c1c1;
    margin-left: 30px;
    width: 70%;
    height: 30px;
`;
const InputPhone = styled.input`
    border: 1px solid #c1c1c1;
    margin-left: 30px;
    width: 15%;
    height: 30px;
`;
const SubmitBtn = styled.button`
    width: 100px;
    height: 35px;
    margin-top: 30px;
    border: none;
    font-family: Pretendard;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: #8461a9;
    cursor: pointer;
`;
export function CounselForm() {
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
                py="100px"
                position="relative"
                backgroundColor="white"
            >
                <Center maxWidth="1200px" h="100%" m="0 auto" flexDir="column">
                    <Box w="100px" borderBottom="2px solid #603988"></Box>
                    <Heading
                        fontSize="60px"
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
                        letterSpacing="10px"
                        mb="70px"
                    >
                        ONLINE CONSULTATION
                    </Text>
                    <form
                        style={{ width: "100%", borderTop: "2px solid black" }}
                        onSubmit={handleSubmit(onValid)}
                    >
                        <Center flexDir="column">
                            <Wrapper>
                                <Title>작성자</Title>
                                <InputNamePw
                                    type="text"
                                    {...register("name", {
                                        required: "이름을 입력해 주세요",
                                        minLength: {
                                            value: 2,
                                            message: "2글자 이상 입력해 주세요",
                                        },
                                    })}
                                ></InputNamePw>
                                <Warn>{errors.name?.message}</Warn>
                            </Wrapper>
                            <Wrapper>
                                <Title>비밀번호</Title>
                                <InputNamePw
                                    type="password"
                                    {...register("password", {
                                        required: "비밀번호를 입력해 주세요.",
                                        minLength: {
                                            value: 4,
                                            message:
                                                "4글자 이상 입력해 주세요.",
                                        },
                                    })}
                                ></InputNamePw>
                                <Warn>{errors.password?.message}</Warn>
                            </Wrapper>
                            <Wrapper>
                                <Title>연락처</Title>
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
                                <div style={{ margin: "0 5px" }}>-</div>
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
                                <div style={{ margin: "0 5px" }}>-</div>
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
                                <Warn>
                                    {errors.phone?.message ||
                                        errors.phone_last?.message ||
                                        errors.phone_middle?.message}
                                </Warn>
                                <span
                                    style={{
                                        marginLeft: "10px",
                                        color: "#603988",
                                        fontWeight: "600",
                                    }}
                                >
                                    *빠른 상담을 위해 정확한 번호를 입력해
                                    주세요.
                                </span>
                            </Wrapper>
                            <Wrapper>
                                <Title>제목</Title>
                                <InputNamePw
                                    type="text"
                                    {...register("title", {
                                        required: "제목을 입력해 주세요",
                                        minLength: {
                                            value: 2,
                                            message: "2글자 이상 입력해 주세요",
                                        },
                                    })}
                                ></InputNamePw>
                                <Warn>{errors.title?.message}</Warn>
                            </Wrapper>
                            <Wrapper>
                                <Title
                                    style={{
                                        height: "100%",
                                        padding: "50px 0",
                                    }}
                                >
                                    내용
                                </Title>
                                <textarea
                                    style={{
                                        width: "70%",
                                        height: "80px",
                                        border: "1px solid #c1c1c1",
                                        padding: "5px",
                                        marginLeft: "30px",
                                    }}
                                    {...register("contents", {
                                        required: "내용을 입력해 주세요",
                                        minLength: {
                                            value: 2,
                                            message: "2글자 이상 입력해 주세요",
                                        },
                                    })}
                                ></textarea>
                            </Wrapper>
                            <Wrapper>
                                <Title>개인정보 취급방침</Title>
                                <input
                                    style={{
                                        margin: "0 10px 0 30px",
                                        width: "20px",
                                        height: "20px",
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
                                <span>개인정보 취급방침에 동의</span>
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
