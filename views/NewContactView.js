import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput,
	ScrollView
} from 'react-native';
import ContactInput from '../components/ContactInput';

const NewContactView = (props) => {
	{console.log(props.navigation.state.params.addContact)}
    return (
		<ScrollView>
			<View style={styles.form}>
				<ContactInput navigation={props.navigation}/>
			</View>
		</ScrollView>
    )
};

const styles = StyleSheet.create({
	form: {
		margin: 30
	},
});

export default NewContactView;