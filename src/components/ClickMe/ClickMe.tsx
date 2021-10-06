import styled from "styled-components";
import { useEffect, useState } from "react";

const LightButton = styled.button`
  display: block;
  background: yellow;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: 0;
`;

const DarkButton = styled.button`
  display: block;
  background: blue;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  margin: 0;
`;


export const ClickMe = ({theme, toggleTheme}: {theme:string, toggleTheme: () => void}) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    currentTheme === 'light'? setCurrentTheme('dark'): setCurrentTheme('light');
  }, [theme]);

  return (
    <>
      {currentTheme === 'dark' && <DarkButton onClick={toggleTheme}/>}
      {currentTheme === 'light' && <LightButton onClick={toggleTheme}/>}
    </>
  )
}