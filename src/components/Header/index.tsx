import { useTheme } from "../../hooks/useTheme";
import { Container, ContainerSwitch } from "./styles";
import Switch from "react-switch";
import { useState } from "react";
export function Header() {
  const { handleToggleTheme, theme } = useTheme();

  const isChecked = theme;
 

  return (
    <Container>
      <h1>Where in the World?</h1>
      <ContainerSwitch >
        <p>Light Mode</p>
        <Switch
         
          onChange={handleToggleTheme}
          checked={isChecked}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
        />
        <p>Dark Mode</p>
      </ContainerSwitch>
    </Container>
  );
}
