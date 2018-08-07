

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {Flex, Switch} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

import ActionItem from '../../components/action-item';

export default class Security extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginSwitch: false
    }

    this.pageSturctStyle = createSubPageStruct();
    this.changePassword = this.changePassword.bind(this);
    this.loginSwithOnChanged = this.loginSwithOnChanged.bind(this);
  }

  static navigationOptions = {
    title: "SECURITY",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  changePassword(){
    this.props.navigation.navigate('ChangePassword');
  }

  loginSwithOnChanged(e){
    this.setState({
      loginSwitch: !this.state.loginSwitch
    })
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
              <TouchableOpacity activeOpacity={0.7} onPress={this.changePassword}>
                <ActionItem title="Change Password"></ActionItem>
              </TouchableOpacity>

              <Flex justify="between" style={styles.customizedItem}>
                <Flex>
                  <Text style={styles.title}>Use fingureprint to login</Text>
                </Flex>
                <Flex>
                  <Switch checked={this.state.loginSwitch} color={COLORS.PAGE_FOOTER_BACKGROUND}
                          onChange={this.loginSwithOnChanged}
                  ></Switch>
                </Flex>
              </Flex>
            </View>
          </View>
          <Flex style={styles.customizedFooter} justify="center"></Flex>
        </Flex>
      </View>
    );
  }
}

