import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    Dimensions,
    Image,
    Navigator,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styles from './assets/css/main_css';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator ,TabNavigator} from 'react-navigation';
import Shop1 from '../shop1/shop1';
import Shop2 from '../Shop2/Shop2';
import AddContributor from '../AddContributor/AddContributor';
import ReferFriend from '../ReferFriend/ReferFriend';
import About from '../About/About';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { Container, Header, Content, Tab, Tabs, TabHeading } from 'native-base';

export default class Main extends Component {
    static navigationOptions = {
        headerTitle: "WHATLOAN ?",
        headerStyle: { marginTop: 24 },
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedState: 0
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                <Tabs tabBarPosition='bottom'>
                    <Tab heading={
                        <TabHeading >
                             <Icon name="shop" style={styles.tabIcon}/>
                            <Text style={styles.tabIcon}>Shop</Text>
                        </TabHeading>}>
                        <Content><Shop1  navigation={this.props.navigation} /></Content>
                    </Tab >

                    <Tab heading={
                        <TabHeading >
                        <Icon name="person-add"style={styles.tabIcon}/>
                            <Text style={styles.tabIcon} >Add</Text>
                        </TabHeading>}>
                        <Content><AddContributor navigation={this.props.navigation}/></Content>
                    </Tab >

                    <Tab heading={
                        <TabHeading >
                      <Icon name="share"style={styles.tabIcon}/>
                            <Text style={styles.tabIcon}>Refer</Text>
                        </TabHeading>}>
                        <Content><ReferFriend navigation={this.props.navigation}/></Content>
                    </Tab >

                    <Tab heading={
                        <TabHeading >
                        <Icon name="info"style={styles.tabIcon}/>
                            <Text style={styles.tabIcon}>About</Text>
                        </TabHeading>}>
                        <Content><About navigation={this.props.navigation}/></Content>
                    </Tab >
                </Tabs>


            </Container>

        )
    }
}
