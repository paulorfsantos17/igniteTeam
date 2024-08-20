import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

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
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`
