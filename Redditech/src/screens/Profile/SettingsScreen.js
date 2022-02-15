import React from 'react'
import {useState} from "react";
import { View, Text, Image, Switch } from 'react-native'
import styles from './SettingsScreenStyles'


/*
* \fn SettingsScreen
* @brief SettingsScreen > The page use to change settings of the reddit application
* @params navigation > Used to import the bottom navigator into the page.
*/

const SettingsScreen = ({navigation}) => {
    const [isEnabledDark, setDark] = useState(false);
    const [isEnabledNSFW, setNSFW] = useState(false);
    const [isEnabledPublic, setPublic] = useState(false);
    const [isEnabledComment, setComment] = useState(false);
    const toggleDark = () => setDark(previousState => !previousState);
    const toggleNSFW = () => setNSFW(previousState => !previousState);
    const togglePublic = () => setPublic(previousState => !previousState);
    const toggleComment = () => setComment(previousState => !previousState);
    const settings_icon = '../../../assets/settings.jpg'

    return(
        <View style={styles.content}>
            <View style={styles.topContainer}>
                <Image style={styles.settingsIcon} source={settings_icon}/>
                <Text style={styles.title}>Settings</Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={{ flex: 1, flexDirection: 'column', alignSelf: 'center'}}>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.basicText}>Dark Mode</Text>
                        <Switch
                          trackColor={{ false: "#FFF", true: "#47D704" }}
                          thumbColor={isEnabledDark ? "#47D704" : "#f4f3f4"}
                          onValueChange={toggleDark}
                          value={isEnabledDark}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.basicText}>Allow NSFW</Text>
                        <Switch
                          trackColor={{ false: "#FFF", true: "#47D704" }}
                          thumbColor={isEnabledNSFW ? "#47D704" : "#f4f3f4"}
                          onValueChange={toggleNSFW}
                          value={isEnabledNSFW}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.basicText}>Public profile</Text>
                        <Switch
                          trackColor={{ false: "#FFF", true: "#47D704" }}
                          thumbColor={isEnabledPublic ? "#47D704" : "#f4f3f4"}
                          onValueChange={togglePublic}
                          value={isEnabledPublic}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={styles.basicText}>Allow comment on profile</Text>
                        <Switch
                          trackColor={{ false: "#FFF", true: "#47D704" }}
                          thumbColor={isEnabledComment ? "#47D704" : "#f4f3f4"}
                          onValueChange={toggleComment}
                          value={isEnabledComment}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SettingsScreen;