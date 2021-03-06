

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default securityStyles = StyleSheet.create({
  inputItemContainer:{
    backgroundColor: "#FFF",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  inputItemHeader: {
    maxWidth: 160,
    minWidth: 140,
    marginRight: 20,
    borderRightWidth: 1,
    borderRightColor: base.COLORS.SPERATE_LINE,

    paddingTop: 4,
    paddingBottom: 4
  },

  inputItemTitle: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  inputItemInput: {
    flex: 1,
    height:40
  },

  notice: {
    fontSize: base.FONT_SIZE.SM,
    color: base.COLORS.PAGE_HEADER_BACKGROUND,

    marginTop: 12
  }
})