import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';


export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive:
            'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active:
            'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive:
            'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active:
            'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
        inactive:
            'https://yt3.ggpht.com/ytc/AKedOLRY9Un_v7Xr9dG1F5NEkqGsGSqwqRz0O3w3r1mI=s900-c-k-c0x00ffffff-no-rj',
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home');

    const Icon = ({icon}) => (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
          <Image source={{uri: icon.inactive }} style={styles.icon} />
      </TouchableOpacity>
    );

    return (
        <View>
            {icons.map((icon) => (
                <Icon key={icon.name} icon={icon} />
            ))}
        </View>
    );
};

export default BottomTabs;

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    },
});
