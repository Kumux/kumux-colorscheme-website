import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import { StateContext } from "./stateContext";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PresetPicker() {
  const { preset, setPreset } = React.useContext(StateContext);

  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Color preset</InputLabel>
        <Select
          value={preset}
          label="Color preset"
          onChange={event => setPreset(event.target.value)}
        >
          <MenuItem value="default">default</MenuItem>
          <MenuItem value="onedark">onedark</MenuItem>
          <MenuItem value="nordbox">nordbox</MenuItem>
          <MenuItem value="dracumux">dracumux</MenuItem>
          <MenuItem value="solarized">solarized</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
