import React, { Component } from 'react';
import { withRouter } from 'react-router'
import {
    View,
    Text,
    ListView,
    Dimensions,
    Image,
    Navigator,
    ScrollView,
    TouchableOpacity,
    TextInput,

} from 'react-native';
import { Font } from 'expo';
import styles from './assets/css/signup_css';
const logo = require("./assets/images/logo.png");
//import Button from 'react-native-button';
import { compose, graphql ,gql} from 'react-apollo'
import { StackNavigator } from 'react-navigation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko, Fumi } from 'react-native-textinput-effects';
import { SocialIcon, Button } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ApolloProvider } from 'react-apollo';
import client from '../../../api/ApolloClient';


export default class Signup extends Component {
   
    static navigationOptions = {
        header: null,
    };

    static propTypes = {
       // router: React.PropTypes.object.isRequired,
        createUser: React.PropTypes.func.isRequired,
        signinUser: React.PropTypes.func.isRequired,
        data: React.PropTypes.object.isRequired,
      }

      constructor(props) {
        super()
    
        this.state = {
            fontLoaded: false,
            name:'',
            email: '',
            password: '',
            confirmpass: '',
            emailSubscription:false
        }
      }

     
    async componentDidMount() {
        await Font.loadAsync({
            'Arial': require('./assets/fonts/arial.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Loading</div>)
        }

        // redirect if user is logged in
        if (this.props.data.user) {
            console.warn('already logged in')
            this.props.router.replace('/')
        }

        const { navigate } = this.props.navigation;
        return (

           // <Image source={require('./assets/images/2.jpg')} style={styles.container1}>
                <View style={styles.container1}>
                    <KeyboardAwareScrollView>
                        <View style={styles.container2}>
                            <View >
                                <Image source={logo} style={{ width: 350, height: 100 }} resizeMode="contain" />
                            </View>
                            <View style={{ marginTop: 25 }}>

                                <View style={styles.textAlign}>
                                    <Text style={styles.colotctext}>Create your account</Text>
                                </View>
                                <Fumi
                                    style={{ margin: 6 }}
                                    label={'Email'}
                                    iconClass={FontAwesomeIcon}
                                    iconName={'envelope'}
                                    iconColor={'#f95a25'}
                                    iconSize={20}
                                    onChangeText={(text) => this.setState({ email: text })}
                                />
                                <Fumi
                                    style={{
                                        margin: 6,
                                    }}
                                    label={'Password'}
                                    iconClass={FontAwesomeIcon}
                                    iconName={'lock'}
                                    iconColor={'#f95a25'}
                                    iconSize={20}
                                    onChangeText={(text) => this.setState({ password: text })}
                                    secureTextEntry
                                />
                                <Fumi
                                    style={{ margin: 6 }}
                                    label={'Confirm Password'}
                                    iconClass={FontAwesomeIcon}
                                    iconName={'lock'}
                                    iconColor={'#f95a25'}
                                    iconSize={20}
                                    onChangeText={(text) => this.setState({ confirmpass: text })}
                                    secureTextEntry
                                />
                                <View style={{ marginTop: 60 }}>
                                    <SocialIcon
                                        button
                                        style={{ marginTop: 15 }}
                                        type='medium'
                                        title='SignIn'
                                        onPress={() => this.createUser()}
                                    />
                                    <View style={styles.textAlign} >
                                        <Text style={{ fontWeight: 'bold', color: '#fff' }} onPress={() => navigate('Login')}>Aleardy have an account?? Sign In</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </View>
           // </Image>

        )
    }
    createUser = () => {
        //alert("hello")
        const { navigate } = this.props.navigation;
        if (this.state.email && (this.state.password == this.state.confirmpass)) {

            const {email, password, name, emailSubscription} = this.state
            alert("1234")
            this.props.createUser({variables: {email, password, name, emailSubscription}})
                .then((response) => {
                    alert("hiiiii")
                    this.props.signinUser({ variables: { email, password } })
                        .then((response) => {
                            window.localStorage.setItem('graphcoolToken', response.data.signinUser.token)
                            navigate('Login')
                        }).catch((e) => {
                            console.error(e)
                            // this.props.router.replace('/')
                        })
                }).catch((e) => {
                    console.error(e)
                    // this.props.router.replace('/')
                })
        }
        else {
            alert('please fill all the fields')
        }

    }



}
//const { navigate } = this.props.navigation;
const createUser = gql`
mutation ($email: String!, $password: String!, $name: String!, $emailSubscription: Boolean!) {
  createUser(authProvider: {email: {email: $email, password: $password}}, name: $name, emailSubscription: $emailSubscription) {
    id
  }
}
`

const signinUser = gql`
mutation ($email: String!, $password: String!) {
  signinUser(email: {email: $email, password: $password}) {
    token
  }
}
`

const userQuery = gql`
query {
  user {
    id
  }
}
`

// export default graphql(createUser, {name: 'createUser'})(
// graphql(userQuery, { options: { fetchPolicy: 'network-only' }})(
//   graphql(signinUser, {name: 'signinUser'})
// ))

