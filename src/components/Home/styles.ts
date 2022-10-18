import styled from "styled-components";

export const Container = styled.div`
  
  color: ${(props) => props.theme.text};
  height: 100vh;
  transition: all 0.5s linear;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerGroupCountry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100rem;
  height: 40rem;
  gap: 4rem;
  flex-wrap: wrap;
`;

export const ContainerCountry = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 10px 24px 29px 0px rgba(0,0,0,0.75);
  background: ${(props) => props.theme.header};

  width: 24rem;
  height: 30rem;

  > img {
    max-width: 100%;
  }
`;

export const ContainerCountryText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
 

  > p {
    margin-top: 2rem;
    font-weight: bold;
  }

  > span {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
