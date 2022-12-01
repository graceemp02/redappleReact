/** @format */

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import classe from '../index.css';
import Customers from '../components/customers';
import Machines from '../components/machines';
import CDashboard from '../components/CDashboard';

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
        <Item sx={{ height: '98.4vh', minWidth: '300px', p: 0, minHeight: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',overflow:'hidden', height: '100%' }}>
            <Customers />
            <Machines />
          </div>
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item sx={{ height: '98.4vh', minWidth: '300px', p: 0, minHeight: '800px', overflow: 'hidden' }}>
          {' '}
          <CDashboard />{' '}
        </Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item sx={{ height: '98.4vh', minWidth: '300px', p: 0, minHeight: '800px', overflow: 'hidden' }}>Full width column</Item>
      </Grid>
      <Grid item xs={4} md={2} lg={1}>
        <Item sx={{ height: '98.4vh', minWidth: '300px', p: 0, minHeight: '800px', overflow: 'hidden' }}>Full width column</Item>
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
