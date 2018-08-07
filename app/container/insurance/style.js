

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default insuranceStyles = StyleSheet.create({
  insuranceItem: {
    backgroundColor: "#FFF",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  insuranceItemName: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  insuranceItemContact: {
    paddingTop: 6,
    fontSize: base.FONT_SIZE.SM,
    color: "#A5A7B6",
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },
  editItem: {
    width: 23,
    height: 23
  }
})