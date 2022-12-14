/** @format */

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import classe from '../index.css';
import Customers from '../components/Customers.jsx';
import Machines from '../components/machines';
import CDashboard from '../components/CDashboard';
import Relays from '../components/Relays';
import System from '../components/System';
import Sensors from '../components/Sensors';
import TestSystem from '../components/TestSystem';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: 'rgba(0,0,0,0)',
}));
function DashboardPage() {
  return (
    <Grid className={classe.mainContet} container spacing={1} columns={4}>
      <Grid pl={0} item xs={4} md={2} lg={1}>
        <Item
          sx={{
            height: { xs: 'auto', sm: '97.51vh' },
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            overflow: 'auto',
            padding: 0,
            borderRadius: '1vh',
          }}>
          <Customers />
          <Machines />
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item
          sx={{
            display: 'flex',
            height: { xs: 'auto', sm: '97.51vh' },
            p: 0,
            overflow: 'hidden',
            fontSize: '2vh',
          }}>
          <CDashboard />
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item
          sx={{
            p: 0,
            overflow: 'suto',
            display: 'flex',
            flexDirection: 'column',
            height: { xs: 'auto', sm: '97.51vh' },
          }}>
          <Relays />
          {/* <System /> */}
          <TestSystem />
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item
          sx={{
            height: { xs: '650px', sm: '97.51vh' },
            p: 0,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Sensors />
        </Item>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
