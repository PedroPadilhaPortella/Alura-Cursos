import React from 'react';

import { Card, CardContent, Stack, Switch, Typography } from '@mui/material';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valueText(value: number) {
  return `${value}°C`;
}

interface AcCardProps {
  label: string;
  min: number;
  max: number;
  default: number;
}

const AcCard: React.FC<AcCardProps> = (props) => {

  const marks = [
    { value: props.min, label: `${props.min}°C` },
    { value: props.max, label: `${props.max}°C` },
  ];

  return (
    <Card sx={{ background: '#F5F5F5' }}>
      <CardContent sx={{ marginX: 5, marginY: 2 }}>
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Typography color={'#E65100'}>{props.label}</Typography>
        </Box>
        <Box>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography>Off</Typography>
            <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>On</Typography>
          </Stack>
          <Slider
            defaultValue={props.default}
            getAriaValueText={valueText}
            valueLabelDisplay='auto'
            marks={marks}
            min={props.min}
            max={props.max}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AcCard;