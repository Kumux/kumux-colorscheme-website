import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import TimeOfDaySlider from './TimeOfDaySlider';
import LocationPicker from './LocationPicker';
import DatePicker from './DatePicker';
import ContrastPicker from './ContrastPicker';
import PresetPicker from './PresetPicker';
import { StateContext } from "./stateContext";
import hljs from 'highlight.js';

const CODE_EXAMPLES = {
  "typescript": `class MyClass {
  public static myValue: string;
  constructor(init: string) {
    this.myValue = init;
  }
}
import fs = require("fs");
module MyModule {
  export interface MyInterface extends Other {
    myProperty: any;
  }
}
declare magicNumber number;
myArray.forEach(() => { }); // fat arrow syntax`
}

const getHighlightedCodeAsHTML = () => {
  const { value } = hljs.highlight(CODE_EXAMPLES["typescript"], {language: 'typescript'})

  return value;
}

const StyledCode = styled('code')({
  padding: 8,
  display: 'block',
  height: 300,
});

export const CodePreview = () => {
  return (
    <pre style={{ margin: 0 }}>
      <StyledCode
        className="hljs language-typescript"
        dangerouslySetInnerHTML={{ __html: getHighlightedCodeAsHTML()}}
      />
    </pre>
  )
}

export default function PreviewCard() {
  const { highlightStyle } = React.useContext(StateContext);

  return (
    <Card>
      <style>{highlightStyle}</style>
      <CodePreview />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Preview
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Configure your Kumux colorscheme preview here
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <TimeOfDaySlider />
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={2}>
              <DatePicker />
              <LocationPicker />
              <ContrastPicker />
              <PresetPicker />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
