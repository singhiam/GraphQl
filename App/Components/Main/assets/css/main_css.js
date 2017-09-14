import {
    StyleSheet,
    Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get("window");
module.exports = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBox: {
        width:  width-30,
        height: height / 6,
        backgroundColor: 'black',
    },
    topView: {
        flex: 1,
    },
    listBox: {
        flex: 10,
        width: width,
        marginBottom: 75
    },
    listStyle: {
        marginTop:10,
        alignItems: 'center',
        width: width,
        justifyContent: 'space-between',
    },
    imgView: {
        marginTop:8,
        alignItems: 'center',
    },
    bottomLineView: {
        height: 1,
        backgroundColor: 'red',
        width: width,
    },
    rowTime: {
        alignSelf: 'flex-start'
    },
    viewlogo: {
        marginTop: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width,
        height: 100
    },
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  tabIcon: {
        fontSize: 14,
        right: 5,
        color:'white'
    }
})
