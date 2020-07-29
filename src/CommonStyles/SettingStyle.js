import {StyleSheet} from 'react-native';
import {DIMENSION} from '../CommonStyles';
const SettingStyle = StyleSheet.create({
  // section avatar
  sectionAvatar: {
    flex: 2,
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 0,
    paddingTop: 3,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    margin: 10,
  },
  sectionIn4: {
    padding: 15,
    paddingBottom: 0,
  },
  // tab ban be
  sectionBanBeImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 5,
    padding: 10,
  },
  viewChangPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  btnChangPassword: {
    // width: '45%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: 2,
    // paddingTop: 5,
    // paddingBottom: 5,
    // borderRadius: 5,
  },
  btnSettings: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
export {SettingStyle};
