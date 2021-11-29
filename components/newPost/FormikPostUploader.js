import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import 'core-js/es6/promise';
import 'core-js/es6/set';
import 'core-js/es6/map';
import * as yup from 'yup';
import {Formik} from "formik";

const uploadPostSchema = yup.object().shape({
   imageUrl: yup.string().url().required('A URL is required'),
   caption: yup.string().max(2200, 'A caption has reached the character limit.'),

});

const PLACEHOLDER_IMG = 'https://i.imgur.com/DiEdUYn.jpeg';

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

    return (
        <Formik
            initialValues={{caption: '', imageUrl: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
        >

            {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (

                )}

        {/*    caption and url    */}
        </Formik>
    );
};

export default FormikPostUploader;
