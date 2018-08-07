

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

export default class Insurance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      insurances: [
        {
          id: 1,
          name: "Michale Doe",
          contact: "G3447650Q"
        },{
          id: 2,
          name: "Emily Emanuel",
          contact: "G3447650Q"
        },{
          id: 3,
          name: "Michale Barber",
          contact: "G3447650Q"
        }
      ]
    };

    this.pageSturctStyle = createSubPageStruct();
    this.newInsurance = this.newInsurance.bind(this);
  }

  static navigationOptions = {
    //header: null
    title: "MANAGE MY CIRCLE",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  newInsurance(){
    this.props.navigation.navigate('NewInsurance');
  }

  editInsurance(insurance){
    this.props.navigation.navigate('NewInsurance');
  }


  renderInsuranceItem(insurance){
    return (
        <Flex justify="between" key={insurance.id}  style={styles.insuranceItem}>
          <View>
            <Text style={styles.insuranceItemName}>{insurance.name}</Text>
            <Text style={styles.insuranceItemContact}>{insurance.contact}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => {this.editInsurance(insurance)}}>
            <Image
              style={styles.editItem}
              source={require('./resources/editIcon.png')}></Image>
          </TouchableOpacity>
        </Flex>

    );
  }
  render() {
    return (
      <View>
        <StatusBar
          barStyle="default"
          backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
          translucent={false}
          showHideTransition="fade"/>


        <Flex direction="column" justify="end">
          <View style={this.pageSturctStyle.content}>
            {this.state.insurances.map(insurance => {
              return this.renderInsuranceItem(insurance);
            })}
          </View>

          <TouchableOpacity activeOpacity={0.8} onPress={this.newInsurance}>
            <Flex style={this.pageSturctStyle.footer} justify="center">
              <Text style={this.pageSturctStyle.footerTitle}>ADD NEW</Text>
            </Flex>
          </TouchableOpacity>

        </Flex>
      </View>
    );
  }
}

