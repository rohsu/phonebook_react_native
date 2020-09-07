import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ContactInput = (props) => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    
    const getContactName = (contactName) => {
		setContactName(contactName);
	}

	const getContactNumber = (contactNumber) => {
		setContactNumber(contactNumber);
	}

    return (
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
                keyboardType="number-pad"
            />
            <View style={styles.button}>
                <Button 
                    title='New Contact'
                    onPress={() => {props.onAddContact(contactName, contactNumber)}}
                />
            </View> 
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
		marginTop: 50,
	},
	title: {
		fontSize: 20,
		padding: 5,
		marginBottom: 5
	},
	button: {
        width: '80%',
        marginLeft: '10%', 
        marginRight: '10%',
		marginBottom: 20,
	},
	textInput: {
        width: '80%',
		padding: 8,
        marginLeft: '10%', 
        marginRight: '10%',
		marginBottom: 10,
		borderWidth: 1,
		borderColor: '#DDDDDD',
	},
})

export default ContactInput;