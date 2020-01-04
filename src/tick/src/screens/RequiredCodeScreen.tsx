import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { Layout, Text, Button, Input, Icon } from 'react-native-ui-kitten';
import { NavigationStackProp } from 'react-navigation-stack';
import { Header, StatusBar } from 'src/components';
import { color } from 'src/config/theme';
import { requireCodeAction } from 'src/models/auth/register';

interface Props {
  navigation: NavigationStackProp;
}

const RequiredCodeScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const handleSubmit = async () => {
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = pattern.test(email);
    if (valid) {
      dispatch(requireCodeAction(email));
    } else {
      setValidEmail(false);
    }
  };
  return (
    <Layout style={styles.container}>
      <StatusBar />
      <Header
        title='Register'
        leftIconName='arrow-back-outline'
        leftPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text category='s2' style={styles.title}>
          Enter your email to continue
        </Text>
        <Input
          placeholder='Email'
          style={styles.input}
          icon={() => <Icon name='person-outline' />}
          onChangeText={(text: string) => setEmail(text)}
          caption={!validEmail ? 'Invalid email' : ''}
          captionTextStyle={{ color: '#FF3D71' }}
        />
        <Button
          disabled={!email}
          style={email ? styles.btn : styles.disabledBtn}
          textStyle={{ color: 'white' }}
          size='large'
          onPress={handleSubmit}
        >
          CONTINUE
        </Button>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: color.background
  },
  content: {
    flex: 1,
    padding: 15
  },
  title: {
    color: color.secondary,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    marginBottom: 50
  },
  btn: {
    width: '100%',
    backgroundColor: color.primary,
    borderColor: 'rgba(255, 126, 103, 0.2)',
    marginBottom: 10
  },
  disabledBtn: {
    width: '100%',
    backgroundColor: '#EDF1F7',
    borderColor: 'rgba(237, 241, 247, 0.2)',
    marginBottom: 10
  }
});

export default RequiredCodeScreen;
