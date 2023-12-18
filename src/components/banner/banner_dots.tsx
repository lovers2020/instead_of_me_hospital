import styled from "styled-components";

export const PageDots = styled.button<{ index: number }>`
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    margin: 0 8px;
    padding: 0;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);

    &:nth-child(${(props) => props.index + 1}) {
        width: 50px;
        height: 15px;
        border-radius: 5px;
        background-color: purple;
    }
`;
