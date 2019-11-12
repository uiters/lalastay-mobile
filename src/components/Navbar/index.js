import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.jpg';
import './style.css';

const useStyles = makeStyles(() => ({
  logo: {
    width: '60px',
    height: '60px',
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

function Navbar() {
  const classes = useStyles();
  // const opacity = props.opacity;
  return (
    <>
      {/* <nav className="menu" style={{ background: `rgba(250, 250, 250, ${opacity})` }}> */}
      <nav className="menu" style={{ background: '#FFFFFF' }}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Grid container direction="row" alignItems="center" justify="flex-start">
              <Box className={classes.logo}>
                <img src={logo} className={classes.logoImg} alt="img" />
              </Box>
              <Box display="inline" className="search-container">
                <input placeholder="Tìm kiếm" className="search-input" />
              </Box>
              <Box display="inline" className="button-search-container">
                <button className="button-search" type="button" />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={6} container direction="row" justify="flex-end" alignItems="center">
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
