import {StyleSheet} from 'react-native';
import {DIMENSION} from '../CommonStyles';
const QuestionStyle = StyleSheet.create({
  headerQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  progressHeader: {
    width: '80%',
    alignItems: 'center',
  },
  iconHeader: {
    alignItems: 'flex-start',
    width: '10%',
  },
  textHeader: {
    marginLeft: 3,
    fontSize: 15,
  },
  tchAnswer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    width: 80,
    height: 30,
    marginBottom: 10,
  },
  btnSubmit: {
    paddingTop: 10,
    paddingBottom: 10,
    width: DIMENSION.width - 30,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#5bca06',
  },
});
export {QuestionStyle};
