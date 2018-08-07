

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default newInsuranceStyles = StyleSheet.create({
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
    minWidth: 120,
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


  relationshipItemContainer:{
    backgroundColor: "#FFF",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: base.LENGTH.PADDING,
    paddingRight: base.LENGTH.PADDING,
    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  relationshipItemHeader: {
    maxWidth: 160,
    minWidth: 120,
    marginRight: 20,

    paddingTop: 4,
    paddingBottom: 4
  },
  realationshipTypes: {
    width: base.DIMENSIONS.FULL_WIDTH,
    paddingRight: 20,
    marginTop: 6,
    marginBottom: 6
  },

  relationshipTypeBtn: {
    height:30,
    width: 80,
    borderColor: base.COLORS.SPERATE_LINE,
  },

  deleteItem: {
    backgroundColor: '#FFF',
    marginTop: 10,
    paddingTop: 16,
    paddingBottom: 16,


    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,

    borderBottomColor: base.COLORS.SPERATE_LINE,
    borderBottomWidth: 1
  },

  deleteItemTitle: {
    color: 'red',
    fontSize: 14,
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM
  },



  membershipBtnSelected: {
    maxWidth: 117,
    minWidth: 100,
    maxHeight: 34,
    minHeight: 26,

    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center',
    backgroundColor: base.COLORS.PAGE_HEADER_BACKGROUND,
    borderRadius: 4
  },
  membershipBtnTitleSelected: {
    fontSize: 14,
    color: "#FFF",
    fontFamily: base.FONT_FAMILY.MUKTA_MEDIUM
  },

  membershipBtnUnSelected: {
    maxWidth: 117,
    minWidth: 100,
    maxHeight: 34,
    minHeight: 26,
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center',
    backgroundColor: "#FFF",
    borderColor: "#DBDBE0",
    borderWidth: 1,
    borderRadius: 4
  },
  membershipBtnTitleUnSelected: {
    fontSize: 14,
    color: "#A5A7B6",
    fontFamily: base.FONT_FAMILY.MUKTA_LIGHT
  }
})