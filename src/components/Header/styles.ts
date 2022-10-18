import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    background: ${(props)=>props.theme.header};
    color: ${(props)=>props.theme.text};
    width: 100%;
    transition: all 0.50s linear;
`;

export const ContainerSwitch = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`;