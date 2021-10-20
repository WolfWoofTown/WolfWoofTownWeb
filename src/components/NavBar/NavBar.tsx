import styled from "styled-components";

const TextButton = styled.button`
background: Transparent;
border: none;
color: ${({ theme }) => theme.text};
font: "roboto";
font-weight: 600;
cursor: pointer;
padding: 0.6rem;
font-size: 20px;
line-height: 19px;
transition: all 0.50s;
:hover {
  color: red;
}
}
`;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // background: ${({ theme }) => theme.background};
  // border-radius: 8px;
  display: flex;
  height: 100%;
  margin-top: 60px;
`;

export const NavBar = ({ headers }: { headers: string[] }) => {
  return (
    <NavBarWrapper>
      {headers.map((header) => (
        <TextButton>{header}</TextButton>
      ))}
    </NavBarWrapper>
  );
};
