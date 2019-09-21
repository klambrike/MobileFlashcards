import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import DeckButton from './DeckButton'
import { handleAddDeck } from '../actions'
import { connect } from 'react-redux'

function AddNewDeck({ dispatch, navigation }) {
    const [deckTitle, setDeckTitle] = useState('')

    onAddNewDeck = () => {
        navigation.goBack()
        dispatch(handleAddDeck(deckTitle))
            .then((result) => navigation.navigate('DeckView', { deckId: Object.keys(result.deck)[0] }))
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={styles.input} value={deckTitle} onChangeText={text => setDeckTitle(text)} />
                <DeckButton label='Submit' type='dark' onClick={onAddNewDeck} />
            </View>
            <View style={{flex: 1}}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F8F8F8'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        minWidth: 200,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'white'
    },
})

export default connect()(AddNewDeck)