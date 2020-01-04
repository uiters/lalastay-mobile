/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { SmallRoomItem } from 'components';
import { useHistory } from 'react-router-dom'
import './style.css';

function SmallRoomItemCompare() {
  const history = useHistory();
  return (
    <>
      <SmallRoomItem sale={false} />
      <button
        className="compare-button"
        type="button"
        onClick={() => history.push('/compare-homestay')}
      >
        SO SÁNH
      </button>
    </>
  );
}

export default SmallRoomItemCompare;
