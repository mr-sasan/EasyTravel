/**
 * Easy Travel Application
 * https://Link-will-be-in-future.com/
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions'

/**
 * Screens Import Section
 * Description: All Screens will be import in this section!
 */
import SelectLanguageScreen from "./Assets/Screens/SelectLanguage";
import CategoriesScreen from "./Assets/Screens/Categories";
import SentencesListScreen from "./Assets/Screens/SentencesList";

/**
 * Routes For Navigation
 * Description: All Screens will be add into Routes Object for Router Navigation
 */
 const handleCustomTransition = ({ scenes }) => {
  const prevScene = scenes[scenes.length - 2];
  const nextScene = scenes[scenes.length - 1];
 
  // Custom transitions go there
  if (prevScene
    && prevScene.route.routeName === 'SelectLanguage'
    && nextScene.route.routeName === 'Categories') {
    return zoomIn();
  } else if (prevScene
    && prevScene.route.routeName === 'ScreenB'
    && nextScene.route.routeName === 'ScreenC') {
    return zoomOut();
    }
  return fromLeft();
}

const AppNavigator = createStackNavigator(
  {
    SelectLanguage: {
      screen: SelectLanguageScreen,
    },
    Categories: {
      screen: CategoriesScreen,
    },
    SentencesList: {
      screen: SentencesListScreen,
    },
  },
  {
    initialRouteName: 'SelectLanguage',
    transitionConfig: (nav) => handleCustomTransition(nav),
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default createAppContainer(AppNavigator);

//#region Defualt App Codes
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={CommonStyles.container}>

//         {/* Heading 1 Text Element Start */}
//         <View style={CommonStyles.Heading1Container}>
//           <Text style={CommonStyles.Heading1Text}>انتخاب زبان</Text>
//         </View>
//         {/* Heading 1 Text Element End */}

//         <View style={[CommonStyles.container, {backgroundColor: 'red'}]}>

//         </View>

//       </View>
//     );
//   }
// }
//#endregion