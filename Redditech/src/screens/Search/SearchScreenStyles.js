import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    content: {
        flex: 100,
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
    },
    container: {
        marginLeft: '8%',
        marginRight: '8%',
    },
    topContainer: {
        flex: 20,
        backgroundColor: '#272727',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    middleContainer: {
        flex: 80,
        backgroundColor: '#000000',
        paddingTop: '10%',
        width: '100%',
        height: '100%',
    },
    contentImg: {
        flex: 30,
    },
    title: {
        fontSize: 30,
        fontStyle: 'normal',
        textAlign: 'center',
        color: '#47D704',
        marginTop: '10%',
    },
    subtitle: {
        fontSize: 14,
        fontStyle: 'normal',
        width: '100%',
        textAlign: 'left',
        color: '#FFFFFF',
        marginBottom: '5%',
        marginTop: '15%',
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
        marginTop: '1%',
        marginRight: '5%',
        marginLeft: '5%',
    },
    centeredContent: {
        alignSelf: 'center',
        textAlign: 'center',
        overflow: "hidden",
    },
    searchBar: {
        alignSelf: 'center',
        backgroundColor: '#FFF',
        top: 30,
        padding: 10,
        margin: 15,
        height: 40,
        width: 220,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    }
});
