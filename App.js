import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
	const [contactName, setContactName] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [contacts, setContacts] = useState([]);
	const [countContacts, setCountContacts] = useState(10);

	const nameText = 'Name';
	const getContactName = (contactName) => {
		setContactName(contactName);
	}

	const getContactNumber = (contactNumber) => {
		setContactNumber(contactNumber);
	}

	const addContact = () => {
		setContacts(contacts => {
			setCountContacts(countContacts + 2);
			return [...contacts, {key: countContacts.toString(), name: contactName, number: contactNumber}]
		})
	}

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.title}>Phone Book</Text>
				<TextInput
					placeholder="Contact Name"
					style={styles.textInput}
					onChangeText={getContactName}
					value={contactName}
				/>
				<TextInput
					placeholder="Number"
					style={styles.textInput}
					onChangeText={getContactNumber}
					value={contactNumber}
				/>
				<View style={styles.button}>
					<Button 
						title='New Contact'
						onPress={addContact}
					/>
       			 </View> 
			</View>
			<View style={styles.contactList}>
				<FlatList 
					data={contacts}
					renderItem={
						(contact) => (
							<View style={styles.contactView}>
								<View style={styles.contactItem}>
								<Text key={contact.item.key}> Name: {contact.item.name} </Text>
								</View>
								<View style={styles.contactItem}>
									<Text key={contact.item.key}> Number: {contact.item.number} </Text>
								</View>
							</View>
						)
					}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		marginTop: 10,
	},
	title: {
		fontSize: 20,
		padding: 5,
		marginBottom: 5
	},
	button: {
		width: '240px',
		marginBottom: 20,
	},
	textInput: {
		padding: 8,
		marginBottom: 5,
		borderWidth: 1,
		borderColor: '#DDD',
	},
	contactList: {
		alignItems: 'center'
	},
	contactView: {
		borderColor: '#DDD',
		borderWidth: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5,
		padding: 5,
		width: '240px',
	},
	contactItem: {
	}
});
