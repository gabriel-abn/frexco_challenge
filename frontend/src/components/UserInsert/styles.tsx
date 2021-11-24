import styled from "styled-components";

interface IProps {
    direction?: string;
}

export const MainDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: ${(props: IProps) => (props.direction ? "row" : "column")};
    margin: 5vh;
    padding: 5vh 30vw;
    justify-content: space-between;

    border-radius: 5px;
    z-index: 5;

    background: #a8dadc;
`;
