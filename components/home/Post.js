import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Divider} from "react-native-elements";

const Post = ({post}) => {
    return (
        <View style={{marginTop: 15}}>
            <Divider width={1} orientation={'vertical'} />
        </View>
    );
};

export default Post;

const PostHeader = ({post}) => (
    <View>
        <View>
            <Image />
            <Text></Text>
        </View>
    </View>
)


const styles = StyleSheet.create({

});
