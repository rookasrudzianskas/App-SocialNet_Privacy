import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Header from "../../components/home/Header";
import Stories from "../../components/home/Stories";
import Post from "../../components/home/Post";
import {POSTS} from "../../data/posts";
import BottomTabs from "../../components/home/BottomTabs";
import {bottomTabIcons} from "../../assets/Bottom Tab Icons";
// import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 140}}>
                {POSTS.map((post, index) => {
                    return <Post key={index} post={post} />
                })}
            <BottomTabs icons={bottomTabIcons} />
            </ScrollView>

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
