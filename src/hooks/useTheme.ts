import { useContext } from "react";
import { ThemeValueContext } from "../contexts/ThemeValueContext";

export function useTheme() {
    const context = useContext(ThemeValueContext);
    return context;
  }