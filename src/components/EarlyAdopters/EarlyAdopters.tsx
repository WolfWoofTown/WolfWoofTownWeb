import styles from "./EarlyAdopters.module.scss";
import EarlyAdoptersImage from "../../assets/EarlyAdopters.png";

export const EarlyAdopters = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Early Adopters</div>
      <div className={styles.redBar} />
      <div className={styles.cardWrapper}>
        <img
          className={styles.img}
          src={EarlyAdoptersImage}
          alt={EarlyAdoptersImage}
        />
        <div className={styles.text}>
          We want to reward those who have believed in us from the very
          beginning. As such our first 100 Werewolves will have a special trait
          indicating they are the ALPHA WOLVES. this trait will only be
          available for this special batch. Of course, in the pack the Alpha
          Wolves will also have other exclusive rewards and special privileges
          down the road. These wolves will be released before the main launch
          and will cost just the minting transaction fee.
        </div>
      </div>
    </div>
  );
};
