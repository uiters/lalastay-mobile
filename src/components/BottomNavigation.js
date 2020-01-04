import React from 'react';
import { useHistory } from 'react-router-dom';
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
    position: 'sticky',
    bottom: 0,
    zIndex: 9999,
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.1), 0 1px 6px rgba(0, 0, 0, 0.2)',
  },
  checked: {
    color: '#FC6C85',
  },
});

function BottomNav() {
  const history = useHistory();
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
      <BottomNavigationAction onClick={() => history.push('/')} style={value === 0 ? { color: '#FC6C85' } : {}} label="Trang chủ" icon={<HomeIcon />} />
      <BottomNavigationAction onClick={() => history.push('/coming-soon')} style={value === 1 ? { color: '#FC6C85' } : {}} label="Khám phá" icon={<ExploreIcon />} />
      <BottomNavigationAction onClick={() => history.push('/coming-soon')} style={value === 2 ? { color: '#FC6C85' } : {}} label="Lịch sử" icon={<HistoryIcon />} />
      <BottomNavigationAction onClick={() => history.push('/coming-soon')} style={value === 3 ? { color: '#FC6C85' } : {}} label="Tài khoản" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
}

export default BottomNav;
