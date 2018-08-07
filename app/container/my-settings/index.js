

import React, {Component} from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

import UserInfo from '../../components/user';
import ActionItem from '../../components/action-item';


export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.pageSturctStyle = createSubPageStruct();
    this.gotoInsurance = this.gotoInsurance.bind(this);
    this.gotoSecurity = this.gotoSecurity.bind(this);
  }

  static navigationOptions = {
    //header: null
    title: "MY SETTINGS",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  gotoInsurance(){
    this.props.navigation.navigate('Insurance');
  }

  gotoSecurity(){
    this.props.navigation.navigate('Security');
  }
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
            <View style={styles.section}>

              <Flex justify="between" style={styles.userItem}>
                <Flex>
                  <UserInfo theme="dark"
                            name="Amanda Reeves"
                            avator={require('../../common/resources/images/account/profilePicture.png')}
                            email="amanda.reeves@gmail.com">
                  </UserInfo>
                </Flex>
                <Flex>
                  <Image
                    source={require('../../common/resources/images/account/directionIcon.png')}></Image>
                </Flex>
              </Flex>




              <TouchableOpacity activeOpacity={0.7} onPress={this.gotoInsurance}>
                <ActionItem title="Manage My Circle"></ActionItem>
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <TouchableOpacity activeOpacity={0.7} onPress={this.gotoSecurity}>
                <ActionItem title="Security"></ActionItem>
              </TouchableOpacity>
            </View>

            <View style={styles.section}>
              <ActionItem title="Feedback"></ActionItem>
              <ActionItem title="About TIQ"></ActionItem>
            </View>
          </View>
          <Flex style={this.pageSturctStyle.footer} justify="center">
            <Text style={this.pageSturctStyle.footerTitle}>LOGOUT</Text>
          </Flex>
        </Flex>
      </View>
    );
  }
}

