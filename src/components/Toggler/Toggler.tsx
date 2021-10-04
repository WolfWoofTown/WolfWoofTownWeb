import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }
`;

type TogglerPropType = {
  theme: string;
  toggleTheme: () => void;
};

export const Toggler = ({ theme, toggleTheme }: TogglerPropType) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};