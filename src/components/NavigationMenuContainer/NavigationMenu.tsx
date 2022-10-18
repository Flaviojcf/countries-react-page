import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MenuContent, MenuList, MenuRoot, MenuTrigger } from "./styles";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

export function NavigationMenuContainer() {
  const { handleSelectRegion } = useTheme();
  const AllRegions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <MenuRoot>
      <MenuList>
        <NavigationMenu.Item>
          <MenuTrigger>
            <p>Filter By Region</p>
            <img src="icon-arrow-down.svg" />
          </MenuTrigger>
          <MenuContent>
            <ul className="Feature">
              {AllRegions.map((region) => {
                return (
                  <li key={region} onClick={() => handleSelectRegion(region)}>
                    {region}
                  </li>
                );
              })}
            </ul>
            <NavigationMenu.Link />
          </MenuContent>
        </NavigationMenu.Item>
      </MenuList>
    </MenuRoot>
  );
}
