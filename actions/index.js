import { ADD_DECK, LOAD_DECKS, ADD_CARD } from './types'
import { addEntry } from '../utils/api'

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function handleAddDeck(deckTitle) {
    return (dispatch) => {
        const deck = generateDeck(deckTitle)
        return addEntry(deck)
            .then(() => dispatch(addDeck(deck)))
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

function generateDeck(title) {
    const id = generateUID()
    let deck = {
        [id]: {
            title,
            id,
            questions: []
        }
    }

    return deck
}

export function getDecks(decks) {
    return {
        type: LOAD_DECKS,
        decks
    }
}

export function handleAddCard(question, answer, deck) {
    return (dispatch) => {
        const questionObj = {
            question,
            answer
        }

        const newDeck = {
            [deck.id]: {
                ...deck,
                questions: [
                    ...deck.questions,
                    questionObj
                ]
            }
        }

        return addEntry(newDeck)
            .then(() => dispatch(addDeck(newDeck)))
    }
}