import styled from "styled-components";
import { Toggler } from "../../components/Toggler/Toggler";
import { NavBar } from "../../components/NavBar/NavBar";
import { TopBanner } from "../../components/Banner/TopBanner";
import styles from "./HomePage.module.scss";

import Logo from "../../assets/Logos/WWTLogo.png";
import BaseFinal from "../../assets/Base-Final.jpg";
import BannerDay from "../../assets/Banners/BgDay.png";
import BannerNight from "../../assets/Banners/BgNight.png";
import StoryBgDay from "../../assets/StoryBgDay.png";
import StoryBgNight from "../../assets/StoryBgNight.jpeg";
import BoyRound from "../../assets/NFTDisplay/BoyRound.png";
import WolfRound from "../../assets/NFTDisplay/WolfRound.png";

import { Carousel } from "../../components/Carousel/Carousel";

export const HomePage = ({
  theme,
  themeToggler,
}: {
  theme: string;
  themeToggler: () => void;
}) => {
  const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    width: 100%;
    height: 100%;
  `;
  const headers = ["Home", "Explore"];
  const images = [Logo, Logo, Logo, BaseFinal, BaseFinal, BaseFinal];
  return (
    <div>
      <div className={styles.headerWrapper}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <NavBar headers={headers} />
        <Toggler toggleTheme={themeToggler} />
      </div>
      <img
        className={styles.baseBanner}
        src={theme === "light" ? BannerDay : BannerNight}
        alt="Base Banner"
      />
      <TopBanner />
      <div className={styles.imageToggleWrapper}>
        <img
          className={styles.toggleImage}
          src={theme === "light" ? BoyRound : WolfRound}
          alt={theme}
        />
        <Toggler toggleTheme={themeToggler} />
      </div>
      <img
        className={styles.storyBg}
        src={theme === "light" ? StoryBgDay : StoryBgNight}
        alt="Story Background"
      />
      <CarouselWrapper>
        <Carousel images={images} />
      </CarouselWrapper>
      HomePage
      {/* <ImageToggler
        lightImage={lightImage}
        darkImage={darkImage}
        theme={theme}
      /> */}
    </div>
  );
};
