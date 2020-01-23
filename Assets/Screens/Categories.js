/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {Text, View, Image, ScrollView, StatusBar, ActivityIndicator} from 'react-native';

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
import { CategoryBox } from "../Components/CategoryBox";

var LanguageId = 0;

export default class SelectLanguage extends Component {
    constructor(props){
        super(props);
        this.state = {
            CategoriesList: undefined,
        };
    }

    
    componentDidMount(){
        LanguageId = this.props.navigation.getParam('LanguageId', 0);
        if(LanguageId === 0){
            this.props.navigation.pop();
        }

        let requestData = new FormData();
        requestData.append("language_id", LanguageId);
        
        fetch(SERVER_URL + "getCategories.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: requestData,
        })
        .then(response => { return response.json(); })
        .then((responseJson) => {
            this.setState({ CategoriesList: responseJson });
        }).catch((error) => {
            console.error(error);
        });
                
    }

    createCategoryBoxesList(){
        return this.state.CategoriesList.map((value) => {
            return(
                <CategoryBox key={"CategoryId_" + value.Id} Title={value.Name} iconSource={{uri: SERVER_URL + value.ImageUrl}} SentenceCount={value.RoundedCount} RippleColor={value.RippleColorAndroid} onPress={() => this.props.navigation.navigate('SentencesList', { CategoryId: value.Id }) } />
            );
        });
    }


    render(){
        if(this.state.CategoriesList === undefined){
            return(
                <View style={CommonStyles.container}>
                    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                    <Heading Title="انتخاب دسته بندی" HeadingNumber={1} />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[CommonStyles.container, {paddingBottom: 20}]}>
                            <ActivityIndicator style={CommonStyles.SelectLanguageLoading} size="large" color="#000" />
                        </View>
                    </ScrollView>
                </View>
            );
        }


        return (
            <View style={CommonStyles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <Heading Title="انتخاب دسته بندی" HeadingNumber={1} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[CommonStyles.container, CommonStyles.BoxesContainer, {paddingBottom: 20}]}>
                        {this.createCategoryBoxesList()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}