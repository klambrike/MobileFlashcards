import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function DeckButton({label, type, onClick, style}) {
    getButtonStyleFromType = (type) => {
        switch(type) {
            case 'correct':
                return styles.buttonCorrect
            case 'incorrect':
                return styles.buttonIncorrect
            case 'dark':
                return styles.buttonDark
    
            default:
                return styles.buttonLight
        }
    }

    return (
        <TouchableOpacity style={[this.getButtonStyleFromType(type), style]} onPress={onClick}>
            <Text style={type === 'light' ? '' : styles.buttonDarkText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonDark: {
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        paddingLeft: 50,
        paddingRight: 50,
        elevation: 5,
    },
    buttonDarkText: {
        color: 'white'
    },
    buttonLight: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        padding: 20,
        paddingLeft: 50,
        paddingRight: 50,
        elevation: 5,
        backgroundColor: '#fff'
    },
    buttonCorrect: {
        backgroundColor: '#3AD11F',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 100,
        paddingRight: 100,
        elevation: 5,
    },
    buttonIncorrect: {
        backgroundColor: '#E83E96',
        borderRadius: 10,
        padding: 20,
        paddingLeft: 100,
        paddingRight: 100,
        elevation: 5,
    },
})

export default DeckButton