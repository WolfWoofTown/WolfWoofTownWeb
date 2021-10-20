import styles from "./Team.module.scss";
import Team1 from "../../assets/TeamPic/Team1.jpg";
import Team2 from "../../assets/TeamPic/Team2.png";
import Team3 from "../../assets/TeamPic/Team3.png";
import Team4 from "../../assets/TeamPic/Team4.png";
import FooterLogo from "../../assets/Footer-Logo.png";
import DiscordIcon from "../../assets/DiscordIcon.png";
import TwitterIcon from "../../assets/TwitterIcon.png";

const TeamCard = ({
  logo,
  name,
  jd,
}: {
  logo: string;
  name: string;
  jd: string;
}) => {
  return (
    <div className={styles.teamCardWrapper}>
      <img className={styles.img} src={logo} alt={logo} />
      <div className={styles.nameText}>@{name}</div>
      <div className={styles.jdText}>{jd}</div>
    </div>
  );
};

export const Team = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Team</div>
      <div className={styles.teamCardsWrapper}>
        <TeamCard logo={Team1} name="Stan" jd="Developer"></TeamCard>
        <TeamCard logo={Team2} name="Steve" jd="Developer"></TeamCard>
        <TeamCard logo={Team3} name="Sam" jd="Designer"></TeamCard>
        <TeamCard logo={Team4} name="Stu" jd="Community Manager"></TeamCard>
      </div>
      <img className={styles.footerImg} src={FooterLogo} alt={FooterLogo} />
      <div className={styles.footerTopText}>©The Wolf Woof Collective</div>
      <div className={styles.footerBtmText}>All Right Reserved 2021</div>
      <div className={styles.iconWrapper}>
        {/* <a href="https://google.com">
          <img className={styles.icons} src={DiscordIcon} alt={DiscordIcon} />
        </a> */}
        <a href="https://twitter.com/wolfwooftownNFT">
          <img className={styles.icons} src={TwitterIcon} alt={TwitterIcon} />
        </a>
      </div>
    </div>
  );
};
