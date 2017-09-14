import React, { Component } from 'react'
import {
  View,
  ListView,
  StyleSheet,
  Text,
  Image,
  Navigator,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Container, Title, Header, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import { StackNavigator,TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import styles from './assets/css/shop2_css';
import AddContributor from '../AddContributor/AddContributor';
import ReferFriend from '../ReferFriend/ReferFriend';
import About from '../About/About';
const {height, width} = Dimensions.get('window')
const logo = require("./assets/images/logo.png");
const amazon = require("./assets/images/amazon.png");
const tempData = [
  {
    img_url: require('./assets/images/snapdeal-new-logo.jpg'),
  },
  {
    img_url: require('./assets/images/snapdeal-new-logo.jpg'),
  },
  {
    img_url: require('./assets/images/snapdeal-new-logo.jpg'),
  }]
export default class Shop2 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      title: 'Detail Title',
      dataSource: ds.cloneWithRows(tempData),
      // selectedState: 0
    };
    this.renderRow = this.renderRow.bind(this);
  }
  static navigationOptions = {
    headerTitle: "WHATLOAN ?",
    headerStyle: { marginTop: 24 },
  };
  renderRow(rowData) {
    const {navigate} = this.props.navigation;
    const imgURLString = rowData.img_url;
    return (
      <View style={styles.listStyle}>
        <View style={styles.imgView} >
          <TouchableOpacity >
            <Image source={imgURLString}
              style={styles.imgBox} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  render() {
    return (
     <View style={styles.container}>
                <View style={styles.listBox}>
                    <ListView style={{ flex: 1 }}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow} />
                </View>
            </View >
    )
  }
  
}
