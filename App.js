import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "./App.component.style";
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Task from "./src/components/task/index";
import Form from "./src/components/form/Form";

export default function App() {
  const [taskList, setTaskList] = useState([
      "launha",
      "sdhf",
      "jdhsfd"
    
  ])
  const handAddTask = (task) => {
    setTaskList([...taskList,task]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>To Do list</Text>
        <View style={styles.topTitle}>
        </View>
        <View style={styles.listContent}>
          <ScrollView>
            {
              taskList.map((ele,index)=>{
                return (
                  <Task task={ele} number= {index}/>
                )
              })
            }
             
          </ScrollView>

        </View>
      </View>
      <View style={styles.footer}>
        <Form onAddTask={handAddTask} />
      </View>

    </View>
  );
}

