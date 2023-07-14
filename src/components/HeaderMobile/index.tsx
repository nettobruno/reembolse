import React, { useState } from 'react'
import {
  ArrowRight,
  FacebookLogo,
  InstagramLogo,
  List,
  X,
  YoutubeLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import logo from '../../images/logo.png'
import logoLight from '../../images/logo-light.png'
import { Button } from '../Button'
import { Container, Header, ToggleButton, MenuItem, Navigation, SocialIcons } from './style'

export const HeaderMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container $isOpen={isOpen}>
      <Header>
        {isOpen === true ? (
          <Image src={logoLight} priority={true} alt='Picture of the author' />
        ) : (
          <Image src={logo} priority={true} alt='Picture of the author' />
        )}

        <ToggleButton onClick={toggleMenu}>
          {isOpen === true ? <X size={24} color='#ffffff' /> : <List size={24} color='#117BED' />}
        </ToggleButton>
      </Header>

      {isOpen && (
        <Navigation>
          <ul>
            <li>
              <MenuItem href='#'>Início</MenuItem>
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

          <Button type='background' full={true} onClick={() => console.log('clicou no botão Peça já sua proposta')}>
            <p>Peça já sua proposta</p>
            <ArrowRight size={24} color='#ffffff' />
          </Button>

          <SocialIcons>
            <a href='#'>
              <InstagramLogo size={24} color='#ffffff' />
            </a>
            <a href='#'>
              <FacebookLogo size={24} color='#ffffff' />
            </a>
            <a href='#'>
              <YoutubeLogo size={24} color='#ffffff' />
            </a>
          </SocialIcons>
        </Navigation>
      )}
    </Container>
  )
}
