import { createContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../styles/themes/default";

type TypeContextThemeProvider = {
  children: ReactNode;
};

interface ThemeContextProviderProsp {
  handleToggleTheme: () => void;
  theme: boolean;
  handleSelectRegion: (id: string) => void;
  region: string;
}

export const ThemeValueContext = createContext({} as ThemeContextProviderProsp);

export function ThemeValueContextProvider({
  children,
}: TypeContextThemeProvider) {
  const [theme, setTheme] = useState(false);
  const [region, setRegion] = useState("all");


  function handleToggleTheme() {
    setTheme(!theme);
  }

  function handleSelectRegion(id: string) {
   
    if (id === "All") {
      setRegion("/all");
    }else {
    setRegion(`region/${id}`);
    }
  }

  return (
    <ThemeValueContext.Provider
      value={{ handleToggleTheme, theme, handleSelectRegion, region }}
    >
      <ThemeProvider theme={theme === true ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeValueContext.Provider>
  );
}
