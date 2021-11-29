import React, {useState} from 'react';
import { Keyboard, View, Text, TextInput, Image, StyleSheet, ProgressViewIOSComponent, TouchableOpacity, KeyboardAvoidingView, Modal } from "react-native";

//var show = false;
//const [show, setShow] = useState(false);
const Task = (props) => {
    const [show, setShow] = useState(false);
    const [taskDescription, setTaskDescription] = useState();
    //var show = false
    return(
        <TouchableOpacity style={styles.item} onPress={() => setShow(!show)}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square} onPress={() => outputIndex()}>
                    <Image source={require('./assets/BinIcon.jpg')} style={styles.binIcon}></Image>
                </TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>

            <Modal visible = {show} transparent={true}>
                <View style={styles.modalBackground}>
                    <View style={styles.modalBox}>
                        <TouchableOpacity style={styles.modalExit} onPress={() => setShow(!show)} />
                        <Text style={styles.modalTitle}>{props.text}</Text>

                        
                        <TextInput style={styles.modalText} placeholder={'Task Description'} value={taskDescription} onChangeText={text => setTaskDescription(text)} multiline={true} />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
    function outputIndex(){
        props.deletetask(props.childIndex);
    }
    function debugOutput(){
        //show = true;
        console.log(show);
        setShow(!show);
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
    modalBackground:{
        backgroundColor: '#000000aa',
        flex:1,
    },
    modalBox:{
        backgroundColor: '#ffffff',
        margin: 50,
        padding: 40,
        borderRadius: 10,
        flex: 1,
    },
    modalExit:{
        width: 24,
        height: 24,
        backgroundColor: '#EE0000',
        borderRadius: 5,
        marginLeft: 15,
        position: 'absolute',
        right: 20,
        top: 20
    },
    modalTitle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    modalText:{
        fontSize: 16,
        marginLeft: 0,
        margin: 10,
        width: 210,
    },
    binIcon: {
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 4,
        margin: 4
    }
});

export default Task;