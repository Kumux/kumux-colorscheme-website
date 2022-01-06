import * as React from 'react';
import ReactDOM from 'react-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AdapterMoment from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';
import DynamicThemeContextProvider from "./theme";
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewCard from "./PreviewCard";
import StateContextProvider from "./stateContext";
import { useTheme } from '@mui/styles';

const DescriptionHeading = () => {
  const theme = useTheme();

  return (
    <Stack spacing={2}>
      <Typography variant="h2" component="h1" style={theme.custom.hero}>
        Kumux colorscheme
      </Typography>
      <Typography variant="h5" component="p" style={theme.custom.hero}>
        Kumux is the world's first dynamic circadian color scheme for code editors and other software.
      </Typography>
      <Stack spacing={2} direction="row">
        <GitHubButton />
        <DownloadForVSCodeButton />
      </Stack>
    </Stack>
  )
}

const DownloadForVSCodeButton = () => {
  const URL = "https://marketplace.visualstudio.com/items?itemName=kumux.kumux-theme"
  return <Button variant="contained" href={URL} >Download for Visual Studio Code</Button>;
}

const URL = "https://github.com/Kumux/kumux-colorscheme-engine"
const GitHubButton = () => {
  return <Button variant="contained" href={URL} startIcon={<GitHubIcon />}>Source Code on GitHub</Button>;
}

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StateContextProvider>
        <DynamicThemeContextProvider>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
            <Stack spacing={20}>
              <DescriptionHeading />
              <PreviewCard />
            </Stack>
          </Container>
        </DynamicThemeContextProvider>
      </StateContextProvider>
    </LocalizationProvider>
  )
}

