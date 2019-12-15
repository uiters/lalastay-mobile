/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Box } from '@material-ui/core';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/styles';
import './style.css';

const useStyles = makeStyles(() => ({
  content: {
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    alignItems: 'center',
    color: '#FAFAFA',
    fontSize: '20px',
  },
}));

function CityItem(props) {
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
        onClick={() => navigate('/home-by-area')}
        src={props.image}
      />
      <div className={classes.content}>
        <Box textAlign="center" fontWeight={600}>
          {props.province}
        </Box>
        <Box textAlign="center">410k/1 phòng</Box>
      </div>
    </div>
  );
}

export default CityItem;
