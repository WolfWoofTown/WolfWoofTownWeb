import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
`;

type TogglerPropType = {
  toggleTheme: () => void;
}& DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Toggler = ({ toggleTheme, className }: TogglerPropType) => {
  return <Button className={className} onClick={toggleTheme}>Switch Theme</Button>;
};
