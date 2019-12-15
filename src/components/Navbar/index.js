import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import deburr from 'lodash/deburr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import './style.css';
import RoomIcon from '@material-ui/icons/Room';
import { navigate } from '@reach/router';
import logo from '../../assets/logo.jpg';

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
    '&:hover': {
      cursor: 'pointer',
    },
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
  root: {
    height: 250,
    flexGrow: 1,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    marginTop: '25x',
  },
  input: {
    paddingLeft: '15px',
  },
}));

const suggestions = [
  { label: 'Đà lạt' },
  { label: 'TP HCM' },
  { label: 'Vũng Tàu' },
  { label: 'Đồng nai' },
  { label: 'Huế' },
  { label: 'Hà Nội' },
  { label: 'Phú quốc' },
  { label: 'Tam Đảo' },
  { label: 'Cà Mau' },
  { label: 'Cần Thơ' },
  { label: 'Đà Nẵng' },
  { label: 'Bình Định' },
  { label: 'Quảng Ngải' },
  { label: 'Quảng Nam' },
  { label: 'Nghệ An' },
  { label: 'Sơn La' },
  { label: 'Bến Tre' },
];

function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
        disableUnderline: true,
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div" onClick={() => navigate('/home-by-area')}>
      <div>
        <RoomIcon style={{ color: '#FC6C85', fontSize: '18px', marginRight: '10px' }} />
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
}

function getSuggestions(value) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function Navbar() {
  const classes = useStyles();
  // const opacity = props.opacity;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    single: '',
    popper: '',
  });
  const [stateSuggestions, setSuggestions] = React.useState([]);

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue,
    });
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: stateSuggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
  };

  return (
    <>
      {/* <nav className="menu" style={{ background: `rgba(250, 250, 250, ${opacity})` }}> */}
      <nav className="menu" style={{ background: '#FFFFFF' }}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={6}>
            <Grid container direction="row" alignItems="center" justify="flex-start">
              <Box className={classes.logo}>
                <img
                  src={logo}
                  className={classes.logoImg}
                  alt="img"
                  onClick={() => navigate('/')}
                />
              </Box>
              <Box display="inline" className="search-container">
                <Autosuggest
                  {...autosuggestProps}
                  inputProps={{
                    classes,
                    id: 'react-autosuggest-popper',
                    placeholder: 'Đà lạt',
                    value: state.popper,
                    onChange: handleChange('popper'),
                    inputRef: node => {
                      setAnchorEl(node);
                    },
                    InputLabelProps: {
                      shrink: true,
                    },
                  }}
                  theme={{
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                  }}
                  renderSuggestionsContainer={options => (
                    <Popper
                      anchorEl={anchorEl}
                      open={Boolean(options.children)}
                      style={{ zIndex: 100, top: '40px' }}
                    >
                      <Paper
                        square
                        {...options.containerProps}
                        style={{ width: anchorEl ? anchorEl.clientWidth : undefined }}
                      >
                        {options.children}
                      </Paper>
                    </Popper>
                  )}
                />
                {/* <input placeholder="Tìm kiếm" className="search-input" /> */}
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
