import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContactItem = (props) => {
    return (
        <View style={styles.contactView}>
            <TouchableOpacity onLongPress={props.removeOnClick}>
                <View style={styles.contactItem}>
                    <Text key={props.contactKey}><Text style={{ fontWeight: 'bold' }}>Name:</Text> {props.contactName} </Text>
                </View>
                <View style={styles.contactItem}>
                    <Text key={props.contactKey}><Text style={{ fontWeight: 'bold' }}>Number:</Text> {props.contactNumber} </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contactView: {
        borderColor: '#DDD',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        padding: 5,
    },
    contactItem: {
        minWidth: '100%',
    }
})

export default ContactItem;