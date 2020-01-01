/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { SmallRoomItem } from 'components';
import { navigate } from '@reach/router';
import './style.css';

function SmallRoomItemCompare() {
  return (
    <>
      <SmallRoomItem sale={false} />
      <button
        className="compare-button"
        type="button"
        onClick={() => navigate('/compare-homestay')}
      >
        SO SÁNH
      </button>
    </>
  );
}

export default SmallRoomItemCompare;
