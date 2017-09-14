import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class SideBarContent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={{backgroundColor:'grey',marginTop:100,padding:100}}>
        <Text>Order History</Text>
        <Text>Account</Text>
        <Text>Basket</Text>
        <Text>About us</Text>
      </View>
    );
  }
}