import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from './style';
const Task = (props) => {
    const handDelete = () => {
        Alert.alert(
            "Alert Thong bao",
            "Ban co muon xoa khong?",
            [
                {
                    text: "Huy",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
    const number= props.number+1;
    const colorBg = number% 2 ===0 ? styles.even:styles.old;

    const handEdit = () => {
        alert("edit")
    }
    return (
        <TouchableOpacity >
            <View style={styles.item}>

                <View style={styles.itemTask}>
                <View style={[styles.square,colorBg]}>
                    <Text>{number}</Text>
                </View>
                <View style={styles.content}>
                    <Text>{props.task}</Text>
                </View>
                </View>
                <TouchableOpacity onPress={handDelete}>
                    <View style={styles.icon}>
                        <Text>
                            delete
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handEdit}>
                    <View style={styles.icon}>
                        <Text>
                            Edit
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>

    )
}

export default Task