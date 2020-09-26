import React, {useState} from 'react';
import {
    View,
    Button,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

const SelectGalleryImage = (props) => {
    const [imageURI, setImageURI] = useState();
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });
        console.log(result);
        setImageURI(result.uri);
        props.onSelectedImage(result.uri);
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.previewImage}>
                {
                    (imageURI) ?  
                    <Image
                        source={{uri: imageURI}}
                        style={styles.image}
                    /> 
                    :
                    <Text>None image selected</Text>
                }
            </View>
            <Button
                title="Choose Image"
                color="black"
                onPress={pickImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 16,
    },
    previewImage: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: '50%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '50%'
    }
});

export default SelectGalleryImage;