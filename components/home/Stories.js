import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {USERS} from '../../data/stories';

const Stories = () => {
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal >
                {USERS.map((story, index) => {
                    return (
                        <View key={index} style={styles.user}>
                            <Image style={styles.story} source={{ uri: story.image }} />
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
};

export default Stories;

const styles = StyleSheet.create({
    user: {
        marginRight: 10,
        width: 70,
        height: 70,
        borderRadius: 35,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    story: {
        width: 70,
        height: 70,
    },
});
