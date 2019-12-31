/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, WebView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StatusBar from '../../components/StatusBar';

import { logout } from '../../store/actions/UserActions';
import { userSelector } from '../../store/selectors/UserSelector';

class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    logout: PropTypes.func
  };

  state = {
    modalVisible: false
  };

  _signOutAsync = async () => {
    this.props.logout();
  };

  _setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <WebView style={{ flex: 1 }} source={{ uri: 'https://islalastay.netlify.com/' }} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { user: userSelector(state) };
};

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
