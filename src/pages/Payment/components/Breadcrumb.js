import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from '@reach/router';

const Breadcrumb = () => {
  return (
    <div style={styles.container}>
      <img
        alt="logo"
        height="38"
        width="38"
        style={styles.logo}
        src="https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <Link to="/" style={styles.rootLink}>
        1. Thông tin đặt phòng
      </Link>
      <ChevronRightIcon />
      <p style={styles.childLink}>2. Thông tin đặt phòng</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '4px',
    marginRight: '4px',
    padding: '5px',
    boxShadow: '2px 4px 8px rgba(211, 211, 211, 0.5)',
  },
  logo: {
    left: '1.32%',
    right: '95.35%',
    top: '10.42%',
    bottom: '10.42%',
    marginLeft: '10px',
    color: '#000',
  },
  rootLink: {
    fontSize: '18px',
    lineHeight: '24px',
    color: '#000',
    fontWeight: 'bold',
    marginLeft: '48px',
  },
  childLink: {
    margin: 'auto 0',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#000',
    marginLeft: '10px',
  },
};

export default Breadcrumb;
