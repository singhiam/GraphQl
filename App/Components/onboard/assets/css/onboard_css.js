import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
    viewback: {
        paddingVertical:20,
        backgroundColor: "#49485F",
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight:'bold'
    },
    rowContainer: {
        overflow: 'hidden',
        width: Dimensions.get('window').width / 2,
        height: Dimensions.get('window').width / 2,
        borderWidth: 0.3,
        borderColor: '#bbbbbb'
    },
    rowContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    rowTitle: {
        color: '#333333',
        fontSize: 15
    },
    img_rsize: {
        height: (width/2)-20,
        width: (width/2)-20,
        resizeMode: 'cover'
    }
})
