/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * Title: Heading Component
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

/**
 * Styles Import Section
 * Description: All Styles will be import in this section!
 */
import Styles from '../Styles/HeadingStyles';

export const Heading = ({Title, HeadingNumber}) => {
    switch (HeadingNumber) {
        case 1:
            return (
                <View style={Styles.Heading1Container}>
                    <Text style={Styles.Heading1Text}>{Title}</Text>
                </View>
            );
            break;
        case 2:
            return (
                <View style={Styles.Heading1Container}>
                    <Text style={Styles.Heading1Text}>{Title}</Text>
                </View>
            );
            break;
        case 3:
            return (
                <View style={Styles.Heading1Container}>
                    <Text style={Styles.Heading1Text}>{Title}</Text>
                </View>
            );
            break;
        case 4:
            return (
                <View style={Styles.Heading1Container}>
                    <Text style={Styles.Heading1Text}>{Title}</Text>
                </View>
            );
            break;
        default:
            return (
                <View style={Styles.Heading1Container}>
                    <Text style={Styles.Heading1Text}>{Title}</Text>
                </View>
            );
            break;
    }
}