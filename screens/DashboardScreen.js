import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './home/index';
// contacts stack
import FriendsListScreen from './contacts/friends-list';
import FriendsRequestScreen from './contacts/friends-request';

import BookcaseScreen from './bookcase';
import NotificationsScreen from './notifications';


const ContactsStack = createStackNavigator(
    {
        FriendsList: {screen: FriendsListScreen},
        FriendsRequest: {screen: FriendsRequestScreen}
    },
    {
        headerMode: 'none'
    }
)

export default createBottomTabNavigator (
    {
        Home: HomeScreen,
        Contacts: ContactsStack,
        Bookcase: BookcaseScreen,
        Notifications: {
            screen: NotificationsScreen,
            navigationOptions: { title: 'Notifications' }
        },
    },
    {
        initialRouteName: 'Bookcase',
        navigationOptions: ({ navigation }) => ({      
            // icons
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
            
                // determine OS
                if (Platform.OS === 'ios') {
                    iconName = 'ios-';
                } else {
                    iconName = 'md-';
                }
                
                // Asign icon
                if (routeName === 'Home') {
                    iconName += `home`;

                } else if (routeName === 'Contacts') {
                    iconName += `people`;
                    
                } else if (routeName === 'Bookcase') {
                    iconName += `book`;

                } else if (routeName === 'Notifications') {
                    iconName += `notifications`;
                } 

                // for dev.. can be deleted in prod
                else {
                    iconName += 'alarm';
                }
        
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
    },

);
    