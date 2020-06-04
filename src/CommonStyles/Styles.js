import {StyleSheet} from 'react-native';
const Style = StyleSheet.create({
  container: {
    backgroundColor: '#f6ff78',
  },
  //header
  headerContainer: {
    borderBottomColor: '#000',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    height: 70,
    paddingBottom: 12,
  },
  headerContainerIcon: {
    // paddingHorizontal: 20,
    // backgroundColor: 'red',
  },
  //header icon va icon gia
  headerIcon: {
    width: 30,
  },

  listItem: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6ff78',
  },
  item: {
    // backgroundColor: 'red',
  },
  textStyle: {
    color: '#000',
    fontSize: 23,
    fontWeight: '500',
  },

  images: {
    height: 100,
    width: 100,
    borderRadius: 250,
  },
});
export default Style;
