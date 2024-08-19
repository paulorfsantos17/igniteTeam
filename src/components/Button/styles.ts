import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type ButtonTypeStylesProp = 'PRIMARY' | 'SECONDARY'

interface ButtonStyleProps {
  type: ButtonTypeStylesProp
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
