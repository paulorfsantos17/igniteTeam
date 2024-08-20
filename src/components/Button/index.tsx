import type { TouchableOpacityProps } from 'react-native'
import { Container, Title, type ButtonTypeStylesProp } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title?: string
  type?: ButtonTypeStylesProp
  children?: React.ReactNode
}

export function Button({
  title,
  children,
  type = 'PRIMARY',
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {title && <Title>{title}</Title>}
      {children && children}
    </Container>
  )
}
