import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/*<HomeScreen />*/}
        <NewPostScreen />
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'black',
      flex: 1,
  },
});
