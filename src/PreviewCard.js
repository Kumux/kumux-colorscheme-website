import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import TimeOfDaySlider from './TimeOfDaySlider';
import LocationPicker from './LocationPicker';
import DatePicker from './DatePicker';
import hljs from 'highlight.js';


const getHighlightedCodeAsHTML = () => {
  const { value } = hljs.highlight('<h1>Hello World!</h1>', {language: 'xml'})

  return value;
}

const StyleCode = styled('code')({
  padding: 8,
  display: 'block',
  height: 300,
});

export const CodePreview = () => {
  return (
    <StyleCode dangerouslySetInnerHTML={{ __html: getHighlightedCodeAsHTML()}} />
  )
}

export default function PreviewCard() {
  return (
    <Card>
      <CodePreview />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Preview
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Configure your Kumux colorscheme preview here
        </Typography>
        <TimeOfDaySlider />
        <LocationPicker />
        <DatePicker />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
