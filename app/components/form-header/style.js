import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default formHeaderStyles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1,

    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING
  },

  sectionHeaderTitle: {
    fontSize: base.FONT_SIZE.PAGE_FOOTER_BUTTON_FONT_SIZE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKTA_SEMIBOLD,
    fontWeight: "600"
  },

  sectionHeaderExtra: {
    color: base.COLORS.PAGE_HEADER_BACKGROUND,
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    fontWeight: "600"
  },
})
