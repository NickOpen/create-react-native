

import React, {Component} from 'react';
import {Text, View, StatusBar, ScrollView, Image, TouchableOpacity, ImagePickerIOS} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, COLORS} from '../../common/styles/base';
import styles from './style';

let ImagePicker = require('react-native-image-picker');

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: undefined
    };

    this.renderProfileSectionItem = this.renderProfileSectionItem.bind(this);
    this.gotoEditAddress = this.gotoEditAddress.bind(this);
    this.gotoEditContact = this.gotoEditContact.bind(this);
    this.selectImages = this.selectImages.bind(this);
  }

  static navigationOptions = {
    //header: null
    title: "EDIT CONTACT",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  renderProfileSectionItem(name, extra){
    return (
      <Flex justify="between" style={styles.commonSectionItem}>
        <Text style={styles.sectionItemTitle}>{name}</Text>
        <Text style={styles.sectionItemExtra}>{extra}</Text>
      </Flex>
    );
  }

  gotoEditAddress(){
    this.props.navigation.navigate('UserProfileAddressSetting');
  }

  gotoEditContact(){
    this.props.navigation.navigate('UserProfileContactSetting');
  }

  selectImages(){
    let options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.launchImageLibrary(options, (response)  => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    return (
      <View>
        <StatusBar
          barStyle="default"
          backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
          translucent={false}
          showHideTransition="fade"/>

        <ScrollView>
          <View style={styles.section}>

            <TouchableOpacity activeOpacity={0.7} onPress={this.selectImages}>
              <Flex justify="between" style={styles.profilePictureHeader}>
                <Text style={styles.sectionHeaderTitle}>Profile Picture</Text>
                <Flex justify="between">
                  {
                    this.state.avatarSource
                      ? (<Image style={styles.profilePicture} source={this.state.avatarSource}></Image>)
                      : (
                          <Image style={styles.profilePicture}
                            source={require('./resources/userProfileAvator.png')}></Image>
                      )

                  }
                  <Image source={require('./resources/directionIcon.png')}></Image>
                </Flex>
              </Flex>
            </TouchableOpacity>
            {this.renderProfileSectionItem("name", "Amanda Reeves")}
            {this.renderProfileSectionItem("Identification Number", "S1234567")}
            {this.renderProfileSectionItem("Date of Birth", "11/08/1990")}
            {this.renderProfileSectionItem("Gender", "Female")}
            {this.renderProfileSectionItem("Marital Status", "Signal")}
          </View>

          <View style={styles.section}>
            <Flex justify="between" style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderTitle}>Residential Address</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={this.gotoEditAddress}>
                <Text style={styles.sectionHeaderExtra}>EDIT</Text>
              </TouchableOpacity>
            </Flex>
            {this.renderProfileSectionItem("Unit No", "1212121")}
            {this.renderProfileSectionItem("Postal No", "893567")}
            {this.renderProfileSectionItem("Block No", "MMK32434")}
            {this.renderProfileSectionItem("Street Name", "cehui road")}
            {this.renderProfileSectionItem("Building Name", "chuang xin da sha")}
            {this.renderProfileSectionItem("Country", "China")}
          </View>

          <View style={styles.section}>
            <Flex justify="between" style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderTitle}>Contact Details</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={this.gotoEditContact}>
                <Text style={styles.sectionHeaderExtra}>EDIT</Text>
              </TouchableOpacity>
            </Flex>
            {this.renderProfileSectionItem("Mobile No", "+65-83742640")}
            {this.renderProfileSectionItem("Home No", "S1234567")}
            {this.renderProfileSectionItem("Office No", "11/08/1990")}
            {this.renderProfileSectionItem("Email", "amanda.reeves@gmail.com")}
          </View>

        </ScrollView>
      </View>
    );
  }
}

