import styled from "styled-components";

const TextButton = styled.button`
background: Transparent;
border: none;
color: ${({ theme }) => theme.text};
cursor: pointer;
font-size:0.8rem;
padding: 0.6rem;
}
`;

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
