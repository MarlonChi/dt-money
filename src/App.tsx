import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>DT Money</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
