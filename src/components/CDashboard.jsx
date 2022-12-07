/** @format */

import { Button, createTheme, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import Logo from '../assests/logo.png';

let theme = createTheme();

function CDashboard() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const circleStyle = {
    width: { xs: '.8em', sm: '1em' },
    height: { xs: '.8em', sm: '1em' },
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography
        fontWeight={'bold'}
        align='left'
        pl={2}
        variant='h4'
        sx={{ textDecoration: 'Underline', color: 'black', mb: 0.5 }}>
        Dashboard
      </Typography>
      <div
        style={{
          flex: 1,
          display: 'flex',
          borderRadius: '10px',
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
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              AQI
            </Typography>
            <div>100%</div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              FAN
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} />
              <CircleIcon sx={circleStyle} />
            </div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              UCV
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} />
              <CircleIcon sx={circleStyle} />
            </div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              OSA
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} />
              <CircleIcon sx={circleStyle} />
            </div>{' '}
          </div>
          <div className='centerIcon'>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              C/H
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon sx={circleStyle} />
              <CircleIcon sx={circleStyle} />
            </div>{' '}
          </div>
          <div>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              Temp
            </Typography>
            <div>32°F</div>{' '}
          </div>
        </div>
        <div>
          <Typography
            sx={{ textShadow: '1px 10px 10px rgb(0 0 0 / 50%)', fontSize: '20rem' }}
            lineHeight={1}
            fontWeight='900'
            color={'#19C424'}>
            A
          </Typography>
        </div>
        <div>
          <Typography color={'black'} variant={'h5'}>
            HEALTHY INDOOR AIR QUALITY
          </Typography>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
                <CircleIcon sx={circleStyle} />
              </div>
            </div>
            <Typography>Humidity</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <Typography variant='body2'>VOC</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <Typography>
              CO<sub>2</sub>
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <Typography>PM2.5</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon sx={circleStyle} color='' />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <CircleIcon sx={circleStyle} />
            <Typography>PM10</Typography>
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
              Room 1
            </Typography>
            <Typography fontWeight={'bold'} color={'black'} variant={'body1'}>
              Casa Presidencial
            </Typography>
            <Typography color={'black'} variant={'body1'}>
              Next Inspection Date:{isMobile ? <br /> : null} 11-30-2022
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
