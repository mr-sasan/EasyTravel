/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * Title: Language Box
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight, Animated} from 'react-native';
import Tts from 'react-native-tts';

/**
 * Import Style File
 * Description: Style of the Language Box is imported!
 */
import CommonStyles from '../Styles/CommonStyles';

export class SentenceBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            DropDownHeight: 0,
            animation: 'auto',
            allowSpeach: true,
        };
    }

    componentDidMount(){
        Tts.addEventListener('tts-start', (event) => this.setState({ allowSpeach: false }) );
        Tts.addEventListener('tts-finish', (event) => this.setState({ allowSpeach: true }) );
        Tts.addEventListener('tts-cancel', (event) => this.setState({ allowSpeach: true }) );
    }

    toggle(){
        if(this.state.isOpen){
            Animated.timing(this.state.animation,
                {
                    toValue: 0,
                    duration: 250,
                }
            ).start();
            this.setState({ isOpen: false });
        }else{
            Animated.timing(this.state.animation,
                {
                    toValue: this.state.DropDownHeight,
                    duration: 250,
                }
            ).start();
            this.setState({ isOpen: true });
        }
    }

    FirstTime = false;
    getHeightofDropDownSection(layout){
        if(!this.FirstTime){
            this.setState({ DropDownHeight: layout.height });
            this.setState({ animation: new Animated.Value(0) });
            this.FirstTime=true;
        }
    }

    SpeachTranselatedText(text){
        if(!this.state.allowSpeach) return;
        Tts.getInitStatus().then(() => {
                Tts.setDucking(true);
                Tts.speak(text, { androidParams: { KEY_PARAM_PAN: 0, KEY_PARAM_VOLUME: 1, KEY_PARAM_STREAM: 'STREAM_NOTIFICATION' } });
            }, (err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
            }
        });
    }

    render() {
        return(
        <TouchableHighlight onPress={this.toggle.bind(this)} underlayColor="#f1f1f1">
            <View style={[CommonStyles.container, CommonStyles.BoxesContainer]}>
                <View style={CommonStyles.SentenceBox}>
                    <Text style={CommonStyles.SentencePersianText}>{this.props.PersianText}</Text>
                    <Animated.View onLayout={(event) => { this.getHeightofDropDownSection(event.nativeEvent.layout) }} 
                        style={[CommonStyles.DropDownSection, { height: this.state.animation } ]}> 
                        <Text style={CommonStyles.SentencePersianText}>{this.props.TranselatedText}</Text>
                        <View style={CommonStyles.SpeachButtonsContainer}>
                            <TouchableHighlight 
                                                style={{width: 20, height: 20, marginRight: 10}}
                                                onPress={() => { this.SpeachTranselatedText(this.props.TranselatedText); }} 
                                                underlayColor="transparent">
                                <Image source={require('../Images/play-icon.png')} 
                                style={{width: 20, height: 20}} />
                            </TouchableHighlight>
                        </View>
                    </Animated.View>
                </View>
            </View>
        </TouchableHighlight>
        );
    }
}