/** @format */

import { Button, Typography } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import Logo from '../assests/logo.png';

function CDashboard() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Typography fontWeight={'bold'} align='left' pl={2} variant='h4' sx={{ textDecoration: 'Underline', color: 'black' }}>
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
          <div>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              FAN
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon />
              <CircleIcon />
            </div>{' '}
          </div>
          <div>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              UCV
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon />
              <CircleIcon />
            </div>{' '}
          </div>
          <div>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              OSA
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon />
              <CircleIcon />
            </div>{' '}
          </div>
          <div>
            {' '}
            <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'black' }}>
              C/H
            </Typography>
            <div className='iconsDiv'>
              <CircleIcon />
              <CircleIcon />
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
          <Typography sx={{ textShadow: '1px 10px 10px rgb(0 0 0 / 50%)', fontSize: '20rem' }} lineHeight={1} fontWeight='900' color={'#19C424'}>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
              </div>
            </div>
            <Typography>Humidity</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <Typography variant='body2'>VOC</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <Typography>
              CO<sub>2</sub>
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <Typography>PM2.5</Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <Typography>PM10</Typography>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', height: ' 100px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} width='60px' />{' '}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography fontWeight={'bold'} color={'black'} variant={'caption'}>
              Room 1
            </Typography>
            <Typography fontWeight={'bold'} color={'black'}  variant={'caption'}>
              Casa Presidencial
            </Typography>
            <Typography color={'black'}  variant={'caption'}>
              Next Inspection Date: 11-30-2022
            </Typography>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button sx={{ width: '5rem' }} variant='contained' size='small'>
              Time
            </Button>
            <Button sx={{ width: '5rem' }} width={100} variant='contained' size='small'>
              Machines
            </Button>
            <Button sx={{ width: '5rem' }} variant='contained' size='small'>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CDashboard;
