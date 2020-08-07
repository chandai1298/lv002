import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import {LinearTextGradient} from 'react-native-text-gradient';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.container}
      colors={['#687ae4', '#754ea6']}>
      <StatusBar
        backgroundColor="#54ce04"
        barStyle="light-content"
        hidden={true}
      />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={{
            uri:
              'https://pic.funnygifsbox.com/uploads/2019/02/funnygifsbox.com-2019-02-13-04-28-32-46.gif',
          }}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <LinearTextGradient
          locations={[0, 1]}
          colors={['#091048', '#754ea6']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text
            style={[
              styles.title,
              {
                color: '#754ea6',
              },
            ]}>
            Learning everyday with everyone!
          </Text>
        </LinearTextGradient>

        {/* <TouchableOpacity>
          <Text style={{color: '#0581b9f0', marginTop: 15}}>
            Bắt đầu học ngay...
          </Text>
        </TouchableOpacity> */}
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#687ae4', '#754ea6']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#54ce04',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 200,
  },
  title: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',

    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 8,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  textSign: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
