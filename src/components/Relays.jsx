/** @format */
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItem, Switch, Typography } from '@mui/material';
import { RelayItems } from './constants';
import { useState } from 'react';

const circleStyle = {
  width: { xs: '.8em', sm: '1em' },
  height: { xs: '.8em', sm: '1em' },
  ml: '12px'
};
const disableButton = {
  bgcolor: '#2196f3 !important',
  color: '#fff !important',
  opacity: '0.5',
};
function Relays() {
  const [switchValue, setSwitchValue] = useState(false);
  const handleSwitchChange = e => {
    setSwitchValue(e.target.checked);
    };
    
  return (
    <div style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
      <Typography
        align='left'
        fontSize={'auto'}
        variant='h4'
        pl={2}
        fontWeight={'bold'}
        sx={{ textDecoration: 'Underline', color: 'black', mb: .5 }}>
        RELAYS CONTROLS
      </Typography>

      <Paper
        sx={{
          marginBottom: '15px',
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1em',
          display: 'flex',
        }}>
        <List
          component='nav'
          aria-label='relay controld'
          sx={{
            flex: 1,
            minHeight: 'auto',
            height: { xs: '355px', sm: '44vh' },

            overflow: 'auto',
            borderRadius: '10px',
            paddingInline: 4,
          }}>
          {RelayItems.map(relay => {
            return (
              <ListItem sx={{ paddingBlock: { xs: 0.25, sm: 0.7 } }} divider key={relay.id}>
                <ListItemText primary={`R${relay.id}: ${relay.lable}`} />
                <Button
                  disabled={switchValue && true}
                  variant='contained'
                  size='small'
                  sx={switchValue && disableButton}>
                  Start
                </Button>
                <CircleIcon sx={circleStyle} />
              </ListItem>
            );
          })}
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBlock: { xs: 0.25, sm: 0.78 },
              paddingInline: 2,
            }}>
            <div
              style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='h6'>MANNUAL</Typography>
              <Switch onChange={handleSwitchChange} />
              <Typography variant='h6'>AUTO</Typography>
            </div>
            <CircleIcon sx={circleStyle} />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}
export default Relays;
