import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import DeckList from './components/DeckList'
import AddNewDeck from './components/AddNewDeck'
import DeckView from './components/DeckView'
import AddNewCard from './components/AddNewCard'
import QuizView from './components/QuizView'
import Results from './components/Results'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const TabsNavigator = createBottomTabNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
    }
  },
  AddNew: {
    screen: AddNewDeck,
    navigationOptions: {
      title: 'Add new deck',
      tabBarLabel: 'Add new',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='add-circle-outline' size={30} color={tintColor} />
    }
  }
},
  {
    tabBarOptions: {
      activeTintColor: 'coral',
      inactiveTintColor: 'gray',
    },
  })

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabsNavigator,
    navigationOptions: {
      headerTransparent: 'true'
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Study deck',
    }
  },
  AddNewCard: {
    screen: AddNewCard,
    navigationOptions: {
      title: 'New question',
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title: 'Quiz',
    }
  },
  Results: {
    screen: Results,
    navigationOptions: {
      title: 'Results',
    }
  },
})

const AppNavigator = createAppContainer(StackNavigator)

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <AppNavigator />
      </Provider>
    )
  }
}

export default App