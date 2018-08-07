
import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default userInfoStyles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  avator: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10
  },

  userInfo: {

  },

  userName: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM
  },

  userMembership: {
    paddingTop: 4,
    fontSize: 13,
    color: "#FFF",
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT
  },

  darkUserName: {
    fontSize: 16,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM
  },

  darkMembership: {
    paddingTop: 2,
    fontSize: 13,
    color: base.FONT_COLOR.ITEM_SUB_TITLE,
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT
  },
})