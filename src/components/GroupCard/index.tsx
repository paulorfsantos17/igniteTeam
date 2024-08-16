import React from 'react'
import { Container, Icon, Title } from './styles'
import type { TouchableOpacityProps } from 'react-native'

interface GroupCardProps extends TouchableOpacityProps {
  title: string
}

export default function GroupCard({ title, ...rest }: GroupCardProps) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
