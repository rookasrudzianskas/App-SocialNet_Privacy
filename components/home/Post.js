import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Divider} from "react-native-elements";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//<AntDesign name="like2" size={24} color="black" />
//<FontAwesome5 name="comment-alt" size={24} color="black" />
// <Feather name="share" size={24} color="black" />
//<MaterialIcons name="save-alt" size={24} color="black" />

const Post = ({post}) => {
    return (
        <View style={{marginTop: 15}}>
            <Divider width={1} orientation={'vertical'} />
            <PostHeader post={post} />
            <PostImage post={post} />
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

        <View>
            <Text style={{color: 'white', fontWeight: '900', marginRight: 5}}>...</Text>
        </View>


    </View>
);

const PostImage = ({post}) => (
    <View style={{width: '100%', height: 450,}}>
        <Image source={{ uri: post.imageUrl }} style={{height: '100%', resizeMode: 'cover'}} />
    </View>
);


const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginRight: 10,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    }
});
