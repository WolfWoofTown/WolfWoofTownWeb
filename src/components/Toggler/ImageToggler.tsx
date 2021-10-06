import styled from "styled-components";
import { useEffect, useState } from "react";


export const ImageToggler = ({ lightImage, darkImage, theme }: { lightImage: string, darkImage: string, theme: string }) => {
  const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 500px;
  `;

  const [displayImage, setDisplayImage] = useState(lightImage);

  useEffect(() => {
    displayImage === lightImage ? setDisplayImage(darkImage) : setDisplayImage(lightImage); 
  }, [theme]);
  


  return (
    <ImageWrapper src={displayImage} />
  )
};