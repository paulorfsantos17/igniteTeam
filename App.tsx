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

import { Routes } from '@routes/index'

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
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </>
  )
}
