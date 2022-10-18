import { useState } from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeValueContextProvider } from "./contexts/ThemeValueContext";
import { useTheme } from "./hooks/useTheme";
import { Router } from "./Router";
import { queryClient } from "./services/QueryClient";
import { GlobalStyle } from "./styles/global";
import { DarkTheme, LightTheme } from "./styles/themes/default";

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeValueContextProvider>
        <Router />
        <GlobalStyle />
      </ThemeValueContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
