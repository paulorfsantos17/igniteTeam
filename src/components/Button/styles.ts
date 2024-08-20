import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStylesProp = 'PRIMARY' | 'SECONDARY' | 'ICON'

interface ButtonStyleProps {
  type: ButtonTypeStylesProp
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  ${({ type }) =>
    type === 'ICON' &&
    css`
      background-color: 'transparent';
    `}

  ${({ theme, type }) =>
    type === 'PRIMARY' &&
    css`
      flex: 1;
      background-color: ${theme.COLORS.GREEN_700};
    `}
  ${({ theme, type }) =>
    type === 'SECONDARY' &&
    css`
      flex: 1;
      background-color: ${theme.COLORS.RED_DARK};
    `}


  max-height: 56px;
  min-height: 56px;

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
