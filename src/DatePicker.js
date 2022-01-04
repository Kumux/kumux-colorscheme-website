import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DatePicker from '@mui/lab/DatePicker';
import { StateContext } from "./stateContext";

export default function CustomDatePicker() {
  const { currentMoment, updateCurrentMoment } = React.useContext(StateContext);

  return (
    <DatePicker
      label="Date"
      value={currentMoment}
      onChange={newValue => updateCurrentMoment(oldValue => newValue.clone())}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
