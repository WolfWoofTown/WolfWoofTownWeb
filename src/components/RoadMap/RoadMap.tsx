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
				<img className="d-block w-100" src={RoadMapHeader2} alt="First head" />
				<RoadMapTextWrapper>First slide label</RoadMapTextWrapper>
				<img className="d-block w-100" src={RoadMapBase} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={RoadMapHeader2} alt="First head" />
				<RoadMapTextWrapper>Second slide label</RoadMapTextWrapper>
				<img className="d-block w-100" src={RoadMapBase} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={RoadMapHeader2} alt="First head" />
				<RoadMapTextWrapper>Third slide label</RoadMapTextWrapper>
				<img className="d-block w-100" src={RoadMapBase} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
};
