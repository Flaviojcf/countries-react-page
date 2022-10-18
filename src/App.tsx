import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeValueContextProvider } from "./contexts/ThemeValueContext";
import { useTheme } from "./hooks/useTheme";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { DarkTheme, LightTheme } from "./styles/themes/default";

function App() {
  return (
    <BrowserRouter>
      <ThemeValueContextProvider>
        <Router />
        <GlobalStyle />
      </ThemeValueContextProvider>
    </BrowserRouter>
  );
}

export default App;
