import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import ContactInput from './components/ContactInput';
import ContactItem from './components/ContactItem';

export default function App() {
	const [contacts, setContacts] = useState([]);
	const [countContacts, setCountContacts] = useState(10);

	const addContact = (contactName, contactNumber) => {
		setContacts(contacts => {
			setCountContacts(countContacts + 2);
			return [...contacts, {key: countContacts.toString(), name: contactName, number: contactNumber}]
		})
		console.log(contacts);
	}

	const removeContact = (keyToRemove) => {
		setContacts(contacts.filter((contact) => {
			return (contact.key != keyToRemove)
		}))
		console.log(contacts);

	}

	return (
		<View>
			<ContactInput onAddContact={addContact}/>
			<View>
				<FlatList style={styles.contactList}
					data={contacts}
					renderItem={
						(contact) => (
							<ContactItem 
								contactName={contact.item.name}
								contactNumber={contact.item.number}
								contactKey={contact.item.key}
								removeOnClick={() => {removeContact(contact.item.key)}}
							/>
						)
					}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	contactList: {
		minWidth:'100%',
	},
});
