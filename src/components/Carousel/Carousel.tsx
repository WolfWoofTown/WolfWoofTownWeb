import styled from "styled-components";
import styles from "./Carousel.module.scss";

interface SingleCardProps {
  count: number;
}

const SingleCard = styled.img<SingleCardProps>`
  display: flex;
  width: calc(100% / ${(props) => props.count});
  background-color: #ffff;
  border-radius: 10px;
  // box-shadow: -0.5rem 0.5rem 3rem #b5e3f5;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
`;
const CarouselWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Carousel = ({ images }: { images: string[] }) => {
  return (
    <CarouselWrapper>
      {images.map((image) => (
        <SingleCard className={styles.card} src={image} count={images.length} />
      ))}
    </CarouselWrapper>
  );
};
