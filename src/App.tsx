import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/Theme";
import { HomePage } from "./views/HomePage/HomePage";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <HomePage theme={theme} themeToggler={themeToggler} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
