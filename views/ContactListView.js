import React, {useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet, 
    Platform,
    FlatList
} from 'react-native';

import ContactItem from '../components/ContactItem';

import { useDispatch, useSelector } from "react-redux";

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ContactHeaderButton from '../components/ContactHeaderButton';

import * as contactActions from '../store/contact-actions';


const ContactListView = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contactActions.listContacts())
    });

    const contacts = useSelector(state => state.contacts.contacts) 

    return (
        <View>
			<View>
				<FlatList style={styles.contactList}
                    data={contacts}
                    keyExtractor={contact => contact.id}
					renderItem={
						(contact) => (
							<ContactItem 
								contactName={contact.item.name}
								contactNumber={contact.item.number}
								contactImage={contact.item.image}
								contactKey={contact.item.id}
								removeOnClick={() => {removeContact(contact.item.key)}}
							/>
						)
					}
				/>
			</View>
		</View>
    )
};

ContactListView.navigationOptions = navigationData => {
    return {
        headerTitle: "Contact List",
        headerRight: () =>{
            return (
                <HeaderButtons
                    HeaderButtonComponent={ContactHeaderButton}>
                    <Item 
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => {
                        navigationData.navigation.navigate ("NewContact");
                    }}
                    />
                </HeaderButtons>
            )
        }  
    }
}

const styles = StyleSheet.create({
	
});

export default ContactListView;