import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ContactItem = (props) => {
    return (
        <TouchableOpacity onLongPress={props.removeOnClick}>
            <View style={styles.contactView}>
                <View>
                    <Image
                        style={styles.image}
                        source={{uri: props.contactImage}}
                    />
                </View>
                <View style={styles.contactItem}>
                    <View>
                        <Text style={styles.contactName} key={props.contactKey}> {props.contactName} </Text>
                    </View>
                    <View style={styles.contactNumber}>
                        <Text style={styles.contactNumber} key={props.contactKey}> {props.contactNumber} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
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
        flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    contactItem: {
        padding: 10
    },
    contactName: {
       fontSize: 18,
       fontWeight: 'bold'
    },
    contactNumber: {
       fontSize: 14
    }
    
   
})

export default ContactItem;