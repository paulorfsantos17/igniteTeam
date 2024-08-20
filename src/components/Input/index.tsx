import React from 'react'
import { Button, Container, InputTextStyle } from './styles'
import type { TextInputProps, TouchableOpacityProps } from 'react-native'

interface RootProps {
  children: React.ReactNode
}

interface InputTextProps extends TextInputProps {}

interface InputButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

function Root({ children }: RootProps) {
  return <Container>{children}</Container>
}

function InputText({ ...rest }: InputTextProps) {
  return <InputTextStyle {...rest} />
}
function InputButton({ children, ...rest }: InputButtonProps) {
  return <Button {...rest}>{children}</Button>
}

export const Input = { Root, InputText, InputButton }
