import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MenuContent, MenuList, MenuRoot, MenuTrigger } from "./styles";
import { useState } from "react";

export function NavigationMenuContainer() {
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
              <li>
                <p>Africa</p>
              </li>
              <li>
                <p>America</p>
              </li>
              <li>
                <p>Asia</p>
              </li>
              <li>
                <p>Europe</p>
              </li>
              <li>Oceania</li>
            </ul>
            <NavigationMenu.Link />
          </MenuContent>
        </NavigationMenu.Item>
      </MenuList>
    </MenuRoot>
  );
}
