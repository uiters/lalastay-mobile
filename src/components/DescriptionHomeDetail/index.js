import React from 'react';
import { Grid, Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WifiIcon from '@material-ui/icons/Wifi';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import GavelIcon from '@material-ui/icons/Gavel';
import HomeIcon from '@material-ui/icons/Home';
import garden from '../../assets/garden.png';
import parking from '../../assets/parking.png';
import bando from '../../assets/bando.png';
import Comments from '../../routes/HomeDetail/components/Comments';
import { Rating } from '../index';
import './style.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
}));
function DescriptionHomeDetail() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="conatiner-description">
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Mô tả" {...a11yProps(0)} />
            <Tab label="Tiện nghi" {...a11yProps(1)} />
            <Tab label="Bình luận" {...a11yProps(2)} />
            <Tab label="Đánh giá" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div>
            <Box fontWeight={300} fontSize={16} lineHeight={1.5} marginBottom={2}>
              Mia Mia toạ lạc tại Bùi Thị Xuân, phường 8, tp Đà Lạt. Quãng đường bạn cần di chuyển
              rất gần để đến trung tâm tthành phố sương mù sầm uất Đà Lạt mộng mơ chỉ mất từ 8 - 13
              phút.
            </Box>
            <Box fontWeight={300} fontSize={16} lineHeight={1.5} marginBottom={2}>
              Chúng tôi có chỗ đậu xe ô tô rộng rãi cho quý khách đi tham quan du lịch theo hội,
              nhóm, theo đoàn hay gia đình,...
            </Box>
            <Box fontWeight={300} fontSize={16} lineHeight={1.5} marginBottom={2}>
              Phòng ở tại Mia Mia thì vô cùng sạch sẽ, thoáng mát, có nhà vệ sinh riêng. View xung
              quanh rất thoáng, đa số là Villa và những ngôi nhà lồng bao phủ, 1 trong những nét rất
              đặc trưng của Đà Lạt.
            </Box>
            <Box fontWeight={300} fontSize={16} lineHeight={1.5} marginBottom={2}>
              Mia Mia toạ lạc tại Bùi Thị Xuân, phường 8, tp Đà Lạt. Quãng đường bạn cần di chuyển
              rất gần để đến trung tâm tthành phố sương mù sầm uất Đà Lạt mộng mơ chỉ mất từ 8 - 13
              phút.
            </Box>
            <Box fontWeight={300} fontSize={16} lineHeight={1.5} marginBottom={2}>
              Chúng tôi có chỗ đậu xe ô tô rộng rãi cho quý khách đi tham quan du lịch theo hội,
              nhóm, theo đoàn hay gia đình,...
            </Box>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid>
            {/* Tiện nghi */}
            <Grid container spacing={3} style={{ fontSize: '16px' }}>
              <Grid item xs={3}>
                <Box fontWeight={600}>Tiện nghi</Box>
              </Grid>
              <Grid item xs={9} style={{ lineHeight: '30px' }}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <WifiIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">Wifi miễn phí</Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <img alt="img" src={garden} style={{ marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">Có sân vườn</Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <img alt="img" src={parking} style={{ marginRight: '5px' }} />
                  </Box>
                  <Box display="inline" marginBottom={1}>
                    Có chỗ đậu xe
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* Số khách */}
            <Grid
              container
              spacing={3}
              style={{ height: '80px', background: 'rgba(43, 43, 43, 0.04)' }}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Box fontWeight={600}>Số khách</Box>
              </Grid>
              <Grid item xs={9}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <PersonIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline"> 1 người</Box>
                </Box>
              </Grid>
            </Grid>
            {/* Thông tin giá */}
            <Grid
              container
              spacing={3}
              style={{ height: '80px', marginTop: '10px', marginBottom: '10px' }}
              justify="center"
              alignItems="center"
            >
              <Grid item xs={3}>
                <Box fontWeight={600}>Thông tin giá</Box>
              </Grid>
              <Grid item xs={9}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <AttachMoneyIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline"> 2,340,000 VNĐ/ ngày</Box>
                </Box>
              </Grid>
            </Grid>
            {/* Thông tin chi tiết */}
            <Grid container spacing={3} style={{ background: 'rgba(43, 43, 43, 0.04)' }}>
              <Grid item xs={3}>
                <Box fontWeight={600}>Thông tin chi tiết</Box>
              </Grid>
              <Grid item xs={9}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <HomeIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">
                    <Box>1 phòng khách</Box>
                    <Box>1 phòng tắm</Box>
                    <Box>1 phòng ngủ</Box>
                    <Box>1 nhà bếp</Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            {/* Thông tin liên hệ */}
            <Grid
              container
              spacing={3}
              style={{ height: '80px', marginTop: '10px', marginBottom: '10px' }}
            >
              <Grid item xs={3}>
                <Box fontWeight={600}>Liên hệ</Box>
              </Grid>
              <Grid item xs={9}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <PhoneIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">0981853641</Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <EmailIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">16521214@gmail.com</Box>
                </Box>
              </Grid>
            </Grid>
            {/* Quy định */}
            <Grid container spacing={3} style={{ background: 'rgba(43, 43, 43, 0.04)' }}>
              <Grid item xs={3}>
                <Box fontWeight={600}>Quy định</Box>
              </Grid>
              <Grid item xs={9}>
                <Box style={{ display: 'flex' }}>
                  <Box display="inline">
                    <GavelIcon style={{ color: 'rgb(151, 8, 204,.7)', marginRight: '5px' }} />
                  </Box>
                  <Box display="inline">
                    Không được hút thuốc lá, không lớn tiếng ồn ào khi qua 11 giờ đêm và sau 5 giờ
                    sáng. Phải trả tiền trước khi ở không được đem các chất cấm vào khu vực homestay
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box fontWeight={600} marginTop={5}>
                  Bản đồ
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <img alt="img" src={bando} style={{ width: '100%', height: '250px' }} />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Comments />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Rating />
        </TabPanel>
      </div>
    </div>
  );
}

export default DescriptionHomeDetail;
