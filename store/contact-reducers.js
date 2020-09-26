import { ADD_CONTACT } from './contact-actions';
import Contact from '../models/Contact';

const initialState = {
    contacts: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_CONTACT: 
            const contact = new Contact(
                new Date().toString(),
                action.contactData.name,
                action.contactData.number
            );

            return {
                contacts: [...state.contacts, contact]
            }        
        default: 
            return state;
    }
}