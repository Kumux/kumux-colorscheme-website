import * as React from 'react'
import moment from 'moment'
import renderTemplate from "./highlightTemplate";
import debounce from "lodash/debounce";
import { scaleLinear } from "d3-scale";
import SunCalc from 'suncalc';

const API_URL = "https://us-central1-kumux-color-scheme-333812.cloudfunctions.net/getColorScheme"
export const StateContext = React.createContext()

const skyColorScale = scaleLinear()
  .domain([0, 1])
  .range(["#000", "#65badb"])

const cloudColorScale = scaleLinear()
  .domain([0, 1])
  .range(["#121417", "#acc0de"])

const cloudShadowColorScale = scaleLinear()
  .domain([0, 1])
  .range(["#10305", "#183550"])




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

const PRESETS = {
  default: {
    dayBackground: '#282c34',
    nightBackground: '#38272c',
  },

  onedark: {
    dayBackground: '#282c34',
    nightBackground: '#38272c',
  },

  nordbox: {
    dayBackground: '#2e3440',
    nightBackground: '#282828',
  },

  dracumux: {
    dayBackground: '#282A37',
    nightBackground: '#372828',
  },

  solarized: {
    dayBackground: '#002b36',
    nightBackground: '#372f28',
  },
}


const callSetNeedsFetch = debounce(setNeedsFetch => setNeedsFetch(true), 400)

export default function StateContextProvider({ children }) {
  const [currentMoment, setCurrentMoment] = React.useState(moment())
  const [latitude, setLatitude] = React.useState(41.390205)
  const [longitude, setLongitude] = React.useState(2.154007)
  const [dayContrast, setDayContrast] = React.useState("6")
  const [nightContrast, setNightContrast] = React.useState("4.5")
  const [preset, setPreset] = React.useState("default")
  const [activeThemeVariables, setActiveThemeVariables] = React.useState(defaultThemeVariables)
  const [needsFetch, setNeedsFetch] = React.useState(true)

  const requestFetch = React.useCallback(() => {
    if (!needsFetch) {
      callSetNeedsFetch(setNeedsFetch)
    }
  }, [setNeedsFetch, needsFetch])

  React.useEffect(() => {
    requestFetch()
  }, [currentMoment, latitude, longitude, preset, dayContrast, nightContrast])

  const highlightStyle = renderTemplate(activeThemeVariables)

  const { altitude } = SunCalc.getPosition(currentMoment, latitude, longitude);
  const normalizedAltitude = Math.min(Math.max(0, altitude), 0.4) / 0.4
  const skyColor = skyColorScale(normalizedAltitude)
  const cloudColor = cloudColorScale(normalizedAltitude)
  const cloudShadowColor = cloudShadowColorScale(normalizedAltitude)

  global.cloudsEffect.resize()
  global.cloudsEffect.setOptions({
    skyColor,
    cloudColor,
    cloudShadowColor,
  })

  const value = {
    activeThemeVariables,
    setCurrentMoment, currentMoment,
    latitude, setLatitude,
    longitude, setLongitude,
    highlightStyle,
    nightContrast, setNightContrast,
    dayContrast, setDayContrast,
    preset, setPreset,
    skyColor,
  }

  if (needsFetch) {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({
        ...PRESETS[preset],
        singleMoment: true,
        kumux: 'website',
        timestamp: currentMoment.unix(),
        geoLocation: {
          latitude,
          longitude,
        },
        contrast: {
          day: parseFloat(dayContrast),
          night: parseFloat(nightContrast),
        },
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
