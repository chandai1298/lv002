import {StyleSheet} from 'react-native';
const ProfileStyle = StyleSheet.create({
  // section avatar
  sectionAvatar: {
    flex: 2,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#754ea6',
    borderRadius: 15,
    margin: 10,
  },
  sectionAvtLeft: {
    width: '60%',
  },
  SectionAvtRight: {
    width: '40%',
    alignItems: 'flex-end',
  },
  flexRowIcon: {
    flex: 1,
    flexDirection: 'row',
  },
  widthIcon: {
    width: 25,
    alignItems: 'center',
  },
  containerPadding15: {
    padding: 15,
    paddingBottom: 0,
    paddingTop: 0,
    flex: 6,
  },

  // tab thanh tich
  sectionThanhTich: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    // borderBottomColor: '#9a9a9a',
    // borderBottomWidth: 1,
    // borderRadius: 10,
  },
  sectionLeft: {
    // height: 100,
    // padding: 5,
    justifyContent: 'center',
  },
  sectionLeftImg: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  // tab ban be
  sectionBanBeImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
export {ProfileStyle};
