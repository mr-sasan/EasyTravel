/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * Title: Category Box
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {Text, View, Image, TouchableNativeFeedback} from 'react-native';
import { toPersian } from 'persian';

/**
 * Import Style File
 * Description: Style of the Category Box is imported!
 */
import Styles from '../Styles/CategoryBoxStyle';

export const CategoryBox = ({Title, iconSource, SentenceCount, RippleColor, onPress}) => {
    return(
        <View style={Styles.CategoryContainer}>
            <TouchableNativeFeedback style={Styles.CategoryTouchableNativeFeedback} background={TouchableNativeFeedback.Ripple(RippleColor, true)} onPress={onPress}>
                <View style={Styles.InnterContainer}>
                    <View style={Styles.CategoryImageBackSquare} />
                    <Image style={Styles.CategoryImage} source={iconSource} />
                    <View style={Styles.CategoryContextContainer}>
                        <Text style={Styles.CategoryTitle}>{Title}</Text>
                        <Text style={Styles.CategoryDescription}>بیش از {toPersian(SentenceCount)} جمله کاربردی</Text>
                    </View>
            </View>
            </TouchableNativeFeedback>
        </View>
    );
}