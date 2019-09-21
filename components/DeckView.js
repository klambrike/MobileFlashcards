import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckButton from './DeckButton'

function DeckView({ deck, navigation }) {


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.subtitle}>{`${deck.questions.length} cards`}</Text>
            </View>
            <View>
                <DeckButton label='Add Card' type='light' style={{marginBottom: 20}}
                            onClick={() => navigation.navigate('AddNewCard', {deckId: deck.id})}/>
                <DeckButton label='Start Quiz' type='dark'
                            onClick={() => navigation.navigate('QuizView', {deckId: deck.id})}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F8F8F8'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 18,
        color: 'grey'
    },
})

function mapStateToProps(decks, { navigation }) {
    const deckId = navigation.state.params.deckId

    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(DeckView)