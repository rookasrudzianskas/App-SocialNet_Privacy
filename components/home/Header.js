import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View>
            <Image style={styles.logo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png'}} />
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
