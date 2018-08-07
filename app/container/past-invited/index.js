

import React, {Component} from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

export default class PastInvite extends Component {
  constructor(props) {
    super(props);

    this.pageSturctStyle = createSubPageStruct();
  }

  static navigationOptions = {
    //header: null
    title: "PAST INVITES",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  render() {
    return (
      <View>
        <StatusBar
          barStyle="default"
          translucent={false}
          backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
          showHideTransition="fade"/>

        <Flex direction="column" justify="end">
          <View style={this.pageSturctStyle.content}>
            <Flex justify="center" align="center" style={styles.userAvatorContainer}>
              <Image style={styles.usersIcon} source={require('./resources/users.png')}></Image>
            </Flex>

            <Flex justify="center" align="center" style={styles.earnMoneyItem}>
              <Text style={styles.earnMoneyValue}>EARNED : $10</Text>
            </Flex>

            <Flex justify="between"  style={styles.earnedItem}>
              <View>
                <Text style={styles.earnedItemName}>Michelle Barber</Text>
                <Text style={styles.earnedItemContact}>S1112346Q</Text>
              </View>
              <Text style={styles.earnedItemValue}>$10</Text>
            </Flex>
          </View>
          <Flex style={styles.footer} justify="center" align="center">
            <Image source={require('./resources/smile.png')}></Image>
            <Text style={styles.footerTitle}>The base things in life comes as a suprise</Text>
          </Flex>
        </Flex>
      </View>
    );
  }
}

