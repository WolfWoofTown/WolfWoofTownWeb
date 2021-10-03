import "./App.css";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyle";
import { lightTheme, darkTheme } from "./styles/Theme";
import { HomePage } from "./views/HomePage/HomePage";
import { useDarkMode } from "./hooks/useDarkMode";
import { Toggler } from "./components/Toggler/Toggler";

import Logo from "./assets/Logos/WWTLogo.png";

function App() {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <img className="Image" src={Logo} alt="button"/>
          <Toggler theme={theme} toggleTheme={themeToggler} />
          <HomePage />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
