import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from "../../components/home/Header";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        // flex: 1,
    }
})
