import { DarkTheme, LightTheme } from "./../styles/themes/default";
import "styled-components";

import { useTheme } from "../hooks/useTheme";



declare module "styled-components" {
  export interface DefaultTheme{
    header:string;
    body: string;
    text: string;
  }
}
