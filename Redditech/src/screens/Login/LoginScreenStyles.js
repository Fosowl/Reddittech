import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    content: {
        flex: 100,
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
    },
    Logo: {
        color: '#FFFFFF',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '5%',
    },
    contentContainer: {
        flex: 70,
        backgroundColor: '#272727',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container: {
        marginLeft: '8%',
        marginRight: '8%',
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
    input: {
        backgroundColor: '#3A3A3A',
        color: '#FFFFFF',
        width: '100%',
        height: '14%',
        borderRadius: 10,
        paddingLeft: '5%',
        paddingRight: '5%',

    },
    buttonLogin: {
        alignItems: 'center',
        backgroundColor: '#47D704',
        borderRadius: 15,
        width: '60%',
        height: '8%',
        marginLeft: '20%',
        marginRight: '20%',
        paddingTop: '4%',
        marginTop: '-5%',


    },
    buttonLoginText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    basicText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: '5%',

    },
})
