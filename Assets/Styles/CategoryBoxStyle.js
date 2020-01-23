import { StyleSheet, Dimensions } from "react-native";

const WINDOW = Dimensions.get('window');

const BoxWidthAndHeight = (WINDOW.width / 2) - 24;
const BoxBorderRadius = 16;
const BoxBackgroundColor = '#FFF';
const BoxElevation = 24;
const BoxPadding = 10;

const CategoryImageWidthAndHeight = WINDOW.width / 8;
const CategoryImageBackSquareWidthAndHeight = (WINDOW.width / 6.2) / 4 * 2.8;
const CategoryContextContainerWidth = (WINDOW.width / 2) - 44;
const CategoryContextContainerHeight = ((WINDOW.width / 2) - 24) / 3;

const TitleFontSize = 16;
const TitleColor = '#000';
const TitleFontWeight = 'bold';

const DescriptionFontSize = 12;
const DescriptionColor = '#b6b5bf';

const ContainerMargin = 12;
const FontFamily = 'iransans';
const GrayBackgroundColor = '#f0f2f988';




export default StyleSheet.create({
  CategoryContainer: {
    width: BoxWidthAndHeight,
    height: BoxWidthAndHeight,
    borderRadius: BoxBorderRadius,
    backgroundColor: BoxBackgroundColor,
    elevation: BoxElevation,
    margin: ContainerMargin,
  },
  CategoryTouchableNativeFeedback: {
    width: BoxWidthAndHeight,
    height: BoxWidthAndHeight,
  },
  InnterContainer: {
    width: BoxWidthAndHeight,
    height: BoxWidthAndHeight,
    padding: BoxPadding,   
    justifyContent: 'space-between',
  },
  CategoryImage: {
    resizeMode: 'cover',
    width: CategoryImageWidthAndHeight,
    height: CategoryImageWidthAndHeight,
    marginRight: 8,
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  CategoryContextContainer: {
    width: CategoryContextContainerWidth,
    height: CategoryContextContainerHeight,
    backgroundColor: GrayBackgroundColor,
    borderRadius: 8,
    paddingTop: 6,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
  CategoryImageBackSquare: {
    width: CategoryImageBackSquareWidthAndHeight,
    height: CategoryImageBackSquareWidthAndHeight,
    borderRadius: BoxBorderRadius,
    backgroundColor: GrayBackgroundColor,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  CategoryTitle: {
    color: TitleColor,
    fontFamily: FontFamily,
    fontWeight: TitleFontWeight,
    fontSize: TitleFontSize,
  },
  CategoryDescription: {
    color: DescriptionColor,
    fontFamily: FontFamily,
    fontSize: DescriptionFontSize,
    paddingBottom: 4,
  },
});