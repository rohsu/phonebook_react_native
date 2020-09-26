import React from 'react';
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import NewContactView from '../views/NewContactView';
import ContactListView from '../views/ContactListView';


const PhoneBookNavigation = createStackNavigator ({
    ContactList: ContactListView,
    NewContact: NewContactView
});

export default createAppContainer (PhoneBookNavigation);