import { createContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "../styles/themes/default";

type TypeContextThemeProvider = {
  children: ReactNode;
};

interface ThemeContextProviderProsp {
  handleToggleTheme: () => void;
  theme: boolean;
}

export const ThemeValueContext = createContext({} as ThemeContextProviderProsp);

export function ThemeValueContextProvider({
  children,
}: TypeContextThemeProvider) {
  const [theme, setTheme] = useState(false);

  function handleToggleTheme() {
    setTheme(!theme);
  }

  return (
    <ThemeValueContext.Provider value={{ handleToggleTheme, theme }}>
      <ThemeProvider theme={theme === true ? DarkTheme : LightTheme}>
        {children}
      </ThemeProvider>
    </ThemeValueContext.Provider>
  );
}
