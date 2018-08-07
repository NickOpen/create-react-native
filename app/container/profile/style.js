

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default settingStyles = StyleSheet.create({
  container: {
    backgroundColor: base.COLORS.CONTAINER_BG_COLOR,
    width: base.DIMENSIONS.FULL_WIDTH,
  },

  section: {
    backgroundColor: "#FFF",
    paddingLeft: 14,
    paddingRight: 14,
    width: base.DIMENSIONS.FULL_WIDTH,
    marginBottom: 6
  },

  commonSectionItem: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FFF",
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  sectionItemTitle: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  sectionItemExtra: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_SUB_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR
  },

  sectionHeader: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FFF",
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  sectionHeaderTitle: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontWeight: "600",
    fontFamily: base.FONT_FAMILY.MUKTA_SEMIBOLD
  },

  sectionHeaderExtra: {
    color: base.COLORS.PAGE_HEADER_BACKGROUND,
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    fontWeight: "600",
    fontFamily: base.FONT_FAMILY.MUKTA_SEMIBOLD
  },

  profilePictureHeader:{
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#FFF",
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },
  profilePicture: {
    marginRight: 10,
    height: 50,
    width: 50,

    borderColor: base.COLORS.PAGE_HEADER_BACKGROUND,
    borderWidth: 2,
    borderRadius: 25
  }
})