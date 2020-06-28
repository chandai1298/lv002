import {StyleSheet} from 'react-native';
const ProfileStyle = StyleSheet.create({
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
  sectionAvtLeft: {
    width: '70%',
  },
  SectionAvtRight: {
    width: '30%',
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
    borderRadius: 10,
  },
  sectionLeft: {
    // height: 100,
    // padding: 5,
    justifyContent: 'center',
  },
  sectionLeftImg: {
    height: 65,
    width: 50,
    borderRadius: 10,
  },
  // tab ban be
  sectionBanBeImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
export {ProfileStyle};
