import { Box, Grid } from '@mui/material';

import HeroCard from '../components/HeroCard';
import AcCard from '../components/AcCard';

const DevicesScreen = () => {
  return (
    <Box
      width={3 / 4}
      my={4}
      display='flex'
      alignItems='center'
      gap={4}
      p={2}
      sx={{ margin: 'auto' }}
    >
      <Grid container spacing={2}>
        <Grid size={12}>
          <HeroCard title='Dispositos' subtitle='Controle seus dispositivos de perto ou de longe!' />
        </Grid>
        <Grid size={4}>
          <AcCard label='Ar-Condicionado' min={16} max={27} default={20} />
        </Grid>
        <Grid size={4}>
          <AcCard label='Freezer' min={-10} max={5} default={-2} />
        </Grid>
        <Grid size={4}>
          <AcCard label='Geladeira' min={-2} max={10} default={8} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DevicesScreen;