import styled from "styled-components";
import { Toggler } from "../../components/Toggler/Toggler";
import { NavBar } from "../../components/NavBar/NavBar";
import { TopBanner } from "../../components/Banner/TopBanner";
import styles from "./HomePage.module.scss";

import Logo from "../../assets/Logos/WWTLogo.png";
import BaseFinal from "../../assets/Base-Final.jpg";
import BannerDay from "../../assets/Banners/BgDay.png";
import BannerNight from "../../assets/Banners/BgNight.png";
import MobileBannerDay from "../../assets/MobileView/MobileDay.png";
import MobileBannerNight from "../../assets/MobileView/MobileNight.png";

import BoyRound from "../../assets/NFTDisplay/BoyRound.png";
import WolfRound from "../../assets/NFTDisplay/WolfRound.png";
import Team1 from "../../assets/TeamPic/Team1.jpg";
import Team2 from "../../assets/TeamPic/Team2.png";
import Team3 from "../../assets/TeamPic/Team3.png";
import Team4 from "../../assets/TeamPic/Team4.png";

import NFT1 from "../../assets/DisplayNFT/NFT1.png";
import NFT2 from "../../assets/DisplayNFT/NFT2.png";
import NFT3 from "../../assets/DisplayNFT/NFT3.png";
import NFT4 from "../../assets/DisplayNFT/NFT4.png";
import NFT5 from "../../assets/DisplayNFT/NFT5.png";
import NFT6 from "../../assets/DisplayNFT/NFT6.png";

import { Carousel } from "../../components/Carousel/Carousel";
import { RoadMap } from "../../components/RoadMap/RoadMap";
import { Team } from "../../components/Team/Team";
import { EarlyAdopters } from "../../components/EarlyAdopters/EarlyAdopters";
import { SlideToggler } from "../../components/Toggler/SlideToggler";
import { useEffect, useState } from "react";

export const HomePage = ({
  theme,
  themeToggler,
}: {
  theme: string;
  themeToggler: () => void;
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile: boolean = width <= 768;

  const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    width: 100%;
    height: 100%;
  `;
  // const headers = ["Home", "Explore"];
  const headers = [""];
  const images = [NFT1, NFT3, NFT2, NFT6, NFT4, NFT5];
  return isMobile ? (
    <div className={styles.mobileWrapper}>
      <img className={styles.logoMobile} src={Logo} alt="Logo" />
      <SlideToggler toggleTheme={themeToggler} theme={theme} />
      <div className={styles.mainTextMobile}>
        Sorry we are still working on our mobile view, give us a moment to sort
        this out. Please use a computer to view our page in the mean time!
      </div>
      <img
        className={styles.baseBannerMobile}
        src={theme === "light" ? MobileBannerDay : MobileBannerNight}
        alt="Base Banner"
      />
      <div className={styles.redBanner}></div>
    </div>
  ) : (
    <div>
      <div className={styles.headerWrapper}>
        <img className={styles.logo} src={Logo} alt="Logo" />
        <NavBar headers={headers} />
        <SlideToggler toggleTheme={themeToggler} theme={theme} />
      </div>
      <img
        className={styles.baseBanner}
        src={theme === "light" ? BannerDay : BannerNight}
        alt="Base Banner"
      />
      <TopBanner />
      <div
        className={theme === "light" ? styles.storyBgLight : styles.storyBgDark}
      >
        <div className={styles.imageToggleWrapper}>
          <img
            className={styles.toggleImage}
            src={theme === "light" ? BoyRound : WolfRound}
            alt={theme}
          />
          <div className={styles.clickWrapper}>
            <Toggler theme={theme} toggleTheme={themeToggler} />
            <div className={styles.clickText}>
              We wanted to bring to the community something that stands out. As
              such, we decided to design each NFT with both a human and wolf
              version. Our NFTs will be sold as GIFs but users can alternate
              between which form they like. One of our future goals for the
              website is to have a catalouge of all the townsfolk, and of
              course, their inner wolves.
            </div>
          </div>
        </div>
        <div className={styles.textBox}>
          <div className={styles.headerText}>The Story</div>
          <div className={styles.mainTextStory}>
            Everyone has hidden sides to themselves. You have the face you show
            to the world but more importantly the face you show nobody else.
            Woof Town is the community who embraces all sides of who you are.
            This community was formed because we are sick of having to conform
            to how others want us to look and behave, join us and be free of
            judgment, and release your inner wolf 🐺.
          </div>
        </div>
        <div className={styles.filler}></div>
      </div>
      <div className={styles.redBanner}></div>
      <CarouselWrapper>
        <Carousel images={images} />
      </CarouselWrapper>
      {/* <img className={styles.roadMapBanner} src={RoadmapBanner} alt={RoadmapBanner}/> */}
      <div className={styles.roadMapHeaderWrapper}>
        <div className={styles.roadMapHeader}>Roadmap to fullmoon</div>
        <div className={styles.redBar} />
      </div>
      <RoadMap />
      {/* <div className={styles.redBanner}></div> */}
      {/* <EarlyAdopters /> */}
      <Team />
    </div>
  );
};
