import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({
      theme,
    }: {
      theme: typeof darkTheme | typeof lightTheme;
    }) => theme.body};
    color: ${({ theme }: { theme: typeof darkTheme | typeof lightTheme }) =>
      theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    // transition: all 0.50s linear;
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    -o-transition: all 2s ease;
    -ms-transition: all 2s ease;
    transition: all 2s ease;
  }
  `;
