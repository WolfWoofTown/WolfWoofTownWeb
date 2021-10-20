import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";
import styles from "./Toggler.module.scss";
import ClickNight from "../../assets/ClickNight.png";
import ClickDay from "../../assets/ClickDay.png";

const Button = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin-top: 60px;
  width: 300px;
`;

type TogglerPropType = {
  toggleTheme: () => void;
  theme: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Toggler = ({ toggleTheme, theme, className }: TogglerPropType) => {
  return (
    <Button className={className} onClick={toggleTheme}>
      <img
        className={styles.img}
        src={theme == "light" ? ClickDay : ClickNight}
        alt={theme}
      />
    </Button>
  );
};
