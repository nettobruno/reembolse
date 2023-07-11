import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  background-color: ${(props) => props.isOpen == true && '#117BED'};
  height: ${(props) => props.isOpen == true && '100vh'};
  padding: 50px 20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuItem = styled.a`
  margin: 0.5rem;
  color: #333;
  text-decoration: none;

`;

export const ToggleButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const Navigation = styled.nav`
  margin-top: 40px;
  text-align: center;

  ul {
    list-style: none;
  }

  ul li a {
    color: white;
    font-weight: 500;
    font-size: 24px;
  }

  ul li:not(:last-child) {
    margin-bottom: 50px;
  }

  ul li:last-child {
    margin-bottom: 64px;
  }

  button {
    background-color: transparent;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    margin-bottom: 50px;
  }

  button p {
    color: white;
    padding: 16px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;