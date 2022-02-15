import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { View, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import styles from './ProfileScreenStyles'

/*
* \fn profileScreen
* @brief The profile screen is used to display various informations about the user.
* @params route > use to retrieve the login token that allow to access reddit API;
* @params navigation > used to import the bottom navigator into the page.
*/

const profileScreen = ({route, navigation}) => {
    let token = route.params.token;

    const [username, setUsername] = useState('');
    const [sub_count, setSubCount] = useState('');
    const [description, setDescription] = useState('');
    const [profile_img, setImgUrl] = useState('');
    const [readable_date, setReadableDate] = useState('');

    /*
    * \fn fetchRedditAPI
    * fetch user data from reddit API using get request to recolt response as json
    * informations such as profile image, username, account creation date, user description and subscriber count
    * are then displayed
    */

    async function fetchRedditAPI() {
        var config = {
            method: 'get',
            url: 'https://oauth.reddit.com/api/v1/me?raw_json=1',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };
        axios(config)
        .then(function (response) {
            console.log("----API DATA-----");
            console.log(response["data"]["icon_img"]);
            console.log("-----------------");
            console.log(response["data"]);
            let profile_img = response["data"]["icon_img"]
            setImgUrl(profile_img);
            let date = response["data"]["created_utc"];
            let readable_date = new Date(date).toLocaleString('fr');
            console.log("loaded date : " + readable_date);
            setReadableDate(readable_date);
            let username = response["data"]["subreddit"]["display_name_prefixed"];
            console.log("loaded username : " + username);
            setUsername(username);
            let sub_count = response["data"]["subreddit"]["subscribers"];
            console.log("loaded sub count : " + sub_count);
            setSubCount(sub_count);
            let description = response["data"]["subreddit"]["public_description"];
            console.log("loaded user description : " + description);
            setDescription(description);
        })
        .catch(function (error) {
            console.log("Catch error in fetchRedditAPI() >>>");
            console.log(error);
        });
    }

    /*
    * \fn function fetchProfileImg
    * @brief function used to try fetching redditor profile image using secure oauth protocol.
    */

    React.useEffect(() => {
        console.log("access token ready : " + token);
        console.log("...");
        console.log("fetching reddit API...");
        fetchRedditAPI();
    }, []);

    const [sectionText, setSectionText] = useState('No publications from ' + username);

    /*
    \fn focusPublications
    @brief called when user press "Publications" button, update the page text.
    */

    function focusPublications() {
        console.log("focusing publications");
        setSectionText('No publications from ' + username);
    }

    /*
    \fn focusCommentary
    @brief called when user press "Commentary" button, update the page text;
    */
    function focusCommentary() {
        console.log("focusing commentary");
        setSectionText(username + ' has not yet commented anything');
    }

    /*
    \fn focusPublications
    @brief called when user press "About" button, update the page text;
    */
    function focusAbout() {
        console.log("focusing about");
        setSectionText(description);
    }

    return (
        <View style={styles.content}>
            <View style={styles.topContainer}>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                    <Image style={styles.profileImage} source={require('../../../assets/profile_icon.png')} />
                    <TouchableHighlight style={styles.settingsIcon} onPress={() => {navigation.navigate('Settings')}}>
                        <Image source={require('../../../assets/settings.png')} />
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={styles.title}>{username}</Text>
                    <Text style={styles.tinyText}>{sub_count} abonné(e)s             {readable_date}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
                    <TouchableOpacity onPress={() => {focusPublications()}}>
                        <Text style={styles.sectionBtn}>Publications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {focusCommentary()}}>
                        <Text style={styles.sectionBtn}>Commentaires</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {focusAbout()}}>
                        <Text style={styles.sectionBtn}>A propos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.centeredContent} >
                    <Text style={styles.basicText}>{sectionText}</Text>
                </View>
            </View>
        </View>
    );
}

export default profileScreen;
