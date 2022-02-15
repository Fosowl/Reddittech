import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    content: {
        flex: 100,
        backgroundColor: '#121212',
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        flex: 20,
        backgroundColor: '#272727',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container: {
        flex: 80,
    },
    input: {
        backgroundColor: '#3A3A3A',
        color: '#FFFFFF',
        width: '70%',
        height: '18%',
        borderRadius: 10,
        marginBottom: '5%',
        marginTop: '18%',
        marginLeft: '25%',
        marginRight: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',

    },
    img: {
        marginTop: '0%',

    },
    sectionBtn: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: '8%',
        marginLeft: '8%',
        borderWidth: 1,
        borderColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerSubreddit: {
        paddingTop: '2%',
        paddingBottom: '2%',
        paddingLeft: '4%',
        paddingRight: '4%',
        marginTop: '3%',
        backgroundColor: '#272727',
    },
    SubredditTitle: {
        marginTop: '3%',
        marginBottom: '2%',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#FFFFFF',
    },
    SubredditInfo: {
        color: '#595959',
    },
    SubredditLink: {
        color: '#FFFFFF',
    },
})
