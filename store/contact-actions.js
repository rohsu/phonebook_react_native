export const ADD_CONTACT = 'ADD_CONTACT';

export const addContact = (contactName, contactNumber, contactImage) => {
    return {
        type: ADD_CONTACT, contactData: {
            name: contactName,
            number: contactNumber,
            image: contactImage
        }
    }
}