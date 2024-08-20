/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import theme from './src/themes'
import { Loading } from '@components/Loading'
import { StatusBar } from 'react-native'
import { Players } from '@screens/Players'
import { NewGroup } from '@screens/NewGroups'
import { Groups } from '@screens/Groups'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        {fontsLoaded ? <Players /> : <Loading />}
      </ThemeProvider>
    </>
  )
}
