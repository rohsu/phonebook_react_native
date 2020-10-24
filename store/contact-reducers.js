import { ADD_CONTACT, LIST_CONTACT} from './contact-actions';
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
                action.contactData.number,
                action.contactData.image,
                action.contactData.latitude,
                action.contactData.longitude,
            );

            return {
                contacts: state.contacts.concat(contact)
            }    

        case LIST_CONTACT: 
        // console.log( action.contacts)
        
            return {
                contacts: action.contacts.map(contact => 
                    new Contact(
                        contact.id.toString(), 
                        contact.name, 
                        contact.image, 
                        contact.latitude, 
                        contact.longitude
                    )
                )
            }        

        default: 
            return state;
    }
}