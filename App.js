import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import styles from "./App.component.style";
import { Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Task from "./src/components/task";
import Form from "./src/components/form/Form";

export default function App() {

  return (
    <View style={styles.container}>


      <View style={styles.body}>
        <Text style={styles.header}>To Do list</Text>
        <View style={styles.topTitle}>

        </View>
        <View style={styles.listContent}>
          <ScrollView>
           <Task/>
   
          </ScrollView>

        </View>
      </View>
      <View style={styles.footer}>
        <Form/>
      </View>

    </View>
  );
}

