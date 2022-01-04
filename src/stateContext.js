import * as React from 'react'
import moment from 'moment'

export const StateContext = React.createContext()

export default function StateContextProvider({ children }) {
  const [currentMoment, setCurrentMoment] = React.useState(moment())
  const [latitude, setLatitude] = React.useState(41.390205)
  const [longitude, setLongitude] = React.useState(2.154007)

  const updateCurrentMoment = updaterFunction => {
    setCurrentMoment(updaterFunction(currentMoment.clone()))
  }

  const value = {
    updateCurrentMoment, currentMoment,
    latitude, setLatitude,
    longitude, setLongitude,
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}
