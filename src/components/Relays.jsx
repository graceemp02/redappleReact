/** @format */
import Paper from '@mui/material/Box';
import List from '@mui/material/List';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import { Button, ListItem, Switch, Typography } from '@mui/material';
import { RelayItems } from './constants';
import { useContext, useEffect, useState } from 'react';
import { MachineContext } from '../MachineContext';
import axios from 'axios';

const circleStyle = {
  width: '2.7vh',
  height: '2.7vh',
  ml: '12px',
};
const disableButton = {
  bgcolor: '#2196f3 !important',
  color: '#fff !important',
  opacity: '0.5',
  height: '3vh',
  minWidth: '3vw',
  fontSize: '1.5vh',
};
const shortButton = {
  height: '3vh',
  minWidth: '3vw',
  fontSize: '1.5vh',
};
function Relays() {
  const [switchValue, setSwitchValue] = useState(false);
  const [res, setRes] = useState({});
  const { machineID } = useContext(MachineContext);
  useEffect(() => {
    axios
      .get('https://redapple.graceautomation.tech/php/relays.php', {
        params: { api: machineID },
      })
      .then(result => {
        setRes(result.data);
        console.log(result.data);
      })
      .catch(error => console.log(error));
  }, [machineID]);
  const handleSwitchChange = e => {
    setSwitchValue(e.target.checked);
  };

  return (
    <div style={{ display: 'flex', flex: 4, flexDirection: 'column' }}>
      <Typography
        align='left'
        pl={2}
        fontWeight={'bold'}
        sx={{
          textDecoration: 'Underline',
          color: 'black',
          mb: '.1vh',
          fontSize: '3.3vh!important',
        }}>
        RELAYS CONTROLS
      </Typography>

      <Paper
        sx={{
          marginBottom: '.5vh',
          flex: 1,
          width: '100%',
          bgcolor: 'background.paper',
          borderRadius: '1vh',
          display: 'flex',
        }}>
        <List
          component='nav'
          aria-label='relay controld'
          sx={{
            flex: 1,
            minHeight: 'auto',
            height: { xs: '400px', sm: '40vh' },
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            paddingBottom: 0,
          }}>
          {RelayItems.map(relay => {
            return (
              <ListItem sx={{ padding: '0rem 1rem', flex: 1 }} divider key={relay.id}>
                <ListItemText
                  sx={{ m: 0, fontSize: '2vh !important' }}
                  primary={`R${relay.id}: ${relay.lable}`}
                />
                <Button
                  disabled={switchValue && true}
                  variant='contained'
                  size='small'
                  sx={switchValue ? disableButton : shortButton}>
                  Start
                </Button>
                <CircleIcon sx={circleStyle} />
              </ListItem>
            );
          })}
          <ListItem
            sx={{
              padding: '0 1rem',
              display: 'flex',
              // justifyContent: 'space-between',
            }}>
            <div
              style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Typography sx={{ m: 0, fontSize: '2vh !important', p: 0 }} variant='h6'>
                MANNUAL
              </Typography>
              <Switch onChange={handleSwitchChange} />
              <Typography sx={{ m: 0, fontSize: '2vh !important', p: 0 }} variant='h6'>
                AUTO
              </Typography>
            </div>
            <CircleIcon sx={circleStyle} />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}
export default Relays;
