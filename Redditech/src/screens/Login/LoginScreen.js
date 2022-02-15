import React from 'react'
import * as Animatable from 'react-native-animatable';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'

import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import axios from 'axios';
import base64 from 'react-native-base64'

import styles from './LoginScreenStyles'


WebBrowser.maybeCompleteAuthSession();
const qs = require('qs');

const discovery = {
  authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize',
  tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
};

/*
* \fn LoginScreen
* @brief Screen used by the user to login to the application
* @params navigation > React navigator used to navigate between page
*/

const LoginScreen = ({navigation}) => {

    const [request, response, promptAsync] = useAuthRequest(
      {
        clientId: '652BqyswJBXRreBgqvQUTQ',
        response_type: 'code',
        scopes: ['identity, read, account'],
        duration: 'permanent',
        redirectUri: makeRedirectUri({
          native: 'exp://48-8wn.anonymous.redditech.exp.direct:80',
        }),
      },
      discovery
    );

    React.useEffect(() => {
        console.log("entering useEffect()");
        if (response?.type === 'success') {
            const { code } = response.params;

            var data = qs.stringify({
                'grant_type': 'authorization_code',
                'code': code,
                'redirect_uri': 'exp://48-8wn.anonymous.redditech.exp.direct:80',
            });
            var config = {
                method: 'post',
                url: 'https://www.reddit.com/api/v1/access_token',
                headers: {
                    'Authorization': 'Basic ' + base64.encode("652BqyswJBXRreBgqvQUTQ:" + "")
                },
                data : data
            }

            axios(config).then(function (response) {
                console.log(response.data);
                navigation.navigate('Main', {
                    token: response.data.access_token,
                });
            })
            .catch(function(error) {
                console.log("FAILED TO LOGIN");
                console.log(error);
            });
        } else {
            console.log("response type failed : " + response?.type);
        }
    }, [response]);


    const [data, setData] = React.useState({
        mail:'',
        password:'',
    });

    const textInputChange = (value) => {
        setData({
            ...data,
            mail: value,
        });
    }

    const handlePasswordChange = (value) => {
        setData({
            ...data,
            password: value,
        });
    }

    return (
        <View style = {styles.content}>
            <View style = {styles.contentImg}>
            <Image style={ {alignSelf: 'center', marginTop: '15%'}} source={require('../../../assets/marvin.png')} />
            <Text style={styles.Logo}>Redditech</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.contentContainer}>
                <Text style={styles.title}>Connexion</Text>
                <View style={styles.container}>
                    <Text style={styles.subtitle}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="contact@gmail.com"
                        onChangeText={(value) => textInputChange(value)}
                    />

                    <Text style={styles.subtitle}>Mot de passe</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="2383"
                        onChangeText={(value) => handlePasswordChange(value)}
                    />
                </View>
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={() => {}}
                    >
                    <Text style={styles.buttonLoginText}>CONNEXION</Text>
                </TouchableOpacity>
                <Text style={styles.basicText}>Ou se connecter avec</Text>
                <TouchableOpacity
                    style={styles.buttonReddit}
                    onPress={() => {promptAsync()}}
                    >
                    <Image style={{alignSelf: 'center', marginTop: '3%'}} source={require('../../../assets/reddit.png')} />
                </TouchableOpacity>
                   <Text style={styles.basicText}>Vous n’avez pas de compte ? S'inscrire</Text>

            </Animatable.View>
        </View>
    )
}

export default LoginScreen