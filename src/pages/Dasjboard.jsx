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
            height: { xs: 'auto', sm: '98.4vh' },
            // minWidth: '300px',
            p: 0,
            // minHeight: { xs: 'auto', sm: '800px' },
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflow: 'hidden',
              height: '100%',
            }}>
            <Customers />
            <Machines />
          </div>
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item
          sx={{
            display: 'flex',
            height: { xs: 'auto', sm: '97vh' },
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
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: { xs: 'auto', sm: '98.4vh' },
          }}>
          <Relays />
          <System />
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item
          sx={{
            height: { xs: 'auto', sm: '98.4vh' },
            // minWidth: '300px',
            p: 0,
            // minHeight: '800px',
            overflow: 'hidden',
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
