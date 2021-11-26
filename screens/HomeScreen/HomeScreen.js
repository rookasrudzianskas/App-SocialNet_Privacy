import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from "../../components/home/Header";
import Stories from "../../components/home/Stories";
import Post from "../../components/home/Post";
// import { SafeAreaView } from 'react-native-safe-area-context';
import POSTS from "../../data/posts";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <Post  />
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
