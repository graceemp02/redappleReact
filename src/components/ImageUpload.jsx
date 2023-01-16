/** @format */

import React from 'react';
import { Card, CardContent, Fab, Typography } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import { useState } from 'react';

function ImageUploadCard({ setAdImg }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [mainState, setMainState] = useState('initial');

  function handleUploadClick(event) {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setSelectedFile([reader.result]);
      setAdImg(reader.result);
    };
    setMainState('uploaded');
    setSelectedFile(event.target.files[0]);
  }

  function renderInitialState() {
    return (
      <CardContent>
        <input
          accept='image/*'
          id='contained-button-file'
          type='file'
          onChange={handleUploadClick}
          //   style={{ display: 'none' }}
        />
        <label htmlFor='contained-button-file'>
          <Fab component='span'>
            <AddPhotoAlternate />
          </Fab>
        </label>
      </CardContent>
    );
  }

  function renderUploadedState() {
    return (
      <CardContent onClick={imageResetHandler}>
        <img
          alt='sample'
          width='300px'
          style={{ position: 'absolute', right: 1, top: 60, objectFit: 'contain' }}
          src={selectedFile}
        />
      </CardContent>
    );
  }

  function imageResetHandler(event) {
    setMainState('initial');
    setSelectedFile(null);
  }

  return (
    <Card>
      {(mainState === 'initial' && renderInitialState()) ||
        (mainState === 'uploaded' && renderUploadedState())}
    </Card>
  );
}

export default ImageUploadCard;
