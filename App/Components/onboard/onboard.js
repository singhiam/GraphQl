import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert,
    Navigator,
    Dimensions,
} from 'react-native';
import styles from './assets/css/onboard_css';
import { StackNavigator } from 'react-navigation';
import GridView from "react-native-easy-grid-view";
export default class Onboard extends Component {
    constructor(props) {
        super(props);
        var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithCells([
                {
                    image: require('./assets/images/Private-student-loans.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/Student-Loan-Debt-After-Graduation.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/6a01348793456c970c01b8d0d5eccf970c.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/diploma-cash.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/Cant-Pay-Student-Loans.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/campos_student_loans.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/Studentmoney.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/pay-off-student-loans-faster-640x300.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/Cant-Pay-Student-Loans.jpg'),
                    backgroundColor: '#f00'
                },
                {
                    image: require('./assets/images/Cant-Pay-Student-Loans.jpg'),
                    backgroundColor: '#f00'
                },
            ], 2),
            cellWidth: 0,
            cellHeight: 0
        };
    }
    static navigationOptions = {
        header: null,
    };
    _renderCell(cell) {
        const {navigate} = this.props.navigation
        return <View onLayout={event => {
            var width = event.nativeEvent.layout.width;
            if (this.state.cellWidth != width) {
                this.setState({ cellWidth: width })
            }
            if (this.state.cellHeight != width) {
                this.setState({ cellHeight: width })
            }
        } }>
            <View style={{ width: this.state.cellWidth, height: this.state.cellHeight, justifyContent: 'center' }} >
                <TouchableOpacity onPress={() => navigate('Main')}>
                    <Image source={cell.image} style={styles.img_rsize}  />
                </TouchableOpacity>
            </View>
        </View>
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.viewback}>
                    <Text style={styles.TextStyle}>
                        Connect to Your Student Loan Account
                </Text>
                </View>
                <GridView dataSource={this.state.dataSource}
                    spacing={16}
                    style={{ padding: 16, marginBottom: 16 }}
                    renderCell={this._renderCell.bind(this)}
                    />
            </View>
        )
    }
}
