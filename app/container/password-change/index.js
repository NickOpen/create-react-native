

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

export default class PasswordChanged extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPwd: "",
      newPwd: "",
      retypeNewPwd: ""
    }

    this.pageSturctStyle = createSubPageStruct();
    this.saveChanged = this.saveChanged.bind(this);
  }

  static navigationOptions = {
    title: "CHANGE PASSWORD",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  saveChanged(){
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={this.pageSturctStyle.fixedPage}>
        <StatusBar
          barStyle="default"
          translucent={false}
          backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
          showHideTransition="fade"/>

        <View style={this.pageSturctStyle.fixedContent}>
          <ScrollView scrollEnabled={false}>
            <View style={styles.section}>
              <Flex justify="between" style={styles.inputItemContainer}>
                <View style={styles.inputItemHeader}>
                  <Text style={styles.inputItemTitle}>Current Password</Text>
                </View>
                <TextInput
                  placeholder={this.props.placeholder}
                  style={styles.inputItemInput}
                  onChangeText={(value) => {this.setState({currentPwd: value})}}
                  value={this.state.currentPwd}/>
              </Flex>

              <Flex justify="between" style={styles.inputItemContainer}>
                <View style={styles.inputItemHeader}>
                  <Text style={styles.inputItemTitle}>New Password</Text>
                </View>
                <TextInput
                  placeholder={this.props.placeholder}
                  style={styles.inputItemInput}
                  onChangeText={(value) => {this.setState({newPwd: value})}}
                  value={this.state.newPwd}/>
              </Flex>

              <Flex justify="between" style={styles.inputItemContainer}>
                <View style={styles.inputItemHeader}>
                  <Text style={styles.inputItemTitle}>Retype Password</Text>
                </View>
                <TextInput
                  placeholder={this.props.placeholder}
                  style={styles.inputItemInput}
                  onChangeText={(value) => {this.setState({retypeNewPwd: value})}}
                  value={this.state.retypeNewPwd}/>
              </Flex>
            </View>
          </ScrollView>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={this.saveChanged}>
          <Flex style={this.pageSturctStyle.footer} justify="center">
            <Text style={this.pageSturctStyle.footerTitle}>SAVE CHANGES</Text>
          </Flex>
        </TouchableOpacity>
      </View>
    );
  }
}

