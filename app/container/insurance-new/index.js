

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, ScrollView, TextInput, Image} from 'react-native';
import {Flex, List, DatePicker, Button} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

import FormInputItem from '../../components/form-input-item';

export default class NewInsurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      mobileNo: "",
      identityNo: "",
      email: "",
      birthday: null,
      selectDate: undefined,

      membershipTypes: [
        {
          title: "SPOUSE",
          selected: true
        },{
          title: "CHILD",
          selected: false
        },{
          title: "OTHERS",
          selected: false
        }
      ]
    }

    this.pageSturctStyle = createSubPageStruct();
    this.addNew = this.addNew.bind(this);
    this.selectedMembership = this.selectedMembership.bind(this);
  }

  static navigationOptions = {
    title: "EDIT CONTACT",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  addNew(){
    //TODO.

    this.props.navigation.goBack();
  }

  onSelectDateChange(value){
    this.setState({ value });
  }

  selectedMembership(title){
    let membershipTypes = this.state.membershipTypes;

    membershipTypes.forEach((membership) => {
      if(membership.title == title){
        membership.selected = !membership.selected;
      }else{
        membership.selected = false;
      }
    });

    this.setState({
      membershipTypes: membershipTypes
    })
  }

  renderMembershiButton(title, selected, callback){
    return (
      <TouchableOpacity key={title} activeOpacity={0.4} onPress={() => {callback ? callback(title): null}}>

        {selected ? (
          <Flex style={styles.membershipBtnSelected} justify="center">
            <Text style={styles.membershipBtnTitleSelected}>{title}</Text>
          </Flex>
        ) : (
          <Flex style={styles.membershipBtnUnSelected} justify="center">
            <Text style={styles.membershipBtnTitleUnSelected}>{title}</Text>
          </Flex>
        )}
      </TouchableOpacity>
    );
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
            <List>
              <FormInputItem title="Name" placeholder={"Michel Doe"}></FormInputItem>
              <FormInputItem title="Mobile No" placeholder={"+65-83742630"}></FormInputItem>
              <FormInputItem title="Identity No" placeholder={"S34444790A"}></FormInputItem>

              <Flex justify="between" style={styles.inputItemContainer}>
                <View style={styles.inputItemHeader}>
                  <Text style={styles.inputItemTitle}>Birth Date</Text>
                </View>

                <TextInput
                  editable={false}
                  placeholder={"16/12/2008"}
                  style={styles.inputItemInput}
                  onChangeText={(text) => {/*this.setState({text})*/}}
                  value={this.state.birthday}
                />
                <DatePicker value={this.state.selectDate}
                            mode="date"
                            minDate={new Date(1980, 7, 6)}
                            maxDate={new Date(2020, 11, 3)}
                            onChange={this.onSelectDateChange}
                            format="DD/MM/YYYY">
                  <List.Item style={{marginRight: 20, width: 42, height: 42}}>
                    <Image style={styles.datePickerIcon} source={require('./resources/datePickerIcon.png')}></Image>
                  </List.Item>
                </DatePicker>
              </Flex>

              <View style={styles.relationshipItemContainer}>
                <View style={styles.relationshipItemHeader}>
                  <Text style={styles.inputItemTitle}>Relationship</Text>
                </View>
                <View style={styles.realationshipTypes}>
                  <Flex direction="row" justify="between">
                    {this.state.membershipTypes.map(item => {
                      return this.renderMembershiButton(item.title, item.selected, this.selectedMembership)
                    })}
                  </Flex>
                </View>
              </View>

              <FormInputItem title="Email" placeholder={"michael.doe@gmail.com"}></FormInputItem>
            </List>

            <TouchableOpacity activeOpacity={0.4} onPress={() => {}}>
              <Flex justify="center" align="center" style={styles.deleteItem}>
                <Text style={styles.deleteItemTitle}>DELETE CONTACT</Text>
              </Flex>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={this.addNew}>
          <Flex style={this.pageSturctStyle.footer} justify="center">
            <Text style={this.pageSturctStyle.footerTitle}>EDIT DONE</Text>
          </Flex>
        </TouchableOpacity>
      </View>
    );
  }
}

