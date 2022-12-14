/** @format */

import { Box, Button, createTheme, Typography, useMediaQuery } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import Logo from '../assests/logo.png';
import { MachineContext } from '../MachineContext';
import axios from 'axios';

let theme = createTheme();
function CDashboard() {
  const [res, setRes] = useState({});
  const [display, setDisplay] = useState('flex');
  const { machineID } = useContext(MachineContext);
  useEffect(() => {
    axios
      .get('https://redapple.graceautomation.tech/dashboard.php', {
        params: { api: machineID },
      })
      .then(result => {
        setRes(result.data);
        setDisplay(result.data.humHdnStatus ? 'flex' : 'none');
      })
      .catch(error => console.log(error));
  }, [machineID]);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const circleStyle = {
    width: '1.3em',
    height: '1.3em',
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography
        fontWeight={'bold'}
        align='left'
        pl={2}
        variant='h4'
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5, fontSize: '3.3vh!important' }}>
        Dashboard
      </Typography>
      <div
        style={{
          flex: 1,
          display: 'flex',
          borderRadius: '1em 1em 0em 0em',
          backgroundColor: 'white',
          overflow: 'hidden',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '.75em',
          minHeight: '94%',
        }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div>
            {' '}
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'black' }}>
              AQI
            </Typography>
            <div>{res.aqi}%</div>
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'black' }}>
              FAN
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} htmlColor={res.fan1 > 0 ? '#00c853' : ''} />
              <CircleIcon sx={circleStyle} htmlColor={res.fan2 > 0 ? '#00c853' : ''} />
            </div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'black' }}>
              UCV
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} htmlColor={res.uvc1 > 0 ? '#00c853' : ''} />
              <CircleIcon sx={circleStyle} htmlColor={res.uvc2 > 0 ? '#00c853' : ''} />
            </div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'black' }}>
              OSA
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} htmlColor={res.osa1 > 0 ? '#00c853' : ''} />
              <CircleIcon sx={circleStyle} htmlColor={res.osa2 > 0 ? '#00c853' : ''} />
            </div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'black' }}>
              C/H
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} htmlColor={res.ch1 > 0 ? 'blue' : ''} />
              <CircleIcon sx={circleStyle} htmlColor={res.ch2 > 0 ? 'red' : ''} />
            </div>{' '}
          </div>
          <div>
            <Typography variant='body1' sx={{ fontWeight: 'bold', color: 'black' }}>
              Temp
            </Typography>
            <div>{res.temp}°F</div>{' '}
          </div>
        </div>
        <div>
          <Typography
            sx={{ textShadow: '1px 10px 10px rgb(0 0 0 / 50%)', fontSize: '40vh' }}
            lineHeight={'1em'}
            fontWeight='900'
            className={`color${res.letter}`}>
            {res.letter}
          </Typography>
        </div>
        <div>
          <Typography color={'black'} variant={'h5'} lineHeight={1} sx={{ fontSize: '2.8vh' }}>
            HEALTHY INDOOR AIR QUALITY
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <CircleIcon sx={circleStyle} className={res.humInd1 ? res.humInd1 : ''} />
                <CircleIcon sx={circleStyle} className={res.humInd2 ? res.humInd2 : ''} />
                <CircleIcon sx={circleStyle} className={res.humInd3 ? res.humInd3 : ''} />
                <CircleIcon sx={circleStyle} className={res.humInd4 ? res.humInd4 : ''} />
                <CircleIcon sx={circleStyle} className={res.humInd5 ? res.humInd5 : ''} />
              </div>
              <Box sx={{ display: { display }, flexDirection: 'column' }}>
                <CircleIcon sx={circleStyle} className={res.humHdnInd1 ? res.humHdnInd1 : ''} />
                <CircleIcon sx={circleStyle} className={res.humHdnInd2 ? res.humHdnInd2 : ''} />
                <CircleIcon sx={circleStyle} className={res.humHdnInd3 ? res.humHdnInd3 : ''} />
                <CircleIcon sx={circleStyle} className={res.humHdnInd4 ? res.humHdnInd4 : ''} />
              </Box>
            </div>
            <Typography variant='body2'>Humidity</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} className={res.voc1 ? res.voc1 : ''} />
            <CircleIcon sx={circleStyle} className={res.voc2 ? res.voc2 : ''} />
            <CircleIcon sx={circleStyle} className={res.voc3 ? res.voc3 : ''} />
            <CircleIcon sx={circleStyle} className={res.voc4 ? res.voc4 : ''} />
            <CircleIcon sx={circleStyle} className={res.voc5 ? res.voc5 : ''} />
            <Typography variant='body2'>VOC</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} className={res.co2_1 ? res.co2_1 : ''} />
            <CircleIcon sx={circleStyle} className={res.co2_2 ? res.co2_2 : ''} />
            <CircleIcon sx={circleStyle} className={res.co2_3 ? res.co2_3 : ''} />
            <CircleIcon sx={circleStyle} className={res.co2_4 ? res.co2_4 : ''} />
            <CircleIcon sx={circleStyle} className={res.co2_5 ? res.co2_5 : ''} />
            <Typography variant='body2'>
              CO<sub>2</sub>
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} className={res.pm25_1 ? res.pm25_1 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm25_2 ? res.pm25_2 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm25_3 ? res.pm25_3 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm25_4 ? res.pm25_4 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm25_5 ? res.pm25_5 : ''} />
            <Typography variant='body2'>PM2.5</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon
              sx={circleStyle}
              className={res.pm10_1 ? res.pm10_1 : ''}
              htmlColor={res.pm10_1}
            />
            <CircleIcon sx={circleStyle} className={res.pm10_2 ? res.pm10_2 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm10_3 ? res.pm10_3 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm10_4 ? res.pm10_4 : ''} />
            <CircleIcon sx={circleStyle} className={res.pm10_5 ? res.pm10_5 : ''} />
            <Typography variant='body2'>PM10</Typography>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            height: ' 100px',
            alignItems: 'center',
          }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt={'Logo'} width='60px' />{' '}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography fontWeight={'bold'} color={'black'} variant={'body1'}>
              {res.machine}
            </Typography>
            <Typography fontWeight={'bold'} color={'black'} variant={'body1'}>
              {res.customer}
            </Typography>
            <Typography color={'black'} variant={'body1'}>
              Next Inspection Date:{isMobile ? <br /> : null} {res.date}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              disabled
              sx={{
                width: '5rem',
                mb: '5px',
                bgcolor: '#2196f3 !important',
                color: '#fff !important',
                opacity: '0.5',
              }}
              variant='contained'
              size='small'>
              Time
            </Button>
            <Button
              disabled
              sx={{
                width: '5rem',
                mb: '5px',
                bgcolor: '#2196f3 !important',
                color: '#fff !important',
                opacity: '.5',
              }}
              className='disabledButton'
              width={100}
              variant='contained'
              size='small'>
              Machines
            </Button>
            <Button
              disabled
              sx={{
                width: '5rem',
                bgcolor: '#2196f3 !important',
                color: '#fff !important',
                opacity: '.5',
              }}
              variant='contained'
              size='small'>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CDashboard;
