import React from 'react'
import { Container, Icon, Name } from './styles'
import { Button } from '@components/Button'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'

interface PlayerCardProps {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <Button onPress={onRemove} type="ICON" style={{ marginRight: 8 }}>
        <MaterialIcons name="close" color={COLORS.RED_DARK} size={24} />
      </Button>
    </Container>
  )
}
