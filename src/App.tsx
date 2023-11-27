import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Transactions />
      <GlobalStyle />
    </ThemeProvider>
  );
}