import React, { useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import DeckCard from './DeckCard'
import { connect } from 'react-redux'
import { fetchEntries } from '../utils/api'
import { getDecks } from '../actions'
import { setLocalNotification } from '../utils/notifications'

function DeckList({ dispatch, decks, navigation }) {
    useEffect(() => {
        fetchEntries()
            .then((decks) => dispatch(getDecks(decks)))
        
        setLocalNotification()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={decks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <DeckCard navigation={navigation} id={item.id} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#F8F8F8'
    }
})

function mapStateToProps(decks) {
    return {
        decks: Object.values(decks)
    }
}

export default connect(mapStateToProps)(DeckList)