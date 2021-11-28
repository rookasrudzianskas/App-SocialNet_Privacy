import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Divider} from "react-native-elements";

const Post = ({post}) => {
    return (
        <View style={{marginTop: 15}}>
            <Divider width={1} orientation={'vertical'} />
            <PostHeader post={post} />
        </View>
    );
};

export default Post;

const PostHeader = ({post}) => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>{post?.user}</Text>
        </View>
    </View>
)


const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginRight: 10,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    }
});
