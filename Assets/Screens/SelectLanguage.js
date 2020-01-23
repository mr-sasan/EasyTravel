/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {Text, View, Image, ScrollView, Alert, StatusBar, Dimensions, ActivityIndicator} from 'react-native';
const WINDOW = Dimensions.get('window');

/**
 * Styles Import Section
 * Description: All Styles will be import in this section!
 */
import CommonStyles from '../Styles/CommonStyles';

/**
 * Import Config File
 * Description: All Configs such as Server URL and so on!
 */
import { SERVER_URL } from '../config.js';

/**
 * Components Import Section
 * Description: All Needed Components will be Added in this Section!
 */
import { Heading } from "../Components/Heading";
import { LanguageBox } from "../Components/LanguageBox";

export default class SelectLanguage extends Component {
    constructor(props){
        super(props);
        this.state = {
            LanguagesList: undefined,
        };
    }

    componentDidMount(){
        fetch(SERVER_URL + "getLanguages.php")
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({ LanguagesList: responseJson });
        }).catch((error) => {
            console.error(error);
        });
    }

    createLanguageBoxesList(){
        return this.state.LanguagesList.map((value) => {
            return(
                <LanguageBox key={"LanguageID_"+value.Id} Title={value.NamePersian} imageSource={{uri: SERVER_URL + value.ImageUrl}} onPress={() => this.props.navigation.navigate('Categories', { LanguageId: value.Id}) } />
            );
        });
    }

    render(){
        if(this.state.LanguagesList === undefined){
            return(
                <View style={CommonStyles.container}>
                    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                    <Heading Title="انتخاب  زبان" HeadingNumber={1} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={CommonStyles.container}>
                            <ActivityIndicator style={CommonStyles.SelectLanguageLoading} size="large" color="#000" />
                        </View>
                    </ScrollView>
                </View>
            );
        }


        return (
            <View style={CommonStyles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <Heading Title="انتخاب  زبان" HeadingNumber={1} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[CommonStyles.container, CommonStyles.BoxesContainer, {height: WINDOW.height - 87}]}>
                        {this.createLanguageBoxesList()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}