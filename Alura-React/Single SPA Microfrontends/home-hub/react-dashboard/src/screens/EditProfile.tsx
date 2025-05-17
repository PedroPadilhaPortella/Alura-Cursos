import { Box, Grid } from '@mui/material';

import EditProfile from '../components/EditProfile';

export default function EditProfileScreen() {
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
      <EditProfile />
    </Box>
  );
};
