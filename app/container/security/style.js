

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default securityStyles = StyleSheet.create({
  section: {
    marginBottom: 10,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    backgroundColor: "#FFF"
  },

  customizedItem:{
    backgroundColor: "#FFF",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  title: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  customizedFooter: {
    backgroundColor: base.COLORS.CONTAINER_BG_COLOR,
    textAlign: "center",
    width: base.DIMENSIONS.FULL_WIDTH,
    height: base.HEIGHT.PAGE_FOOTER
  }
})