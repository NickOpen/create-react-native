/**
 * common styles parameters.
 */

import {StyleSheet, Dimensions} from 'react-native';

export const DIMENSIONS= {
  FULL_HEIGHT: Dimensions.get('window').height,
  FULL_WIDTH: Dimensions.get('window').width
}

export const COLORS  = {
  primary: '#226B74',
  secondary: '#254B5A',
  PAGE_HEADER_BACKGROUND: "#1BADBA",
  PAGE_FOOTER_BACKGROUND: "#1BADBA",
  SPERATE_LINE: "#F2F3F8",
  CONTAINER_BG_COLOR: "#FAFBFE"
}

export const FONT_SIZE = {
  SM: 12,
  MD: 18,
  LG: 28,
  PRIMARY: 'Cochin',
  HEADER_TITLE: 15,
  ITEM_TITLE: 15,
  PAGE_FOOTER_BUTTON_FONT_SIZE: 16,
}

export const FONT_FAMILY = {
  MUKAT_REGULAR: "Mukta-Regular",
  MUKTA_MEDIUM: "Mukta-Medium",
  MUKTA_LIGHT: "Mukta-Light",
  MUKTA_SEMIBOLD: "Mukta-SemiBold",
  MUKTA_BOLD: "Mukta-Bold"
}

export const FONT_COLOR = {
  ITEM_TITLE: "#6A6E87",
  ITEM_SUB_TITLE: "#A5A7B6",
}

export const HEIGHT = {
  PAGE_HEADER: 60,
  PAGE_FOOTER: 50,
  ITEM_SPACE: 6
}

export const LENGTH = {
  PADDING: 14
}

export const subPageHeaderStyle = {
  headerStyle: {
    backgroundColor: COLORS.PAGE_HEADER_BACKGROUND,
    height: HEIGHT.PAGE_HEADER,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '400',
    fontSize: FONT_SIZE.HEADER_TITLE,
    textAlign: 'center',
    flex: 1,
  }
}

export function createSubPageStruct(overrides = {}){
  return StyleSheet.create({...{
    content: {
      position: 'relative',
      backgroundColor: COLORS.CONTAINER_BG_COLOR,
      width: DIMENSIONS.FULL_WIDTH,
      height: DIMENSIONS.FULL_HEIGHT - HEIGHT.PAGE_FOOTER - HEIGHT.PAGE_HEADER - 20
    },
    footer: {
      backgroundColor: COLORS.PAGE_FOOTER_BACKGROUND,
      textAlign: "center",
      width: DIMENSIONS.FULL_WIDTH,
      height: HEIGHT.PAGE_FOOTER
    },

    footerTitle: {
      color: "#FFF",
      fontSize: FONT_SIZE.PAGE_FOOTER_BUTTON_FONT_SIZE,
      fontFamily: FONT_FAMILY.MUKTA_BOLD
    },

    fixedPage: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: COLORS.CONTAINER_BG_COLOR,
    },
    fixedContent: {
      flex: 1,
      backgroundColor: COLORS.CONTAINER_BG_COLOR,
      width: DIMENSIONS.FULL_WIDTH,
    },
    fixedFooter: {
      backgroundColor: COLORS.PAGE_FOOTER_BACKGROUND,
      textAlign: "center",
      width: DIMENSIONS.FULL_WIDTH,
      height: HEIGHT.PAGE_FOOTER,
      fontFamily: FONT_FAMILY.MUKTA_BOLD
    }
  }, ...overrides})
}
