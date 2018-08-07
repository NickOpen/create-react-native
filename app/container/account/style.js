

import {StyleSheet} from 'react-native';
import * as base from '../../common/styles/base.js';

export default accountStyles = StyleSheet.create({
  container: {
  },

  headerContainer: {
    width: base.DIMENSIONS.FULL_WIDTH,
    height: 146,
  },

  headerCoverTitle:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: base.FONT_SIZE.HEADER_TITLE,
  },

  headerCover: {
    flex: 1,
    position: 'relative',
    marginTop: 35,
    marginBottom: 10
  },

  headerCoverSettingIcon: {
    position: 'absolute',
    right: 10,
    top: 1,
    width: 17,
    height: 17
  },

  headerUserInfo: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 14
  },

  itemIcon: {
    width: 34,
    height: 34,
    marginRight: 15
  },

  inviteBg: {
    width: 116,
    height: 36,
    paddingLeft: 10
  },

  inviteInfo: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16
  },

  inviteTitle: {
    textAlign: 'center',
    color: "#FFF",
    marginRight: 6
  },

  accountItemContainer: {
    backgroundColor: "#FFF",
    height: base.DIMENSIONS.FULL_HEIGHT
  },

  tabBar:{
    height: 80,
    backgroundColor: 'red'
  },

  tabBarIcon: {
    height: 19,
    width: 19
  },

  /**
   * tabbar
   */
  tabBarContainer: {
    height: 50,
    width: base.DIMENSIONS.FULL_WIDTH,
    backgroundColor: "#FFF",
    borderTopColor: base.COLORS.SPERATE_LINE,
    borderTopWidth: 1
  },
  tabBarItem: {

  },

  tabBarItemIcon: {
    width: 19,
    height: 19
  },

  tabBarItemTitle: {
    marginTop: 4,
    fontSize: 10,
    color: "#00ADBB"
  },

  tabBarHomeItem: {
    marginBottom: 16
  },
  tabBarHomeIcon: {
    width: 42,
    height: 42
  }
})