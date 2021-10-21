import RoadMapBase from "../../assets/RoadMapBase.png";
import RoadMapHeader2 from "../../assets/RoadMapHeader2.png";
import styled from "styled-components";
import styles from "./RoadMap.module.scss";
import { Carousel } from "react-bootstrap";

const RoadMapTextWrapper = styled.div`
  background: #f1233c;
  color: white;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const RoadMap = () => {
  return (
    <Carousel fade indicators={false}>
      <Carousel.Item>
        <div className={styles.card1}>
          <div className={styles.textBox}>
            <div className={styles.header}>Alpha Wolves</div>
            <div className={styles.mainText}>
              Release of first 100 Early adopter limited edition werewolves.
              These wolves are the ALPHA's of the Pack and they will have a big
              role to play in deciding what the future holds for WWT. This
              initial launch will also help us test out some of our minting
              software as well as be a good dry run for the initial launch.
            </div>
          </div>
        </div>
        {/* <img className="d-block w-100" src={RoadMapHeader2} alt="First head" />
				<RoadMapTextWrapper>First slide label</RoadMapTextWrapper>
				<img className="d-block w-100" src={RoadMapBase} alt="First slide" /> */}
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card2}>
          <div className={styles.textBox}>
            <div className={styles.header}>We let the dogs out</div>
            <div className={styles.mainText}>
              Once we have finished the development of our minting software and
              Sam our favourite designer has drawn up all the wacky wolves, we
              will "let the dogs out". We plan for a full scale launch of 9900
              wolves, although this number may change depending on if we do any
              more giveaways. However, we aim to not exceed 10,000 total number
              of towns folk. The launch will be one of the most exciting moments
              for not just the team, but also the community and I can't wait to
              announce the big day.
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card3}>
          <div className={styles.textBox}>
            <div className={styles.header}>Transform the world</div>
            <div className={styles.mainText}>
              Naturally, Wolves are the spirit animals of the Werwolves, but did
              you know they also play a pivotal role in the balance of an
              ecosystem as a keystone species. WWT will make donations to a
              verified wolf protection charity and maybe we will even adopt a
              wolf. A percentage of all royalties will go to other environmental
              and social causes that we as a community feel strongly about, and
              charity organisations will be decided by community votes. We
              believe that everyone in the pack has a responsibility to make the
              world better and I am excited to see the wolves change the world.
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card4}>
          <div className={styles.textBox}>
            <div className={styles.header}>More than a virtual world</div>
            <div className={styles.mainText}>
              For us, although a virtual world is great, nothing beats kicking
              back and enjoying a beer with fellow NFT entusiasts. That's why
              WWT will begin organising discord and live events for members
              (drinks on us), these will be regular social events for everyone
              to get to know each other, and take time off from our busy
              schedule. These events will take place across the world and we
              would love it if we could have suggestions for activites from you
              guys We will also be releasing merchandise for the community to
              get their hands on (Hoodies, Tees, Socks, you name it!).
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card5}>
          <div className={styles.textBox}>
            <div className={styles.header}>Bring in the construction crew</div>
            <div className={styles.mainText}>
              Commence the development of our town. Once our virtual town is
              released, all our NFT holders will be the townspeople of Woof
              Town. as a town, we will come together to decide new features we
              want to see in our town square (These include games, fireside
              chats, concerts???). WWT is in this for the long run, and there
              really is no end to our Roadmap. We will continue to create new
              projects, and our members will be with us every step of the way.
              Everyones voice in our community matters, so hop on in and lets
              see where the rabbit hole takes us!
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
