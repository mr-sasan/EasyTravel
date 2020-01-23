/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {Text, View, Image, ScrollView, StatusBar, 
        Dimensions, Animated, TouchableHighlight, Alert, ActivityIndicator, SectionList} from 'react-native';
const WINDOW = Dimensions.get('window');
import Tts from 'react-native-tts';
import Search from 'react-native-search-box';


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
import { SentenceBox } from "../Components/SentenceBox";

var CategoryId = 0;
var loadSentenceCurrentPage = 1;
var searchSentenceCurrentPage = 1;

export default class SentencesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            SentencesList: undefined,
            SentencesSearchList: undefined,
            SearchText: "",
            isSearch: false,
            querySearch: "",
        };
    }

    componentDidMount(){
        CategoryId = this.props.navigation.getParam('CategoryId', 0);
        if(CategoryId === 0){
            this.props.navigation.pop();
        }
        this.loadSentencesFromPage(loadSentenceCurrentPage);
    }

    loadSentencesFromPage(page){
        let requestData = new FormData();
        requestData.append("category_id", CategoryId);
        requestData.append("current_page", page);
        
        fetch(SERVER_URL + "getSentences.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: requestData,
        })
        .then(response => { return response.json(); })
        .then((responseJson) => {
            if(responseJson && responseJson.length <= 0){
                return;
            }

            if(this.state.SentencesList !== undefined){
                var result = this.state.SentencesList;
                let f = 0;
                for(let UpdateValue of responseJson){
                    let i = 0;
                    for(let SentenceValue of this.state.SentencesList){
                        if(SentenceValue.CategoryId === UpdateValue.CategoryId){
                            SentenceValue.Sentences = SentenceValue.Sentences.concat(UpdateValue.Sentences);
                            result.splice(i,1);
                            result.push(SentenceValue);
                            responseJson.splice(f, 1);
                            break;
                        }
                        i++;
                    }
                    f++;
                }

                for(let UpdateValue of responseJson){
                    result.push(UpdateValue);
                }
            }else{
                result = responseJson;
            }
            
            this.setState({ SentencesList: result });
        }).catch((error) => {
            console.error(error);
        });
    }

    SearchSentencesFromPage(query, page = 1){
        let requestData = new FormData();
        requestData.append("category_id", CategoryId);
        requestData.append("current_page", page);
        requestData.append("query", query);

        fetch(SERVER_URL + "getSearchResult.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: requestData,
        })
        .then(response => { return response.json(); })
        .then((responseJson) => {
            if(responseJson && responseJson.length <= 0){
                return;
            }

            var result = this.state.SentencesSearchList;
            if(this.state.SentencesSearchList !== undefined){
                for(let UpdateValue of responseJson){
                    result.push(UpdateValue);
                }
            }else{
                result = responseJson;
            }
            console.log(result);
            
            this.setState({ SentencesSearchList: result, isSearch: true });
        }).catch((error) => {
            console.error(error);
        });
    }

    createSentenceBoxesList(){
        if(this.state.isSearch && this.state.SentencesSearchList !== undefined){
            return this.state.SentencesSearchList.map((value) => {
                return(
                    <SentenceBox key={"SentenceSearchedId_" + value.Id} PersianText={value.PersianSentence} TranselatedText={value.LanguageSentence} />
                );
            });
        }else{
            return this.state.SentencesList.map((value) => {
                return value.Sentences.map((InnerValue) => {
                    return(
                        <SentenceBox key={"SentenceId_" + InnerValue.Id} PersianText={InnerValue.PersianSentence} TranselatedText={InnerValue.LanguageSentence} />
                    );
                });
            });
        }
    }

    isScrollCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    
    render(){
        if(this.state.SentencesList === undefined){
            return(
                <View style={CommonStyles.container}>
                    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                    <Heading Title="لیست جملات" HeadingNumber={1} />
                    <ScrollView 
                        showsVerticalScrollIndicator={false}>
                        <ActivityIndicator style={CommonStyles.SelectLanguageLoading} size="large" color="#000" />
                    </ScrollView>
                </View>
            );
        }

        console.log(this.state.SentencesList);
        return (
            <View style={CommonStyles.container}>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                
                {/*<Heading Title="لیست جملات" HeadingNumber={1} /><Search
                    ref="search_box"
                    onChangeText={(SearchText) => this.setState({ SearchText })}
                    backgroundColor="#FFF"
                    tintColorSearch="#EAEBED"
                    titleCancelColor="#FF0000"
                    placeholder="جستجو"
                    direction="rtl"
                    cancelTitle="لغو"
                    tintColor="#000"
                    onChangeText={function(text){
                        if(text.trim() === ""){
                            this.setState({ isSearch: false, querySearch: text });
                        }
                    }}
                    onSearch={(text) => this.SearchSentencesFromPage(text) }
                    cancelButtonStyle={{justifyContent: 'center', alignItems: 'center', marginLeft: 10}}
                    cancelButtonTextStyle={{fontFamily: 'iransans', fontSize: 18,}}
                    inputStyle={{fontFamily: 'iransans'}}
                />*/}
                <SectionList
                    sections={this.state.SentencesList}
                    renderItem={({item}) => <SentenceBox key={"SentenceId_" + item.Id} PersianText={item.PersianSentence} TranselatedText={item.LanguageSentence} />}
                    renderSectionHeader={({section}) => <Text style={{paddingTop: 2,
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingBottom: 2,
                        fontSize: 14,
                        fontWeight: 'bold',
                        backgroundColor: 'rgba(247,247,247,1.0)'}}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
                {/*<ScrollView 
                    onScroll={({nativeEvent}) => {
                            if (this.isScrollCloseToBottom(nativeEvent)) {
                                if(this.state.isSearch){
                                    searchSentenceCurrentPage++;
                                    this.SearchSentencesFromPage(this.state.querySearch, searchSentenceCurrentPage);
                                }else{
                                    loadSentenceCurrentPage++;
                                    this.loadSentencesFromPage(loadSentenceCurrentPage);
                                }
                            }
                        }}
                        scrollEventThrottle={400}
                    showsVerticalScrollIndicator={false}>
                    {this.createSentenceBoxesList()}
                </ScrollView>*/}
            </View>
        );
    }
}