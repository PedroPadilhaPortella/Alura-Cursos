import React, { useState } from 'react';

import { Box, Card, CardContent, Slider, Snackbar, Stack, Switch, Typography } from '@mui/material';

function valueText(value: number) {
  return `${value}°C`;
}

interface AcCardProps {
  label: string;
  min: number;
  max: number;
  default: number;
}

const ControlCard: React.FC<AcCardProps> = (props) => {

  const marks = [
    { value: props.min, label: `${props.min}°C` },
    { value: props.max, label: `${props.max}°C` },
  ];

  const [control, setControl] = useState(true);
  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  const switchControl = () => {
    setSnackbarVisibility(true);
    setControl(!control);
  }

  return (
    <Card sx={{ background: '#F5F5F5' }}>
      <CardContent sx={{ marginX: 5, marginY: 2 }}>
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Typography color={'#E65100'}>{props.label}</Typography>
        </Box>
        <Box>
          <Stack direction='row' spacing={1} alignItems='center'>
            <Typography>Off</Typography>
            <Switch defaultChecked inputProps={{ 'aria-label': 'ant design' }}
              onClick={() => switchControl()} />
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
      {snackbarVisibility && (
        <Snackbar
          open={snackbarVisibility}
          autoHideDuration={2000}
          message={`${props.label} ${control ? 'ligado(a)' : 'desligado(a)'}.`}
        />
      )}
    </Card>
  );
};

export default ControlCard;