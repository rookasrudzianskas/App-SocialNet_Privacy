import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Header = () => {
    return (
        <View>
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={styles.logo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png'}} />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
});
