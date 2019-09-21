import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'
import { AsyncStorage } from 'react-native'

const NOTIFICTION_KEY = 'MobileFlashcards:notifications'

export function createNotification() {
    return {
        title: '🎒Time to train your brain',
        body: 'It\'s time to practice your some of your study decks',
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            vibrate: true,
            priority: 'high',
            sticky: false,
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICTION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(16)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            )

                            AsyncStorage.setItem(NOTIFICTION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

export function clearNotifications() {
    return AsyncStorage.removeItem(NOTIFICTION_KEY)
        .then(() => Notifications.cancelAllScheduledNotificationsAsync())
}