import React from 'react'
import { Container } from './style'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  type?: 'inline' | 'background'
  size?: 'sm' | 'md' | 'lg'
  full?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  type = 'background',
  size = 'lg',
  full = false,
}) => {
  return (
    <Container className={`${type} ${size} ${full && 'full'}`} onClick={onClick}>
      {children}
    </Container>
  )
}
