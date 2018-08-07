

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default settingStyles = StyleSheet.create({
  userAvatorContainer:{
    backgroundColor: "#FFF",
    width: base.DIMENSIONS.FULL_WIDTH,
    paddingTop: 30,
    paddingBottom: 30,
  },

  inviteTitleContainer: {
    paddingLeft:60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    backgroundColor: "#FFF",
  },

  inviteTitle: {
    fontSize: base.FONT_SIZE.ITEM_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    textAlign: 'center',
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  inviteSubTitleContainer: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 0,
    paddingBottom: 10,
    textAlign: 'center',
    backgroundColor: "#FFF",
  },

  inviteSubTitle: {
    fontSize: 14,
    color: base.FONT_COLOR.ITEM_SUB_TITLE,
    textAlign: 'center',
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT
  },

  inviteCodeInfoContainer: {
    backgroundColor: "#FFF",
    paddingTop: 10,
  },

  inviteCodeTitle: {
    fontSize: base.FONT_SIZE.SM,
    color: base.FONT_COLOR.ITEM_SUB_TITLE,
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT,
    paddingBottom: 6
  },

  inviteCode: {
    borderWidth: 2  ,
    borderColor: base.COLORS.SPERATE_LINE,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 6,
    borderStyle:'dashed'
  },

  inviteCodeValue: {
    fontSize: base.FONT_SIZE.PAGE_FOOTER_BUTTON_FONT_SIZE,
    color: base.COLORS.PAGE_HEADER_BACKGROUND,
    fontSize: 20,
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM
  },

  sendInviteButton: {
    borderColor: base.COLORS.PAGE_HEADER_BACKGROUND,
    borderRadius: 26,
    backgroundColor: base.COLORS.PAGE_HEADER_BACKGROUND,
  },

  sendInviteButtonTitle: {
    color: "#FFF",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM,
    fontSize: 14
  }
})