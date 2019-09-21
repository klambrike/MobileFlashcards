import { AsyncStorage } from 'react-native'
export const FLASH_CARDS_STORAGE_KEY = 'MobileFlashcards:entries'

export function fetchEntries() {
    return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
        .then(getData)
}

export function addEntry(deck) {
    return AsyncStorage.mergeItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify(deck))
}


function getData(results) {
    return results === null
        ? setDummyData()
        : JSON.parse(results)
}

function setDummyData() {
    const dummyData = {
        odnfosdn: {
            title: 'React',
            id: 'odnfosdn',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        dfjsdoasdf: {
            title: 'JavaScript',
            id: 'dfjsdoasdf',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }

    AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify(dummyData))

    return dummyData
}