import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const MenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  padding: 0 2rem;
  position: absolute;
  margin-top: -50rem;
  margin-left: 62rem;
`;

export const MenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 1rem;
  width: 12rem;
  text-decoration: none;
  list-style: none;
`;

export const MenuTrigger = styled(NavigationMenu.Trigger)`
  border: none;
  background: ${props=>props.theme.header};
  color: ${props=>props.theme.text};
  width: 15rem;
  height: 4.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-family: 'Epilogue', sans-serif;
  font-size: 16px;
  cursor: pointer;
  > p:hover {
  }
`;

export const MenuContent = styled(NavigationMenu.Content)`
  position: absolute;

  .Feature {
    width: 15rem;
  }

  > ul {
    box-shadow: 10px 23px 39px -17px rgba(0, 0, 0, 0.75);
    list-style: none;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    justify-content: center;
    background: ${props=>props.theme.header};
    gap: 1rem;
    margin-top: 1rem;

    > li {
      display: flex;
      gap: 1rem;
      cursor: pointer;

      &:hover {
        font-weight: bold;
      }
    }
  }
`;