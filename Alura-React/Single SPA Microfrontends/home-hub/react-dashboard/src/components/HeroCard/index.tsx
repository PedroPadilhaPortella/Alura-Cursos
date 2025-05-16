import { Box, Typography, CardContent, Card } from '@mui/material';

import VisaoGeral from '../../assets/visao-geral.png';

import { getAuthInfo } from '../../../../utils/src/home-hub-utils';

const HeroCard = () => {
  const { authInfo } = getAuthInfo();

  return (
    <Card sx={{ background: '#FFF3E0' }}>
      <CardContent>
        <Box
          display={'flex'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
        >
          <Box>
            <Typography variant='h5'>
              Olá, {!!authInfo.firstName ? `${authInfo.firstName} ${authInfo.lastName}` : authInfo?.email}!
            </Typography>
            <Typography>Confira as informações da sua casa inteligente!</Typography>
          </Box>
          <img src={VisaoGeral} alt='Visão Geral' height={140} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeroCard;