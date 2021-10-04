import styled from "styled-components";
import { Toggler } from "../../components/Toggler/Toggler";
import { NavBar } from "../../components/NavBar/NavBar";
import { ImageToggler } from "../../components/Toggler/ImageToggler";

import Logo from "../../assets/Logos/WWTLogo.png";
import Banner from "../../assets/Banner-Twitter.png";
import lightImage from "../../assets/NFTDisplay/lightMode.png";
import darkImage from "../../assets/NFTDisplay/darkMode.png";

export const HomePage = ({
  theme,
  themeToggler,
}: {
  theme: string;
  themeToggler: () => void;
}) => {
  const LogoWrapper = styled.img`
    width: 100px;
    height: 100px;
    margin: 30px;
  `;

  const BannerWrapper = styled.img`
    width: 100%;
    height: 100%;
  `;

  const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button:last-of-type {
      margin-left: auto;
      margin-right: 10px;
    }
  `;
  const headers = ["Home", "Explore"];
  return (
    <div>
      <HeaderWrapper>
        <LogoWrapper src={Logo} />
        <NavBar headers={headers} />
        <Toggler theme={theme} toggleTheme={themeToggler} />
      </HeaderWrapper>
      <BannerWrapper src={Banner} />
      HomePage
      <ImageToggler imageOne={lightImage} imageTwo={darkImage} theme={theme} />
    </div>
  );
};
