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
});
export {SettingStyle};
