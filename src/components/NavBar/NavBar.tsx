import styled from "styled-components";

const TextButton = styled.button`
background: Transparent;
border: none;
color: ${({ theme }) => theme.text};
cursor: pointer;
padding: 0.6rem;
font-size: 16px;
line-height: 19px;
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
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.background};
  border-radius: 8px;
  display: flex;
  height: 56px;
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
