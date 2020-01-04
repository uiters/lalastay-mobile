import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import ExploreIcon from '@material-ui/icons/Explore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 9999,
    marginTop: '56px',
    '&$selected': {
      color: '#FC6C85',
    }
  },
  checked: {
    color: '#FC6C85',
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={value === 0 ? { color: '#FC6C85' } : {}} label="Trang chủ" icon={<HomeIcon />} />
      <BottomNavigationAction style={value === 1 ? { color: '#FC6C85' } : {}} label="Khám phá" icon={<ExploreIcon />} />
      <BottomNavigationAction style={value === 2 ? { color: '#FC6C85' } : {}} label="Lịch sử " icon={<HistoryIcon />} />
      <BottomNavigationAction style={value === 3 ? { color: '#FC6C85' } : {}} label="Tài khoản" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}
