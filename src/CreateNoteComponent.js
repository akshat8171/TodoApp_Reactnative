import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native'


const CreateNoteComponent = (props) => {
    //console.log(props)
    const [newNoteText, setNewNoteText] = useState('')

    return <View>
        <TextInput
        style={styles.textInputStyles}
        autoCorrect={false}
        autoCapitalize="none"
        multiline={true}
        value={newNoteText}
        onChangeText={(currentText) => setNewNoteText(currentText)}
        />
        <Button
            title={"Create Note"}
            onPress={() => {
                props.onCreateButtonPress(newNoteText)
                setNewNoteText('')
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    textInputStyles: {
        margin:10,
        padding:10,
        borderWidth: 5,
        width: 350,
        height: 140,
        justifyContent: 'center',
        borderRadius: 10
    }
});

export default CreateNoteComponent;
