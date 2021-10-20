import styles from "./TopBanner.module.scss";
import TopBannerTop from "../../assets/Banners/TopBannerTop.png";
import TopBannerBtm from "../../assets/Banners/TopBannerBtm.png";

export const TopBanner = () => {
  return (
    <div className={styles.container}>
      <img src={TopBannerTop} alt="TopBannerTop" className={styles.image} />
      <div className={styles.textBox}>
        <div className={styles.headerText}>What is Woof Wolf Town?</div>
        <div className={styles.mainText}>
          Wolf Woof Town (WWT) is here to create a community, where every wolf
          has a say in how the town grows and shapes up. WWT will be a
          collection that represents the 10,000 members in Wolf Town. Every
          character is unique and has two forms: In the day, they are human but
          come sunset the werewolves are set lose. Welcome to the pack!
        </div>
      </div>
      <img src={TopBannerBtm} alt="TopBannerBtm" className={styles.image} />
    </div>
  );
};
