import { useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import UsersCard from './components/UsersCard';
import WaterCard from './components/WaterCard';
import HeroCard from './components/HeroCard';
import EnergyCard from './components/EnergyCard';
import EditProfile from './components/EditProfile';

import { getAuthInfo } from '../../utils/src/home-hub-utils';

export default function App() {

  useEffect(() => {
    const { isAuthenticated } = getAuthInfo();
    if (!isAuthenticated) location.replace('/');
  }, []);

  return (
    <div id='single-spa-application:react-dashboard'>
      {location.pathname.includes('edit-profile') ?
        (<EditProfile />)
        : (
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
                <HeroCard />
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
        )}
    </div>
  );
}