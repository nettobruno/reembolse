'use client'

import styled from 'styled-components'
import { HeaderMobile } from '../components/HeaderMobile'
import { HeaderDesktop } from '../components/HeaderDesktop'

const Container = styled.div``

export default function Home() {
  return (
    <Container>
      <HeaderMobile />
      <HeaderDesktop />
    </Container>
  )
}
