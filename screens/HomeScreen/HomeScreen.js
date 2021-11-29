import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Header from "../../components/home/Header";
import Stories from "../../components/home/Stories";
import Post from "../../components/home/Post";
import {POSTS} from "../../data/posts";
// import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
            {/*<FlatList key={POSTS.imageUrl}  data={POSTS} renderItem={({item, index}) => (*/}
            {/*    <Post post={item}/>*/}
            {/*)}/>*/}
                {POSTS.map((post, index) => {
                    return <Post key={index} post={post} />
                })}
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
