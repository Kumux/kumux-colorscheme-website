import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import moment from 'moment';
import { StateContext } from "./stateContext";
import SunCalc from 'suncalc';

const manipulateMoment = (currentMoment, timeValue) => {
  const manipulatedMoment = currentMoment.clone()
  manipulatedMoment.set({
    hour: Math.floor(timeValue / 60),
    minute: timeValue % 60,
  })

  return manipulatedMoment
}

const valueLabelFormat = currentMoment => timeValue => {
  return manipulateMoment(currentMoment, timeValue).format("HH:mm")
}

export default function TimeOfDaySlider() {
  const { currentMoment, setCurrentMoment, latitude, longitude } = React.useContext(StateContext);
  const { sunrise, sunset, solarNoon } = SunCalc.getTimes(currentMoment.toDate(), latitude, longitude);

  const marks = [
    {
      value: sunrise.getHours() * 60 + sunrise.getMinutes(),
      label: 'Sunrise',
    },
    {
      value: solarNoon.getHours() * 60 + solarNoon.getMinutes(),
      label: 'Noon',
    },
    {
      value: sunset.getHours() * 60 + sunset.getMinutes(),
      label: 'Sunset',
    }
  ];

  return (
    <>
      <Slider
        value={currentMoment.hours() * 60 + currentMoment.minutes()}
        step={5}
        min={0}
        max={24 * 60 - 5}
        valueLabelDisplay="auto"
        marks={marks}
        valueLabelFormat={valueLabelFormat(currentMoment)}
        onChange={event => {
          setCurrentMoment(manipulateMoment(currentMoment, event.target.value).clone())
        }}
      />
      {currentMoment.format()}
    </>
  );
}
