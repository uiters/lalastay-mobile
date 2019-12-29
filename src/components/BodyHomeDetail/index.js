/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import RoomIcon from '@material-ui/icons/Room';
import SmallRoomItem from '../SmallRoomItem';
import { ReservationForm, DescriptionHomeDetail, InformationUserForm } from '../index';
import './style.css';

function BodyHomedetail() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <div style={{ marginBottom: '15px' }}>
            <Box fontSize={25} fontWeight={600}>
              Homestay Ngọc Nữ
            </Box>
            <Box style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
              <Box>
                <RoomIcon style={{ fontSize: '18px', color: 'rgba(253, 136, 156, 1)' }} />
              </Box>

              <Box>Lâm Đồng, Đà Lạt</Box>
            </Box>
          </div>

          <DescriptionHomeDetail />
        </Grid>
        <Grid item md={4} style={{ marginTop: '30px' }}>
          <ReservationForm />
          <div style={{ height: '50px' }} />
          <InformationUserForm />
        </Grid>
      </Grid>
      <div className="compare">
        <div>
          {/* <FormControlLabel
            control={<Switch checked={checked} onChange={handleChange} />}
            label="H"
          /> */}
          <Box onClick={handleChange} fontWeight={500} fontSize={20} className="compare-now">
            Homestay nào phù hợp với bạn? <b>Hiển thị</b>
          </Box>
          <div style={{ display: checked ? 'block' : 'none' }}>
            <Grid container>
              <Grow in={checked}>
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow />
                </Grid>
              </Grow>
              {/* Conditionally applies the timeout prop to change the entry speed. */}
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow />
                </Grid>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow />
                </Grid>
              </Grow>
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}
              >
                <Grid item md={3} lg={3} sm={4} className="container-room-view">
                  <SmallRoomItem compareShow />
                </Grid>
              </Grow>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyHomedetail;
