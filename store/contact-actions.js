export const ADD_CONTACT = 'ADD_CONTACT';
export const LIST_CONTACT = 'LIST_CONTACT';
import * as FileSystem from 'expo-file-system';
import { insertContact, searchContacts } from '../helpers/db';

export const listContacts = () => {
    return async dispatch => {
        try {
            const result = await searchContacts();
            dispatch({ type: LIST_CONTACT, contacts: Array.from(result.rows) || []})
        } catch (err) {
            console.log (err);
            throw err;
        }
    }
}

export const addContact = (contactName, contactNumber, contactImage, contactLatitude, contactLongitude) => {
    return async dispatch => {
        const fileName = contactImage.split('/').pop();
        const newPath = FileSystem.documentDirectory + fileName;
        try {
            await FileSystem.moveAsync({
                from: contactImage,
                to: newPath
            });
            const result = await insertContact(contactName, contactNumber, newPath, contactLatitude, contactLongitude);
            dispatch({type: ADD_CONTACT, contactData: {id: result.insertId, name: contactName, number: contactNumber, image: newPath, latitude: contactLatitude , longitude: contactLongitude }});
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

