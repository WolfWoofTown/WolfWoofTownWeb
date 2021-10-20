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
              Following this will be the release of the remaining (also super
              cool) Werewolves to the eager community (better get them quick).
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
              As wolves naturally are all werewolves's spirit animal, and they
              also play a pivotal role in the balance of an ecosystem as a
              keystone species. WWT will make a donation to a verified wolf
              protection charity. A percentage of all royalties will go to other
              environmental causes that we as a community feel strongly about,
              and charity organisations will be decided by community votes.
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card3}>
          <div className={styles.textBox}>
            <div className={styles.header}>Transform the world</div>
            <div className={styles.mainText}>
              WWT will begin organising discord and live events for members
              (drinks on us), these will be regular social events for everyone
              to get to know each other, and take time off from our busy
              schedule. We will also be releasing exclusive merchandise for the
              community to get their hands on (Hoodies, Tees, Socks, you name
              it!).
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card4}>
          <div className={styles.textBox}>
            <div className={styles.header}>More than a virtual world</div>
            <div className={styles.mainText}>
              Commence the development of our town. Once our virtual town is
              released, all our NFT holders will be the townspeople of Woof
              Town. as a town, we will come together to decide bi-yearly for new
              features we want in our town square (These include games, fireside
              chats, concerts???).
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.card5}>
          <div className={styles.textBox}>
            <div className={styles.header}>Bring in the construction crew</div>
            <div className={styles.mainText}>
              WWT is in this for the long run, and there really is no end to our
              Roadmap. We will continue to create new projects, and our members
              will be with us every step of the way. Everyones voice in our
              community matters, so hop on in and lets see where the rabbit
              whole takes us!
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
