'use client';

import styled from 'styled-components';
import { HeaderMobile } from '../components/HeaderMobile'

const Container = styled.div`
  /* border: 1px solid red; */
`;

export default function Home() {
  return (
    <Container>
      <HeaderMobile />
    </Container>
  )
}
