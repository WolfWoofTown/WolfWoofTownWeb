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
          Wolf Woof Town (WWT) is here to create a community, where all can come
          together and be part of the town, helping to grow and shape the
          direction of the town. WWT will be a collection that represents the
          10,000 members in Wolf Town. Each unique character has two sides their
          human form and their Werewolf form.
        </div>
      </div>
      <img src={TopBannerBtm} alt="TopBannerBtm" className={styles.image} />
    </div>
  );
};
