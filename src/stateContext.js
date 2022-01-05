import * as React from 'react'
import moment from 'moment'
import renderTemplate from "./highlightTemplate";
import debounce from "lodash/debounce";

const API_URL = "https://us-central1-kumux-color-scheme-333812.cloudfunctions.net/getColorScheme"
export const StateContext = React.createContext()

const defaultThemeVariables = {
  "base00-hex": "282c34",
  "base01-hex": "2c323b",
  "base02-hex": "3e4451",
  "base03-hex": "665c54",
  "base04-hex": "928374",
  "base05-hex": "a89984",
  "base06-hex": "d5c4a1",
  "base07-hex": "fdf4c1",
  "base08-hex": "83a598",
  "base09-hex": "a07e3b",
  "base0A-hex": "a07e3b",
  "base0B-hex": "528b8b",
  "base0C-hex": "83a598",
  "base0D-hex": "83a598",
  "base0E-hex": "d75f5f",
  "base0F-hex": "a87322",
}


const callSetNeedsFetch = debounce(setNeedsFetch => setNeedsFetch(true), 400)

export default function StateContextProvider({ children }) {
  const [currentMoment, setCurrentMoment] = React.useState(moment())
  const [latitude, setLatitude] = React.useState(41.390205)
  const [longitude, setLongitude] = React.useState(2.154007)
  const [activeThemeVariables, setActiveThemeVariables] = React.useState(defaultThemeVariables)
  const [needsFetch, setNeedsFetch] = React.useState(true)

  const requestFetch = React.useCallback(() => {
    if (!needsFetch) {
      callSetNeedsFetch(setNeedsFetch)
    }
  }, [setNeedsFetch, needsFetch])

  React.useEffect(() => {
    requestFetch()
  }, [currentMoment, latitude, longitude])

  const highlightStyle = renderTemplate(activeThemeVariables)

  const value = {
    setCurrentMoment, currentMoment,
    latitude, setLatitude,
    longitude, setLongitude,
    highlightStyle,
  }

  if (needsFetch) {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        singleMoment: true,
        kumux: 'website',
        timestamp: currentMoment.unix(),
        dayBackground: '#282c34',
        nightBackground: '#38272c',
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then(response => response.json())
      .then(response => {
        const { themeData } = response;
        const { themeVariables } = themeData;
        const activeHash = Object.keys(themeVariables)[0];
        const newActiveThemeVariables = themeVariables[activeHash];

        setActiveThemeVariables(newActiveThemeVariables);
      })
    setNeedsFetch(false)
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}
