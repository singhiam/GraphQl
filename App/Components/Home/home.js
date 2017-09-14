import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  Navigator,
  ScrollView,
  Dimensions,
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { Container, Title, Header, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import { StackNavigator } from 'react-navigation';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Font } from 'expo';
import { BarChart } from 'react-native-charts'
import Drawer from 'react-native-drawer';
import styles from './assets/css/Signup_css';


const logo = require("./assets/images/logo.png");
const partner = require("./assets/images/amazonlogo.png");
const flipkart = require("./assets/images/flipkartlogo.png");
const snapdeal = require("./assets/images/snapdeal.png");
const {height, width} = Dimensions.get('window');


import { SideMenu, List, ListItem } from 'react-native-elements';
import SideBarContent from '../sidemenu/menu';
import AddContributor from '../AddContributor/AddContributor';
import ReferFriend from '../ReferFriend/ReferFriend';
import About from '../About/About';


export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Avenir': require('./assets/fonts/Avenir-Black.ttf'),
    });
    this.setState({ fontLoaded: true });

    setTimeout(() => { this.scrollView.scrollTo({ x: -30 }) }, 1)
  }
  constructor() {
    super();
    this.closeControlPanel = this.closeControlPanel.bind(this);
    this.openControlPanel = this.openControlPanel.bind(this);
    this.state = {
      toggled: true
    }
  }
  toggleDrawer = () => {
    alert("sandy")
    this.state.toggled = true;
    this.state.toggled ? this._drawer.open() : this._drawer.close();
  }
  closeControlPanel = () => {
    //  alert("closed")
    this._drawer.close();
    this.state.toggled = !(this.state.toggled);
  };
  openControlPanel = () => {
    this._drawer.open();
    this.state.toggled = false
    // alert("open")
    this.closeControlPanel();
  };


  render() {
    const drawerStyles = {
      drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
      main: { paddingLeft: 3 },
    }
    const { navigate } = this.props.navigation;
    return (

      <Container>

        <Drawer
          ref={(ref) => this._drawer = ref}
          content={<SideBarContent />}
          type="overlay"
          tapToClose={true}
          openDrawerOffset={0.2}
          panOpenMask={0.05}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles={drawerStyles}
          side='right'
          >
          <ScrollableTabView
            style={styles.container}
            tabBarBackgroundColor='#484860'
            tabBarPosition='overlayBottom'
            tabBarActiveTextColor='#FF5E3A'
            tabBarInactiveTextColor='#FFF'
            tabBarUnderlineStyle={{ backgroundColor: '#FF5E3A' }}
            >
            <ScrollView tabLabel='Shop' color="#FF5E3A" icon={<Icon name='group-add' color='black' size={24} style={styles.icon} />}>
              <ScrollView
                renderTabBar={() => <Shop1 />}>
                <View style={{ flexDirection: 'row' }}>
                  <View >
                    <Image source={logo} style={{ width: 350, height: 100 }} resizeMode="contain" />
                  </View>
                  <View >
                    <Icon size={34} color="#000" name="menu" style={styles.sideIcon} onPress={this.state.toggled ? this.openControlPanel : this.closeControlPanel} />
                  </View>
                </View>
                <BarChart
                  dataSets={[
                    {
                      fillColor: '#FF5E3A',
                      data: [
                        { value: 15 },
                        { value: 10 },
                        { value: 12 },
                        { value: 11 },
                      ]
                    },
                    {
                      fillColor: '#00B386',
                      data: [
                        { value: 14 },
                        { value: 11 },
                        { value: 14 },
                        { value: 13 },
                      ]
                    },
                  ]}
                  graduation={1}
                  horizontal={false}
                  showGrid={true}
                  barSpacing={5}
                  style={{
                    height: 300,
                    margin: 15,
                    backgroundColor: '#FFF'
                  }} />
                <Content>
                  <ScrollView
                    ref={(scrollView) => { this.scrollView = scrollView; } }
                    style={styles.container}
                    horizontal={true}
                    decelerationRate={0}
                    snapToInterval={width - 300}
                    snapToAlignment={"center"}
                    contentInset={{
                      top: 0,
                      left: 30,
                      bottom: 0,
                      right: 30,
                    }}>
                    <View style={styles.view} >
                      <Image source={partner} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={flipkart} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={snapdeal} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={partner} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={flipkart} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={snapdeal} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={partner} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={flipkart} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={snapdeal} style={styles.imgSize} resizeMode="contain" />
                    </View>
                    <View style={styles.view} >
                      <Image source={partner} style={styles.imgSize} resizeMode="contain" />
                    </View>
                  </ScrollView>
                </Content >
              </ScrollView>
            </ScrollView>
            <ScrollView tabLabel='Add' >
              <AddContributor />
            </ScrollView>
            <ScrollView tabLabel='Refer' color="#FF5E3A" icon={<Icon name='group-add' color='black' size={24} style={styles.icon} />}>
              <ReferFriend />
            </ScrollView>
            <ScrollView tabLabel='About'>
              <About />
            </ScrollView>
          </ScrollableTabView>

        </Drawer>
      </Container>

    );
  }
}
