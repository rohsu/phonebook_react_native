import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import * as contactActions from '../store/contact-actions';
import * as ImagePicker from 'expo-image-picker'
import SelectGalleryImage from './SelectGalleryImage';
// import GetLocation from '../components/GetLocation';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'

const ContactInput = (props) => {
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [contactImageURI, setContactImageURI] = useState();
    const [contactLatitude, setContactLatitude] = useState();
    const [contactLongitude, setContactLongitude] = useState();

    const getLocation = async () => {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted') {
            Alert.alert(
                "Sem permissão para uso do mecanismo de localização",
                "É preciso liberar acesso ao mecanismo de localização",
                [{text: 'OK'}] //{text: 'OK', onPress: () => {}}
            );  
        }

        const position = await Location.getCurrentPositionAsync({timeout: 5000});
        const {latitude, longitude} = position.coords;
        setContactLatitude(latitude);
        setContactLongitude(longitude);
    }
    const dispatch = useDispatch();

    const getContactName = (contactName) => {
		setContactName(contactName);
	}

	const getContactNumber = (contactNumber) => {
		setContactNumber(contactNumber);
    }
    
    const addContact = () => {
        dispatch(contactActions.addContact(contactName, contactNumber, contactImageURI, contactLatitude, contactLongitude));
		setContactName('');
		setContactNumber('');
        props.navigation.goBack();
    }

    getLocation();
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
            <SelectGalleryImage onSelectedImage={setContactImageURI}/>
            <View style={styles.button}>
                <Button 
                    title='New Contact'
                    onPress={addContact}
                />
            </View> 
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
		backgroundColor: '#ffffff',
		alignItems: 'center',
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