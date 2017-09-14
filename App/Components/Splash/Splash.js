import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, windowSize } from 'react-native';
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Brain Buddy</Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by Prolificrew.com</Text>
                </View>
            </View>
        );
    }
}
