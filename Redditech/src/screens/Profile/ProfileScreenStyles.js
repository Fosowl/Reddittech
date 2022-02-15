import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        flex: 100,
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
    },
    topContainer: {
        flex: 50,
        backgroundColor: '#272727',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    middleContainer: {
        flex: 50,
        backgroundColor: '#000000',
        paddingTop: '10%',
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 30,
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#47D704',
        marginTop: '35%',
    },
    basicText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: '5%',
    },
    tinyText: {
        color: '#A1A1A1',
        fontSize: 12,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '20%',
        marginRight: '0%',
        marginLeft: '10%',
    },
    centeredContent: {
        alignSelf: 'center',
        textAlign: 'center',
        overflow: "hidden",
    },
    sectionBtn: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: '0%',
        marginBottom: '0%',
        marginRight: '5%',
        marginLeft: '5%',
        borderWidth: 1,
        borderColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        marginLeft: '30%',
        marginTop: '45%',
        width: 100,
        height: 100,
        borderWidth: 0.25,
        borderColor: "white",
        borderTopLeftRadius : 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        resizeMode: 'cover',
        alignSelf: 'center',
    },
    settingsIcon: {
        marginTop: '15%',
        marginLeft: '20%',
    },
});
//style={{ flex: 1, flexDirection: 'row', alignSelf: 'center'}