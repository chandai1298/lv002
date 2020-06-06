import {StyleSheet} from 'react-native';
const Style = StyleSheet.create({
  // Style chính
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  paddingContainer15: {
    padding: 15,
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

  headerContainerIcon: {
    // paddingHorizontal: 20,
    // backgroundColor: 'red',
  },

  //header icon va icon gia
  headerIcon: {
    width: 30,
  },
  title: {
    fontWeight: 'bold',
  },
  // Danh sách các item trên trang home
  listItem: {
    marginTop: 20,
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  // Style các component text
  textStyle: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },

  // Style ảnh avatar và các bài học
  images: {
    height: 100,
    width: 100,
    borderRadius: 250,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    height: 40,
    borderRadius: 10,
    justifyContent: 'space-between',
    borderColor: '#000',
    borderWidth: 1,
  },
  flexDirectionRowItem: {
    paddingTop: 8,
    paddingLeft: 20,
  },
});
export default Style;
