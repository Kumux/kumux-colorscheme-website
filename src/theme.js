import * as React from 'react'
import { StateContext } from "./stateContext";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { hsl } from "d3-color";

const DynamicThemeContext = React.createContext()

export default function DynamicThemeContextProvider({ children }) {
  const { activeThemeVariables, skyColor } = React.useContext(StateContext);
  const { l: lightness } = hsl(skyColor)
  const heroTextColor = lightness < 0.4 ? "#E1E1E1" : "#111111"

  const theme = createTheme({
    custom: {
      hero: {
        color: heroTextColor,
      }
    },
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
