import { useState } from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Typography,
} from '@mui/material';

const DoorCard = () => {
  const [selectedDoor, setSelectedDoor] = useState({ door: 'entrada', isOpen: false });
  const [snackbarVisibility, setSnackbarVisibility] = useState(false);

  const toggleDoorStatus = (status: boolean) => {
    setSelectedDoor({ ...selectedDoor, isOpen: status });
    setSnackbarVisibility(true);
  }

  return (
    <Card sx={{ background: '#F5F5F5' }}>
      <CardContent sx={{ marginX: 5, marginY: 2 }}>
        <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
          <Typography color={'#E65100'}>Portas</Typography>
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id='simple-select-label'>Porta</InputLabel>
            <Select
              labelId='simple-select-label'
              id='simple-select'
              value={selectedDoor.door}
              label='Age'
              onChange={({ target }) =>
                setSelectedDoor({ ...selectedDoor, door: target.value.toString() })
              }
            >
              <MenuItem value='entrada'>Entrada</MenuItem>
              <MenuItem value='serviço'>Serviço</MenuItem>
              <MenuItem value='lateral'>Lateral</MenuItem>
              <MenuItem value='lateral'>Garagem</MenuItem>
              <MenuItem value='lateral'>Bunker</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant='contained'
            size='large'
            sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}
            onClick={() => toggleDoorStatus(true)}
          >
            Abrir
          </Button>
          <Button
            variant='contained'
            size='large'
            sx={{ backgroundColor: 'red', marginTop: '20px', marginX: '32px' }}
            onClick={() => toggleDoorStatus(false)}
          >
            Trancar
          </Button>
        </Box>
      </CardContent>
      {snackbarVisibility && (
        <Snackbar
          open={snackbarVisibility}
          autoHideDuration={2000}
          message={`Porta de(a/o) ${selectedDoor.door} ${selectedDoor.isOpen ? 'aberta' : 'fechada'}.`}
        />
      )}
    </Card>
  );
};

export default DoorCard;