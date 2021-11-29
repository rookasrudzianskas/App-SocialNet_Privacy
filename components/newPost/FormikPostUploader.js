import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import 'core-js/es6/promise';
import 'core-js/es6/set';
import 'core-js/es6/map';
import * as yup from 'yup';


const FormikPostUploader = () => {

    const uploadPostSchema = yup.object().shape({
        imageUrl: yup.string().url().required('A URL is required'),
        caption: yup.string().max(2200, 'A caption has reached the character limit.'),

    })

    return (
        <View>
            <Text style={{color: 'white'}}>FORMIX</Text>
        </View>
    );
};

export default FormikPostUploader;
