

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import {Flex, Switch} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';

import FormHeader from '../../components/form-header';
import FormInputItem from '../../components/form-input-item';

export default class ProfileAddressSettings extends Component {
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
              <FormHeader leftTitle="Residential Address"></FormHeader>
              <FormInputItem title="Unit No" placeholder={"1212121"}></FormInputItem>
              <FormInputItem title="Postal No" placeholder={"893567"}></FormInputItem>
              <FormInputItem title="Block No" placeholder={"MMK32434"}></FormInputItem>
              <FormInputItem title="Street Name" placeholder={"cehui road"}></FormInputItem>
              <FormInputItem title="Street Name" placeholder={"chuang xin da sha"}></FormInputItem>
              <FormInputItem title="Country" placeholder={"China"}></FormInputItem>
            </ScrollView>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={this.editDone}>
            <Flex style={this.pageSturctStyle.fixedFooter} justify="center">
              <Text style={this.pageSturctStyle.footerTitle}>EDIT DONE</Text>
            </Flex>
          </TouchableOpacity>
        </View>
    );
  }
}

