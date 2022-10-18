import styled from "styled-components";

export const Container = styled.div`
  background: ${props=>props.theme.body};
  color: ${(props)=>props.theme.text};
  height: 100vh;
`;