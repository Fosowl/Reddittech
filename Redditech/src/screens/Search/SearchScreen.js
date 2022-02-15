import React, { useEffect, useState } from "react";
import * as Animatable from 'react-native-animatable';
import { View, Text, Image, TextInput, FlatList, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback} from 'react-native'
import axios from 'axios'

import styles from './SearchScreenStyles'

/*
* \fn SearchScreen
* @brief Search screen used to search for subreddit.
* @params navigation > used to import the bottom navigator into the page.
*/

const SearchScreen = ({route, navigation}) => {
    const token = route.params.token;
    const [search, updateSearch] = useState('');
    const [data, setData] = useState([]);

    console.log("On search screen with access token : " + token);

    async function searchSubreddit(subreddit_name) {
        var config = {
            method: 'get',
            url: 'https://oauth.reddit.com/api/search_reddit_names',
            header: {
                'Authorization': 'Bearer ' + token
            }
        };
        axios(config)
        .then(function(response) {
            console.log("API returned response for search :");
            console.log(response["data"]);
        })
        .catch(function (error) {
            console.log("Catch error in searchSubreddit() >>>");
            console.log(error);
        });
    }

    return (
        <View style={styles.content}>
            <View style={styles.topContainer}>
                <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center'}}>
                    <TextInput style={styles.searchBar} value="Search subreddit..." onChangeText={(event) => {
                        searchSubreddit("science");
                    }}/>
                </View>
            </View>
            <View style={styles.middleContainer}>
                <FlatList
                    data = {data}
                    keyExtractor={(id, index) => index.toString()}
                    renderItem = {({ item }) => (
                            <View>
                            </View>
                        )
                    }
                />
            </View>
        </View>
    );
}

export default SearchScreen