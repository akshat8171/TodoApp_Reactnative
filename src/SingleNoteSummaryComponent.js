import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const SingleNoteSummaryComponent = (props) => {
    return <View  backgroundColor={randomBackground()} style={styles.notestyle}>
        <View style={styles.dateStyle}>
        <Text style={styles.dateTextProperties}> {props.myNoteDate.toDateString()} </Text>
        </View>
        <View style={styles.textViewStyle}>
            <Text style={styles.noteTextProperties}> {props.myNoteText}</Text>
        </View>
    </View>
}

const randomBackground = () => {
    var red = Math.floor(Math.random() * 125) // 123
    var green = Math.floor(Math.random() * 125) // 45
    var blue = Math.floor(Math.random() * 125) // 43

    // String Interpolation
    // In a string -> isnert a value of some other data type
    // ""  ''  ``

    return `rgb(${red}, ${green}, ${blue})` // rgb(123, 45, 43)
}

const styles = StyleSheet.create({
    dateTextProperties: {
        fontSize: 14,
        color: '#c0c0c0'
    },
    noteTextProperties:{
      fontSize: 16,
      color: '#D3D3D3'
    },
    notestyle: {
        height: 165,
        width: 165,
        margin: 10,
        borderRadius: 10,
        padding:3
    },
    dateStyle:{
      alignItems:"center",
      justifyContent: "center"
    },
    textViewStyle:{
      marginTop:12
    }
});


export default SingleNoteSummaryComponent;
