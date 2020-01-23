/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * Title: Language Box
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {Text, View, Image, TouchableNativeFeedback} from 'react-native';

/**
 * Import Style File
 * Description: Style of the Language Box is imported!
 */
import Styles from '../Styles/LanguageBoxStyles';

export const LanguageBox = ({Title, imageSource, onPress}) => {
    return(
        <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#FFF')} >
            <View style={Styles.LanguageBoxContainer}>
                <Image style={Styles.LanguageBoxImage} source={imageSource} /> 
                <Text style={Styles.LanguageBoxTitle}>{Title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}