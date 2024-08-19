import type { TouchableOpacityProps } from 'react-native'
import { Container, Title, type ButtonTypeStylesProp } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type?: ButtonTypeStylesProp
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
