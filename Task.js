import React, {useState} from 'react';
import { View, Text, StyleSheet, ProgressViewIOSComponent, TouchableOpacity, Modal } from "react-native";

var show = false;
const Task = (props) => {
    //var show = false
    return(
        <TouchableOpacity style={styles.item} onPress={() => debugOutput()}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={() => outputIndex()}/>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
            <Modal visible = {show} transparent={true}>
                <View>

                </View>
            </Modal>
        </TouchableOpacity>
    )
    function outputIndex(){
        props.deletetask(props.childIndex);
    }
    function debugOutput(){
        show = true;
        console.log(show);
    }
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding:15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

export default Task;