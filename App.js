import Expo from 'expo'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import Splash from './App/Components/Splash/Splash';
import Presignup from './App/Components/Auth/pre-signup/pre-signup';
import Onboard from './App/Components/onboard/onboard';
import Shop1 from './App/Components/shop1/shop1';
import Main from './App/Components/Main/main';
import Shop2 from './App/Components/Shop2/Shop2';
import Home from './App/Components/Home/home';
import AddContributor from './App/Components/AddContributor/AddContributor';
import About from './App/Components/About/About';
import ReferFriend from './App/Components/ReferFriend/ReferFriend';
import Login from './App/Components/Auth/Login/Login';
import Signup from './App/Components/Auth/signup/signup';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { compose, graphql } from 'react-apollo'
import client from './App/api/ApolloClient';


const Container = ({ navigation }) => (
  <Splash navigation={navigation} />
)
Container.navigationOptions = {
  header: null
}


const Mroute = StackNavigator(

  {

    Container: { screen: Container },
    Presignup: { screen: Presignup },
    Home: { screen: Home },
    Login: { screen: Login },
    Signup: { screen: Signup },
    Onboard: { screen: Onboard },
    Shop1: { screen: Shop1 },
    Shop2: { screen: Shop2 },
    About: { screen: About },
    AddContributor: { screen: AddContributor },
    Main: { screen: Main },
  },
  {
    initialRouteName: 'Presignup'
  }

)

 class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Mroute />
      </ApolloProvider>
    )
  }
}


Expo.registerRootComponent(App)
