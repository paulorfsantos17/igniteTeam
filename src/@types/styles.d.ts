import 'styled-components/native'

import theme from 'src/themes'

declare module 'styled-components/native' {
  type ThemeType =  typeof theme;

  export interface DefaultTheme extends ThemeType { }
}