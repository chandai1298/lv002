import {StyleSheet} from 'react-native';
import {DIMENSION} from '../CommonStyles';
const LearningStyle = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    padding: 15,
  },
  tchLessionCover: {
    borderColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 250,
    margin: 4,
  },
  tchLession: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 60,
    borderRadius: 250,
  },
});
export {LearningStyle};
