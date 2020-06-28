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
  },
  line: {
    margin: 20,
    width: DIMENSION.width,
    borderWidth: 1,
    borderColor: '#000',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
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
    borderColor: '#000',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    height: 70,
    paddingBottom: 12,
  },

  //header icon va icon gia
  headerIcon: {
    width: 30,
  },

  // Style ảnh avatar và các bài học
  images: {
    height: 100,
    width: 100,
    borderRadius: 250,
  },

  flexDirectionRow: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 10,
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 5,
  },
  flexDirectionRowItem: {
    paddingTop: 8,
    paddingLeft: 20,
  },
});
export {Style};
