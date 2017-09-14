import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  Navigator,
  Dimensions,
} from 'react-native';
import { Font } from 'expo';
import Swiper from 'react-native-swiper';
import styles from './assets/css/PreLogin_css';
const { width, height } = Dimensions.get("window");
//import Button from 'react-native-button';
import { SocialIcon, Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
import * as firebase from 'firebase'
var config = {
  apiKey: "AIzaSyB-_EOtRdNKTza3lFplzksALBY1C_ri8lw",
  authDomain: "whatloanapp-f3f0b.firebaseapp.com",
  databaseURL: "https://whatloanapp-f3f0b.firebaseio.com",
  projectId: "whatloanapp-f3f0b",
  storageBucket: "",
  messagingSenderId: "301340969413"
};
firebase.initializeApp(config);
export default class Presignup extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
        await Font.loadAsync({
            'Arial': require('./assets/fonts/arial.ttf'),
        });
        this.setState({ fontLoaded: true });
    }
  /*facebook login */
  authenticate = (token) => {
    const provider = firebase.auth.FacebookAuthProvider;
    const credential = provider.credential(token);
    return firebase.auth().signInWithCredential(credential);
  }
  login = async () => {
    const { navigate } = this.props.navigation;
    const ADD_ID = '173236736578077'
    const options = {
      permissions: ['public_profile', 'email'],
    }
    const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options)
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
      console.log(await response.json());
      this.authenticate(token);
      navigate('Home')
    }
  }
  /* -----*/
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.viewlogo}>
         
            <Image
              source={require('./assets/images/logo.png')}
              style={styles.logo} >
            </Image>
         
        </View>
        <Swiper style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={2.5}>
          <View style={styles.slide1}>
            <Image
              source={require('./assets/images/Cant-Pay-Student-Loans.jpg')}
              style={{ width: width, height: (height / 1.9) }}>
            </Image>
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('./assets/images/do-build.jpg')}
              style={{ width: width, height: (height / 1.9) }}>
            </Image>
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('./assets/images/Studentmoney.jpg')}
              style={{ width: width, height: (height / 1.9) }}>
            </Image>
          </View>
          <View style={styles.slide1}>
            <Image
              source={require('./assets/images/campos_student_loans.jpg')}
              style={{ width: width, height: (height / 1.9) }}>
            </Image>
          </View>
        </Swiper>
        <View>
          <SocialIcon
            button
           // style={{color:"red"}}
            type='medium'
            title='  Sign Up with Email'
            onPress={() => navigate('Signup')}
            />
          <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
            onPress={this.login}
            />
        </View>
      </View>

    )
  }
}
