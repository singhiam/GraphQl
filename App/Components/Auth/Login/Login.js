import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Dimensions,
    Image,
    Navigator,
    ScrollView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    keyboardavoidingview
} from 'react-native';
import { Font } from 'expo';
import styles from './assets/css/Login_css';
// import Button from 'react-native-button';
const logo = require("./assets/images/logo.png");
import { StackNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko, Fumi } from 'react-native-textinput-effects';
import { SocialIcon, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
export default class Login extends Component {
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
          //  <Image source={require('./assets/images/2.jpg')} style={styles.container1}>
          <View style={styles.container1} >
                <KeyboardAwareScrollView>
                    <View style={styles.container2} >
                        <View >
                            <Image source={logo} style={{ width: 350, height: 100 }} resizeMode="contain" />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <View style={styles.textAlign}>
                                <Text style={styles.colotctext}>Login to your account</Text>
                            </View>
                            <Fumi
                                style={{ margin: 10 }}
                                label={'Email'}
                                iconClass={FontAwesomeIcon}
                                iconName={'envelope'}
                                iconColor={'#f95a25'}
                                iconSize={20}
                                />
                            <Fumi
                                style={{ margin: 10 }}
                                label={'Password'}
                                iconClass={FontAwesomeIcon}
                                iconName={'lock'}
                                iconColor={'#f95a25'}
                                iconSize={20}
                                secureTextEntry
                                />
                            <View style={{ marginTop: 60 }}>
                                <SocialIcon
                                    button
                                    style={{ marginTop: 15 }}
                                    type='medium'
                                    title='Login'
                                    onPress={() => navigate('Shop1')}
                                    />
                                <SocialIcon
                                    title='Sign In With Facebook'
                                    button
                                    type='facebook'
                                    onPress={this.login}
                                    />
                                <View style={styles.textAlign} >
                                    <Text style={{ fontWeight: 'bold', color: '#fff' }} onPress={() => (navigate('Signup'))}>Dont have an account?? Sign up</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
                  </View>
          //  </Image>
        )
    }
}