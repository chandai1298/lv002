import {StyleSheet} from 'react-native';
import {DIMENSION} from '../CommonStyles';
const Style = StyleSheet.create({
  coverCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowCenter: {
    alignItems: 'center',
  },
  textBold30: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  text18: {
    fontSize: 18,
    // marginBottom: 10,
    fontWeight: 'bold',
  },
  text15: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#e6e6f6',
  },
  text16: {
    fontSize: 16,
  },
  line: {
    width: DIMENSION.width,
    borderWidth: 1,
    borderColor: '#000',
  },
  input: {
    paddingLeft: 13,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    width: DIMENSION.width - 30,
  },
  textColor95d332: {
    color: '#95d332',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textColor56656c: {
    color: '#56656c',
  },

  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  //header 3 component chiều ngang dãn đều
  headerContainer: {
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    height: 60,
    // paddingBottom: 12,
  },

  //header icon va icon gia
  headerIcon: {
    width: 30,
  },

  images: {
    height: 100,
    width: 100,
    borderRadius: 250,
  },
  images2: {
    // height: '100%',
    // width: '100%',
    width: 180,
    height: 100,
    // backgroundColor: 'red',
  },
});
export {Style};
