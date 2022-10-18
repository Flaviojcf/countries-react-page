import { useTheme } from "../../hooks/useTheme";
import { Container, ContainerSwitch } from "./styles";
import Switch from "react-switch";
import { useState } from "react";
export function Header() {
  const { handleToggleTheme } = useTheme();

  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  function handleChange() {
    setIsSwitchChecked(!isSwitchChecked);
  }

  return (
    <Container>
      <h1>Where in the World?</h1>
      <ContainerSwitch onClick={handleToggleTheme}>
        <p>Light Mode</p>
        <Switch
          onChange={handleChange}
          checked={isSwitchChecked}
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
