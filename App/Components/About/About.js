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
import { StackNavigator } from 'react-navigation';
export default class About extends Component {
    static navigationOptions = {
        headerTitle: "WHATLOAN ?",
        headerStyle: { marginTop: 24 },
    };
    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50
            }}>
                <Text style={{ fontSize: 20 }}>About</Text>
                <Text style={{ fontSize: 15, marginTop: 50 }}>Coming Soon Under Deveopment</Text>
            </View>
        )
    }
}
