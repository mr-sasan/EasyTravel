import { StyleSheet, Dimensions } from "react-native";

const WINDOW = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
  },
  BoxesContainer: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap', 
    flex: 1, 
    backgroundColor: '#f7f8fa',
  },
  SentenceBox: {
    width: WINDOW.width - 24,
    backgroundColor: '#FFF',
    elevation: 2,
    borderRadius: 5,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 8,
    marginBottom: 8,
    overflow: 'hidden',
  },
  SentencePersianText: {
    fontFamily: 'iransans',
    fontSize: 14,
    paddingVertical: 8,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    color: '#444449',
    flex:1,
  },
  DropDownSection: {
    backgroundColor: '#c9d2d8',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  SpeachButtonsContainer: {
    flexDirection: 'row',
  },
  SelectLanguageLoading: {
    marginTop: 20,
  },
  
  
});