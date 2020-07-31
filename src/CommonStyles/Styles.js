import {StyleSheet} from 'react-native';
import {DIMENSION} from '../CommonStyles';
const Style = StyleSheet.create({
  backgroundColorMain: {
    backgroundColor: '#e7eefe',
  },
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
  text20: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  text18: {
    fontSize: 18,
    fontWeight: 'bold',
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
    paddingLeft: 15,
    height: 50,
    fontSize: 18,
    borderColor: '#754ea6',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    width: DIMENSION.width - 30,
  },

  textColor754ea6: {
    color: '#754ea6',
  },
  textColore6e6f6: {
    color: '#e6e6f6',
  },
  textColor687ae4: {
    color: '#687ae4',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },

  //header 3 component chiều ngang dãn đều
  headerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: '#754ea6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 27,
    height: 60,
    // paddingBottom: 8,
  },

  //header icon va icon gia
  headerIcon: {
    width: 50,
  },

  images: {
    height: 130,
    width: 130,
    borderRadius: 250,
  },
  images2: {
    // height: '100%',
    // width: '100%',
    width: 180,
    height: 100,
    // backgroundColor: 'red',
  },
  boxShadow: {
    // backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
});
export {Style};
