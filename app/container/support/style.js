

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default SupportStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: base.COLORS.CONTAINER_BG_COLOR
  },

  header: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,

    marginBottom: base.HEIGHT.ITEM_SPACE,

    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },


  headerIcon: {
    width: 118,
    height: 95,
    marginRight: 15
  },

  hellThereIcon: {
    height: 46,
    width: 110
  },
  headerSubTitle: {
    fontSize: base.FONT_SIZE.HEADER_TITLE,
    color: base.FONT_COLOR.ITEM_SUB_TITLE,
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT,
    width: 220
  },

  itemWrapper: {
    backgroundColor: "#FFF",
    paddingTop: 6,
    paddingBottom: 6,
  },


  sectionItem: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    backgroundColor: "#FFF",
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  sectionItemTitle: {
    fontSize: base.FONT_SIZE.PAGE_FOOTER_BUTTON_FONT_SIZE,
    color: base.FONT_COLOR.ITEM_TITLE,
    fontFamily: base.FONT_FAMILY.MUKAT_REGULAR,
    fontWeight: "600"
  },

  commonSection: {
    paddingTop: 4,
    paddingBottom: 20,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    backgroundColor: '#FFF',
    marginTop: 6
  },

  feedbackSection: {
    paddingTop: 4,
    backgroundColor: '#FFF',
    marginTop: 6
  },

  commonSectionTitle: {
    fontSize: 12,
    color: "#7F868F",
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT
  },
  commonSectionHeaderWrapper:{
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  },

  feedbackSectionTitle: {
    fontSize: 12,
    color: "#7F868F",
    marginLeft: base.LENGTH.PADDING,
  },
  policyCategoryItem: {
    width: 132,
    height: 132,
    backgroundColor: "#88E2E3",
    marginRight: 20,
    marginTop: 20,
    borderRadius: 6
  },
  categoryItemIcon: {
    width: 36,
    height: 49,
    marginBottom: 10
  },
  policyCategoryItemTitle: {
    fontSize: 16,
    color: "#429F9F",
    fontFamily: base.FONT_FAMILY.MUKTA_BOLD
  },

  claimsCategoryItem: {
    width: 132,
    height: 132,
    backgroundColor: "#7DB4F4",
    marginRight: 20,
    marginTop: 20,
    borderRadius: 6
  },
  claimsCategoryItemIcon: {
    width: 42,
    height: 48,
    marginBottom: 10
  },
  claimsCategoryItemTitle: {
    fontSize: 16,
    color: "#3172B8",
    fontWeight: "600"
  },


  footerSection: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5
  },

  footerSectionItem: {
    width: 132,
    height: 87,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: base.COLORS.SPERATE_LINE,
    borderRadius: 4
  },
  footerSectionItemIcon: {
    marginBottom: 6
  },
  footerSectionItemTitle: {
    fontSize: 12,
    color: "#6A6E87",
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM
  },
  footerTag: {
    fontSize: 14,
    color: "#C4C4C4",
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT
  }
})