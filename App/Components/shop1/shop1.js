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
import styles from './assets/css/shop1_css';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator,TabNavigator } from 'react-navigation';
import Shop2 from '../Shop2/Shop2';
import AddContributor from '../AddContributor/AddContributor';
import ReferFriend from '../ReferFriend/ReferFriend';
import About from '../About/About';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
const {width} = Dimensions.get('window');
const tempData = [
    {
        img_url: require('./assets/images/amazon.jpg'),
    },
    {
        img_url: require('./assets/images/barnes_noble.jpg'),
    },
    {
        img_url: require('./assets/images/snapdeal-new-logo.jpg'),
    },
    {
        img_url: require('./assets/images/best_buy.jpg'),
    },
    {
        img_url: require('./assets/images/targetcenter_logo.jpg'),
    },
    {
        img_url: require('./assets/images/thrive-market.jpg')
    },
]
export default class Shop1 extends Component {
    static navigationOptions = {
        headerTitle: "WHATLOAN ?",
        headerStyle: { marginTop: 24 },
    };
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            title: 'Detail Title',
            dataSource: ds.cloneWithRows(tempData),
            //   value: true,
        };
        this.renderRow = this.renderRow.bind(this);
    }


    // redirect() {
    //     this.state.value = false;
    //     const {navigate} = this.props.navigation;
    //     navigate("Shop2")
    // }
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
    renderRow(rowData) {
        const { navigate} = this.props.navigation;
        const imgURLString = rowData.img_url;
        return (
            <View style={styles.listStyle}>

                <View style={styles.imgView} >
                    <TouchableOpacity onPress={()=>navigate('Shop2')}>
                        <Image source={imgURLString}
                            style={styles.imgBox}  />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    // gotofun() {
    //       
    //       navigate('Shop2')
      

        
    // }

}
