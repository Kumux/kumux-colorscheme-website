import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DynamicThemeContext = React.createContext()

export default function DynamicThemeContextProvider({ children }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
