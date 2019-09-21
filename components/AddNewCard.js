import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import DeckButton from './DeckButton'
import { handleAddCard } from '../actions'
import { connect } from 'react-redux'

function AddNewCard({ deck, dispatch, navigation }) {
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    onAddNewCard = () => {
        navigation.goBack()
        console.log('onAddNewCard - deck: ', deck)
        dispatch(handleAddCard(question, answer, deck))
            .then((result) => console.log('onAddNewCard: ', result))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add new question</Text>
            <TextInput style={styles.input} value={question} onChangeText={text => setQuestion(text)} placeholder='Question'/>
            <TextInput style={styles.input} value={answer} onChangeText={text => setAnswer(text)}  placeholder='Answer'/>
            <DeckButton label='Submit' type='dark' onClick={onAddNewCard} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    input: {
        minWidth: 200,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding:5,
    },
})

function mapStateToProps(decks, {navigation}) {
    const deckId = navigation.state.params.deckId
    console.log('AddNewCard - deckId: ', deckId)

    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(AddNewCard)