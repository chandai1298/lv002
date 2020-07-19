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
  tchLession: {
    backgroundColor: '#25aff7',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 250,
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center',
    width: 180,
    height: 60,
  },
});
export {LearningStyle};
