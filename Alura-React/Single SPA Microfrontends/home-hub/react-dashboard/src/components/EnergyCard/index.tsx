import { Box, Typography, Paper } from '@mui/material';
import EnergyIcon from '@mui/icons-material/FlashOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const EnergyCard = ({ currentMonthUsage, lastMonthUsage }) => {
  const usageDifference = currentMonthUsage - lastMonthUsage;
  const isIncreased = usageDifference > 0;

  return (
    <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#F5F5F5' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <EnergyIcon sx={{ color: '#1E88E5', fontSize: 40 }} />
        <Typography variant="h6" color="textSecondary">
          Consumo de Energia
        </Typography>
      </Box>
      <Typography variant="h4" sx={{ textAlign: 'center', my: 2 }}>
        {currentMonthUsage} kWh
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center">
        {isIncreased ? (
          <ArrowUpwardIcon color="error" />
        ) : (
          <ArrowDownwardIcon color="success" />
        )}
        <Typography color={isIncreased ? 'error' : 'success'}>
          {Math.abs(usageDifference)} kWh {isIncreased ? 'mais' : 'menos'} que o mês passado
        </Typography>
      </Box>
    </Paper>
  );
};

export default EnergyCard;