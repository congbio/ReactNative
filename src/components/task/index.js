import { View, Text,TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './style';
const Task = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <View style={styles.square}>
                    <Text>1</Text>
                </View>
                <View style={styles.content}>
                    <Text>Lau nha</Text>
                </View>
                <View style={styles.icon}>
                    <Text>
                        icon
                    </Text>
                </View>
            </View>
        </TouchableOpacity>

    )
}

export default Task