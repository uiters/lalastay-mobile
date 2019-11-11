/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import city from '../../assets/city.jpg';
import './style.css';

const useStyles = makeStyles(() => ({
  content: {
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    alignItems: 'center',
    color: '#FAFAFA',
    fontSize: '20px',
    fontWeight: 600,
  },
}));

function CityItem() {
  const classes = useStyles();
  return (
    <div className="container-city-item">
      <img
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '10px',
          boxShadow: '2px 4px 8px rgba(211, 211, 211, 0.5)',
          position: 'absolute',
          objectFit: 'cover',
        }}
        src={city}
      />
      <div className={classes.content}>
        <Box textAlign="center">Đồng nai</Box>
        <Box textAlign="center">3550 chỗ ở</Box>
      </div>
    </div>
  );
}

export default CityItem;
