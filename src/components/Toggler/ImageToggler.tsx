import styled from "styled-components";


export const ImageToggler = ({ imageOne, imageTwo, theme }: { imageOne: string, imageTwo: string, theme: string }) => {
  const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 500px;
  `;

  const displayImage = theme === "light" ? imageOne : imageTwo;


  return (
    <ImageWrapper src={displayImage} />
  )
};