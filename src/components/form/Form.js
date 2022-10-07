import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
const Form = (props) => {
  const [task, setTask] = useState('')
  const handAddTask = () => {
    if (task.length == 0) {
      alert("gia tri o in put khong duoc rong");
      return false;
    }
    props.onAddTask(task);
    setTask('');

  }

  return (
    <View style={styles.addTask}>
      <TextInput onChangeText={(text) => setTask(text)} style={styles.input} value = {task} />
      <TouchableOpacity onPress={handAddTask} >
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Form