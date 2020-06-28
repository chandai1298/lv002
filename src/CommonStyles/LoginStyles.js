import {StyleSheet} from 'react-native';
import {DIMENSION} from '../CommonStyles';
const LoginStyles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    width: DIMENSION.width - 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  formDN: {
    flex: 1,
    // justifyContent: 'center',
    padding: 15,
    // alignItems: 'center',
  },
});
export {LoginStyles};
