import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import DeckButton from './DeckButton'

function QuizView({ deck, navigation }) {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    const [showQuestionText, setShowQuestionText] = useState(true)
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)

    getText = () => {
        return showQuestionText ? deck.questions[currentQuestionNumber].question : deck.questions[currentQuestionNumber].answer
    }

    handleQuestionAnswered = (isCorrectAnswer) => {
        let correctAnswers = correctAnswersCount
        if (isCorrectAnswer) {
            correctAnswers++
            setCorrectAnswersCount(correctAnswers)
        }

        if (currentQuestionNumber + 1 < deck.questions.length) {
            setCurrentQuestionNumber(currentQuestionNumber + 1)
        }
        else {
            navigation.goBack()
            navigation.navigate('Results', {
                deckId: deck.id,
                correctAnswers: correctAnswers,
                questionsCount: deck.questions.length,
            })
        }
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <Text>{`Question ${currentQuestionNumber+1} of ${deck.questions.length}`}</Text>
                <Text style={styles.title}>{getText()}</Text>
                <TouchableOpacity onPress={() => setShowQuestionText(!showQuestionText)}>
                    <Text style={styles.answerButtonText}>
                        {showQuestionText ? 'Answer' : 'Question'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <DeckButton label='Correct' type='correct' style={{ marginBottom: 20 }}
                    onClick={() => handleQuestionAnswered(true)} />
                <DeckButton label='Incorrect' type='incorrect' onClick={() => handleQuestionAnswered(false)} />
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
        fontWeight: 'bold',
        textAlign: 'center'
    },
    answerButtonText: {
        fontSize: 18,
        color: 'coral'
    },
})

function mapStateToProps(decks, { navigation }) {
    const deckId = navigation.state.params.deckId

    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(QuizView)