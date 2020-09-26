export const ADD_CONTACT = 'ADD_CONTACT';

export const addContact = (contactName, contactNumber) => {
    return {
        type: ADD_CONTACT, contactData: {
            name: contactName,
            number: contactNumber
        }
    }
}