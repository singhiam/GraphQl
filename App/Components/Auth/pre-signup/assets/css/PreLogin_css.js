import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewlogo: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logo: {
        width: width,
        height: 100
    },
    button: {
        backgroundColor: "#49485F",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        color: '#fff'
    },
    button2: {
        backgroundColor: "#FF613E",
        paddingVertical: 20,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        color: '#fff'
    },
})
