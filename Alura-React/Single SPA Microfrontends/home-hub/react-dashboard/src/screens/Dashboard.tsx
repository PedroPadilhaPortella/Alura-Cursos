import { Box, Grid } from '@mui/material';

import EnergyCard from '../components/EnergyCard';
import HeroCard from '../components/HeroCard';
import UsersCard from '../components/UsersCard';
import WaterCard from '../components/WaterCard';

import { getAuthInfo } from '@home-hub/react-utils';

export default function DashboardScreen() {
  const { authInfo } = getAuthInfo();

  const heroCardTitle = `Olá, ${!!authInfo.firstName
    ? `${authInfo.firstName} ${authInfo.lastName}`
    : authInfo?.email}!`

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
          <HeroCard title={heroCardTitle} subtitle='Confira as informações da sua casa inteligente!' />
        </Grid>
        <Grid size={3}>
          <UsersCard />
        </Grid>
        <Grid size={5}>
          <WaterCard />
        </Grid>
        <Grid size={4}>
          <EnergyCard currentMonthUsage={90} lastMonthUsage={100} />
        </Grid>
      </Grid>
    </Box>
  );
};
