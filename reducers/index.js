import { ADD_CARD, ADD_DECK, LOAD_DECKS } from '../actions/types'

function decks(state = {}, action) {
    switch (action.type) {
        case LOAD_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}

export default decks