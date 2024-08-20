import React from 'react'
import { BackButton, BackIcon, Container, Logo } from './styles'
import logoImage from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
  showBackButton?: boolean
}

export function Header({ showBackButton }: HeaderProps) {
  const { navigate } = useNavigation()
  function handleGoBack() {
    navigate('groups')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImage} />
    </Container>
  )
}
