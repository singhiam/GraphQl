import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
    container: {},
    view: {
        marginTop: 50,
        width: width - 300,
        margin: 3,
        height: 50,
        borderRadius: 10,
    },
    imgSize: {
        width: 50,
        height: 50
    },
    sideIcon: {
        position: 'absolute',
        top: 40,
        right: 1
    },
    bottom: {
        height: 56,
        elevation: 8,
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0
    },
    position: {
         flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
