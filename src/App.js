import * as React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DynamicThemeContextProvider from "./theme";

const DescriptionHeading = () => {
  return (
    <>
      <Typography variant="h2" component="h1" >
        Kumux colorscheme
      </Typography>
      <Typography variant="h5" component="p" >
        Kumux is the world's first dynamic circadian color scheme for code editors and other software.
      </Typography>
    </>
  )
}

const DownloadForVSCodeButton = () => {
  const URL = "https://marketplace.visualstudio.com/items?itemName=kumux.kumux-theme"
  return <Button variant="contained" href={URL} >Download for Visual Studio Code</Button>;
}

export default function App() {
  return (
    <DynamicThemeContextProvider>
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <DescriptionHeading />
        <DownloadForVSCodeButton />
      </Container>
    </DynamicThemeContextProvider>
  )
}

