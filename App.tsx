import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import theme from './src/themes'
import { ActivityIndicator } from "react-native";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  

  return (
  <>
  <ThemeProvider theme={theme}>
    {
      false
      ? <Groups /> 
      : <Loading />
    }
  </ThemeProvider>
  </>
  );
}

