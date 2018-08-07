

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {Flex, Switch} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

import ActionItem from '../../components/action-item';
import FormHeader from '../../components/form-header';
import FormInputItem from '../../components/form-input-item';

export default class ProfileContactSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.pageSturctStyle = createSubPageStruct();
    this.editDone = this.editDone.bind(this);
  }

  static navigationOptions = {
    title: "MY PROFILE",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  editDone(){
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
            <FormHeader leftTitle="Contact Details"></FormHeader>
            <FormInputItem title="Mobile No" placeholder={"+65-83742640"}></FormInputItem>
            <FormInputItem title="Home No"></FormInputItem>
            <FormInputItem title="Office No"></FormInputItem>
            <FormInputItem title="Email" placeholder={"amanda.reeves@gmail.com"}></FormInputItem>
          </ScrollView>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={this.editDone}>
          <Flex style={this.pageSturctStyle.footer} justify="center">
            <Text style={this.pageSturctStyle.footerTitle}>EDIT DONE</Text>
          </Flex>
        </TouchableOpacity>
      </View>
    );
  }
}

