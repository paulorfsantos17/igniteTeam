import { TextInput, View } from 'react-native'

import styled, { css } from 'styled-components/native'

export const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
  `}

  border-radius: 6px;
  padding: 16px;
`

export const InputTextStyle = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_300,
}))`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`
export const Button = styled.TouchableOpacity``
