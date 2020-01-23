import { StyleSheet, Dimensions } from "react-native";

const WINDOW = Dimensions.get('window');

const BoxBorderRadius = 5;
const TitleFontSize = 32;
const TitleFontColor = '#FFF';
const PaddingAndMargins = 12;
const FontFamily = 'iransans';
const ImageBackgroundColor = '#000';
const ImageOpacity = 0.5;

export default StyleSheet.create({
  LanguageBoxContainer: {
    width: WINDOW.width - 24,
    height: (WINDOW.width - 24) / 16 * 9,
    backgroundColor: ImageBackgroundColor,
    margin: PaddingAndMargins,
    borderRadius: BoxBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  LanguageBoxTitle: {
    fontSize: TitleFontSize,
    color: TitleFontColor,
    fontFamily: FontFamily,
    fontWeight: 'bold',
  },
  LanguageBoxImage: {
    width: WINDOW.width - 24,
    height: (WINDOW.width - 24) / 16 * 9,
    position: 'absolute',
    borderRadius: BoxBorderRadius,
    opacity: ImageOpacity,
    resizeMode: 'cover',
  },
});