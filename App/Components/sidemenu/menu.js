import React, { Component } from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity,StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem } from 'native-base';
const {height, width} = Dimensions.get('window')
// const back = require("./assets/images/back.jpg");

export default class SideBarContent extends Component {
  constructor() {
    super();
  }
  render() {
    var items = ['Account', 'Shopping', 'Setting', 'History'];
    return (
      <View>
        <View style={{ backgroundColor: '#1E88E5', justifyContent: 'flex-start', padding: 20, height: height, width: width }}>
          <View style={styles.userInfosHolder}>
            <Image style={styles.avatar} source={{ uri: 'https://scontent-frt3-1.cdninstagram.com/t51.2885-15/s640x640/e15/15623603_1636005733360687_308770619158167552_n.jpg' }} />
            <View style={styles.userInfos}>
              <Text type='h1White' style={styles.username}>Username</Text>
              <Text type='h5White'>View and edit profile</Text>
            </View>

          </View>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <TouchableOpacity>
                  <Text style={{ color: '#fff', }}>{item}</Text>
                </TouchableOpacity>
              </ListItem>
            }>
          </List>
        </View>
        {/* <Image source={back} style={{marginTop: 100,height: height, width: width }}>
      
      </Image>*/}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  userInfosHolder: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingTop:20
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  userInfos: {
    height: 50,
    marginLeft:20,
    justifyContent: 'center'
  },
  username: {
    fontWeight: '700'
  }
})