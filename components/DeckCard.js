import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

function DeckCard({ id, title, cardsCount, navigation }) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DeckView', { deckId: id })}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text>{`${cardsCount} cards`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 50,
        borderColor: '#B8B8B8',
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#383838'
    }

})

function mapStateToProps(decks,{id}) {
    const deck = decks[id]

    return {
        id,
        title: deck.title,
        cardsCount: deck.questions.length
    }
}

export default connect(mapStateToProps)(DeckCard)