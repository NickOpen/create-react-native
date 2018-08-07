import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default actionItemStyles = StyleSheet.create({
  item:{
    backgroundColor: "#FFF",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },
  icon: {
    width: 34,
    height: 34,
    marginRight: 15
  },

  title: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  extra: {
    marginRight: 10,
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE
  }
})
