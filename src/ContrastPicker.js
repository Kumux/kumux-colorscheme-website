import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import { StateContext } from "./stateContext";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MultilineTextFields() {
  const { dayContrast, setDayContrast, nightContrast, setNightContrast } = React.useContext(StateContext);

  return (
    <>
      <FormLabel component="legend">Contrast settings</FormLabel>
      <FormControl fullWidth>
        <InputLabel>Contrast at night</InputLabel>
        <Select
          value={nightContrast}
          label="Contrast at night"
          onChange={event => setNightContrast(event.target.value)}
        >
          <MenuItem value="1.5">Minimum</MenuItem>
          <MenuItem value="2">Lowest</MenuItem>
          <MenuItem value="3">Lower</MenuItem>
          <MenuItem value="4.5">Low</MenuItem>
          <MenuItem value="6">Medium</MenuItem>
          <MenuItem value="7">High</MenuItem>
          <MenuItem value="9">Higher</MenuItem>
          <MenuItem value="15">Highest</MenuItem>
          <MenuItem value="18">Maximum</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Contrast at day</InputLabel>
        <Select
          value={dayContrast}
          label="Contrast at day"
          onChange={event => setDayContrast(event.target.value)}
        >
          <MenuItem value="1.5">Minimum</MenuItem>
          <MenuItem value="2">Lowest</MenuItem>
          <MenuItem value="3">Lower</MenuItem>
          <MenuItem value="4.5">Low</MenuItem>
          <MenuItem value="6">Medium</MenuItem>
          <MenuItem value="7">High</MenuItem>
          <MenuItem value="9">Higher</MenuItem>
          <MenuItem value="15">Highest</MenuItem>
          <MenuItem value="18">Maximum</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
