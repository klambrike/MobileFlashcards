import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DeckButton from './DeckButton'
import { clearNotifications, setLocalNotification } from '../utils/notifications'

function Results({ navigation }) {
    useEffect(() => {
        clearNotifications()
            .then(() => setLocalNotification())
    }, []) 
    
    const {correctAnswers, questionsCount, deckId} = navigation.state.params

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.content}>{`${correctAnswers} answers out of ${questionsCount} (${correctAnswers/questionsCount*100}%) were correct`}</Text>
            </View>
            <View>
                <DeckButton label='Try again?' type='light' style={{ marginBottom: 20 }}
                    onClick={() => {
                        navigation.goBack()
                        navigation.navigate('QuizView', {deckId: deckId})
                    }} />
                <DeckButton label='Back to deck' type='dark' onClick={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8',
    },
    content: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    }
})

export default Results