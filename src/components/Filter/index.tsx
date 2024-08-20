import React from 'react'
import { Container, Title, type FilterStyleProps } from './styles'
import type { TouchableOpacityProps } from 'react-native'

interface FilterProps extends FilterStyleProps, TouchableOpacityProps {
  title: string
}

export function Filter({ isActive = false, title, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
