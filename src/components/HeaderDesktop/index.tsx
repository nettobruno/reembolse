import React from 'react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import { Button } from '../Button'
import { Container, MenuItem, Navigation } from './style'

export const HeaderDesktop: React.FC = () => {
  return (
    <Container>
      <Image src={logo} priority={true} alt='Picture of the author' />

      <Navigation>
        <ul>
          <li>
            <MenuItem className='active' href='#'>
              Início
            </MenuItem>
          </li>
          <li>
            <MenuItem href='#'>Sobre nós</MenuItem>
          </li>
          <li>
            <MenuItem href='#'>Serviços</MenuItem>
          </li>
          <li>
            <MenuItem href='#'>Depoimentos</MenuItem>
          </li>
        </ul>
      </Navigation>

      <Button
        size='md'
        type='background'
        onClick={() => console.log('clicou no botão Peça já sua proposta desktop')}
      >
        Peça já sua proposta
      </Button>
    </Container>
  )
}
