import styled from 'styled-components'

export const Container = styled.header`
  padding: 30px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Navigation = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }

  ul li {
    list-style: none;
  }
`

export const MenuItem = styled.a`
  color: #868e96;
  font-size: 16px;
  font-weight: 400;

  text-decoration: none;

  &.active {
    color: #117bed;
    font-weight: 500;
  }
`
