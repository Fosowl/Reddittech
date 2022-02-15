import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios'

import styles from './HomeScreenStyles'

/*
* \fn HomeScreen
* @brief Application Home page where subreddit's post are displayed
* @params route > used to retrieve the login token needed to access reddit API.
* @params navigation > React navigator used to navigate between page.
*/

const HomeScreen = ({route, navigation}) => {

    const token = route.params.token
    const [data, setData] = useState([]);

    React.useEffect(() => {
        getDataSubredditBest()
    }, [])

    /*
    * \fn getDataSubreddit
    * @brief extract data about Best subreddit from the reddit API
    */

    async function getDataSubredditBest() {
        var config = {
            method: 'get',
            url: 'https://oauth.reddit.com/best',
            headers: {
            'Authorization': 'Bearer ' + token
            },
        };

        axios(config)
        .then(function (response) {
            console.log("subreddit BEST");
            console.log(response.data)
            let data = response["data"]["data"]["children"];
            setData(data)
        })
        .catch(function (error) {
            console.log("GOT THE FOLLOWING ERROR :");
            console.log(error);
            console.log("-------------------------")
        });
    }

    /*
    * \fn getDataSubreddit
    * @brief extract data about Hot subreddit from the reddit API
    */

async function getDataSubredditHot() {
    var config = {
        method: 'get',
        url: 'https://oauth.reddit.com/hot',
        headers: {
        'Authorization': 'Bearer ' + token
        },
    };

    axios(config)
    .then(function (response) {
        console.log("subreddit HOT");
        console.log(response.data)
        let data = response["data"]["data"]["children"];
        setData(data)
    })
    .catch(function (error) {
        console.log("GOT THE FOLLOWING ERROR :");
        console.log(error);
        console.log("-------------------------")
    });
}

    /*
    * \fn getDataSubreddit
    * @brief extract data about New subreddit from the reddit API
    */

async function getDataSubredditNew() {
    var config = {
        method: 'get',
        url: 'https://oauth.reddit.com/new',
        headers: {
        'Authorization': 'Bearer ' + token
        },
    };

    axios(config)
    .then(function (response) {
        console.log("subreddit NEW");
        console.log(response.data)
        let data = response["data"]["data"]["children"];
        setData(data)
    })
    .catch(function (error) {
        console.log("GOT THE FOLLOWING ERROR :");
        console.log(error);
        console.log("-------------------------")
    });
}

    /*
    * \fn getDataSubreddit
    * @brief extract data about Top subreddit from the reddit API
    */

async function getDataSubredditTop() {
    var config = {
        method: 'get',
        url: 'https://oauth.reddit.com/top',
        headers: {
        'Authorization': 'Bearer ' + token
        },
    };

    axios(config)
    .then(function (response) {
        console.log("subreddit TOP");
        console.log(response.data)
        let data = response["data"]["data"]["children"];
        setData(data)
    })
    .catch(function (error) {
        console.log("GOT THE FOLLOWING ERROR :");
        console.log(error);
        console.log("-------------------------")
    });
}
    return (
        <View style = {styles.content}>
            <View style = {styles.contentContainer}>
            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginTop: '22%'}}>
                    <TouchableOpacity onPress={() => {getDataSubredditBest()}}>
                        <Text style={styles.sectionBtn}>Best</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {getDataSubredditHot()}}>
                        <Text style={styles.sectionBtn}>Hot</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {getDataSubredditNew()}}>
                        <Text style={styles.sectionBtn}>New</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {getDataSubredditTop()}}>
                        <Text style={styles.sectionBtn}>Top</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.content}>
            <FlatList
                data = {data}
                keyExtractor={(id, index) => index.toString()}
                renderItem = {({ item }) => (
                        <View style = {styles.containerSubreddit}>
                            <Text style = {styles.SubredditInfo}>r/{item.data.subreddit}</Text>
                            <Text style = {styles.SubredditInfo}>By u/{item.data.author} {item.data.created} hours ago</Text>
                            <Text style = {styles.SubredditTitle}>{item.data.title}</Text>
                            <Text style = {styles.SubredditLink}>{item.data.selftext}</Text>
                        </View>
                    )
                }
            />
            </View>
        </View>
    )
}

export default HomeScreen