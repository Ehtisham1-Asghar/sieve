import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  width: 100%;
  min-height: 50px;
  background-color: ${p => p.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  a {
    transition: 0.2s;
    &:hover {
      transform: scale(1.03);
    }
  }
  a,
  button {
    color: ${p => p.theme.colors.white};
    padding: 0 20px;
  }
`;
