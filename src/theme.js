import * as React from 'react'
import { StateContext } from "./stateContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DynamicThemeContext = React.createContext()

export default function DynamicThemeContextProvider({ children }) {
  const { activeThemeVariables } = React.useContext(StateContext);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: `#${activeThemeVariables["base00-hex"]}`,
        paper: `#${activeThemeVariables["base01-hex"]}`,
      },
      primary: {
        main: `#${activeThemeVariables["base08-hex"]}`,
      },
      secondary: {
        main: `#${activeThemeVariables["base09-hex"]}`,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
