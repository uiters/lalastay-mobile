/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.jpg';
import './style.css';

const useStyles = makeStyles(() => ({
  logo: {
    width: '70px',
    height: '70px',
  },
  logoImg: {
    width: '100%',
    height: '100%',
    padding: '10px',
    borderRadius: '50%',
  },
  searchIcon: {
    color: '#FC6C85',
    fontSize: '30px',
  },
  search: {
    marginTop: '20px',
  },
  button: {
    height: '100%',
    marginRight: '20px',
  },
}));

function Navbar(props) {
  const classes = useStyles();
  // eslint-disable-next-line prefer-destructuring
  const opacity = props.opacity;
  return (
    <>
      <nav className="menu" style={{ background: `rgba(250, 250, 250, ${opacity})` }}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Grid container direction="row" alignItems="center" justify="space-between">
              <Box className={classes.logo}>
                <img src={logo} className={classes.logoImg}></img>
              </Box>
              <Box className="search-container">
                <Box display="inline">
                  <input placeholder="Tìm kiếm" className="search-input" type="search"></input>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Button className={classes.button}>Chủ nhà</Button>
            <Button className={classes.button}>Đăng kí</Button>
            <Button className={classes.button}>Đăng nhập</Button>
          </Grid>
        </Grid>
      </nav>
    </>
  );
}

export default Navbar;
