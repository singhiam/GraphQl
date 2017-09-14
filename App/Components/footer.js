import React, { Component } from 'react'
import {
  View,
  ListView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import { Container, Title, Header, Content, FooterTab, Button, Left, Right, Body } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Shop1 from './shop1/shop1';
import AddContributor from './AddContributor/AddContributor';
import ReferFriend from './ReferFriend/ReferFriend';
import About from './About/About';
export default class FooterView extends Component {
 render() {
        return (
    <ScrollableTabView
                    style={styles.container}
                    tabBarBackgroundColor='#484860'
                    tabBarPosition='overlayBottom'
                    tabBarActiveTextColor='#FF5E3A'
                    tabBarInactiveTextColor='#FFF'
                    tabBarUnderlineStyle={{ backgroundColor: '#FF5E3A' }}
                    >
                    <ScrollView tabLabel='Shop'>
                        <Shop1/>
                    </ScrollView>
                    <ScrollView tabLabel='Add'>
                        <AddContributor />
                    </ScrollView>
                    <ScrollView tabLabel='Refer'>
                        <ReferFriend />
                    </ScrollView>
                    <ScrollView tabLabel='About'>
                        <About />
                    </ScrollView>
                    </ScrollableTabView>
        )
 }
}
module.exports = StyleSheet.create({
container: {
        flex: 1,
        marginTop: 20,
    },
})
