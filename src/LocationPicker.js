import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormLabel from '@mui/material/FormLabel';
import { StateContext } from "./stateContext";

export default function MultilineTextFields() {
  const { latitude, setLatitude, longitude, setLongitude } = React.useContext(StateContext);

  return (
    <>
      <FormLabel component="legend">Geolocation</FormLabel>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        <TextField
          label="Latitude"
          type="number"
          value={latitude}
          onChange={event => setLatitude(parseFloat(event.target.value))}
        />
        <TextField
          label="Longitude"
          type="number"
          value={longitude}
          onChange={event => setLongitude(parseFloat(event.target.value))}
        />
      </Stack>
    </>
  );
}
