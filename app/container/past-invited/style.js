

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default pastInviteStyles = StyleSheet.create({
  userAvatorContainer:{
    backgroundColor: "#FFF",
    width: base.DIMENSIONS.FULL_WIDTH,
    paddingTop: 50,
    paddingBottom: 30,
  },

  earnMoneyItem: {
    height: 60,
    textAlign: 'center',
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1,
    borderTopColor: base.COLORS.SPERATE_LINE,
    borderTopWidth: 1
  },

  earnMoneyValue: {
    fontSize: base.FONT_SIZE.MD,
    color: base.COLORS.PAGE_HEADER_BACKGROUND,
    fontFamily: base.FONT_FAMILY.MUKTA_SEMIBOLD
  },

  earnedItem: {
    backgroundColor: "#FFF",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 18,
    paddingRight: 18,
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  earnedItemName: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR,
  },

  earnedItemContact: {
    paddingTop: 6,
    fontSize: base.FONT_SIZE.SM,
    color: "#A5A7B6",
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR,
  },

  earnedItemValue: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKTA_SEMIBOLD,
  },

  footer: {
    height: 60,
    width: base.DIMENSIONS.FULL_WIDTH,
    backgroundColor: base.COLORS.CONTAINER_BG_COLOR,
  },
  footerTitle: {
    marginLeft: 6,
    fontSize: base.FONT_SIZE.SM,
    color:"#A5A7B6",
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR,
  }
})