

import React, {Component} from 'react';
import {Text, View, StatusBar, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, COLORS} from '../../common/styles/base';
import styles from './style';

export default class Support extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "SUPPORT",
    headerBackTitle: "",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  renderSectionItem(title, clickHandler){
    return(
      <TouchableOpacity activeOpacity={0.7} onPress={() => {clickHandler ? clickHandler() : null}}>
        <Flex justify="between" style={styles.sectionItem}>
          <Text style={styles.sectionItemTitle}>{title}</Text>
          <Image
            source={require('../../common/resources/images/account/directionIcon.png')}></Image>
        </Flex>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="default"
          translucent={false}
          backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
          showHideTransition="fade"/>

        <ScrollView>
          <Flex style={styles.header}>
            <Image source={require('./resources/headerIcon.png')} style={styles.headerIcon}></Image>
            <Flex direction="column">
              <Image srouce={require('./resources/helloThere.png')} style={styles.hellThereIcon}></Image>
              <Text style={styles.headerSubTitle}>Before we get you help, lets figure out what you need !!</Text>
            </Flex>

          </Flex>

          {this.renderSectionItem("General Enquiry")}

          <View style={styles.commonSection}>
            <View style={styles.commonSectionHeaderWrapper}>
              <Text style={styles.commonSectionTitle}>ENQUIRIES BY CATEGORY</Text>
            </View>
            <Flex>
              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                <Flex direction="column" align="center" justify="center" style={styles.policyCategoryItem}>
                  <Image style={styles.categoryItemIcon} source={require('./resources/policies.png')}></Image>
                  <Text style={styles.policyCategoryItemTitle}>POLICIES</Text>
                </Flex>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
                <Flex direction="column" align="center" justify="center" style={styles.claimsCategoryItem}>
                  <Image style={styles.claimsCategoryItemIcon} source={require('./resources/claimsIcon.png')}></Image>
                  <Text style={styles.claimsCategoryItemTitle}>CLAIMS</Text>
                </Flex>
              </TouchableOpacity>
            </Flex>
          </View>

          <View style={styles.feedbackSection}>
            <View style={styles.commonSectionHeaderWrapper}>
              <Text style={styles.feedbackSectionTitle}>COMPLAINTS AND FEEDBACKS</Text>
            </View>

            {this.renderSectionItem("Suggestions")}
            {this.renderSectionItem("Complaints")}
          </View>

          <Flex justify="around" style={styles.footerSection}>
            <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
              <Flex direction="column" align="center" justify="center" style={styles.footerSectionItem}>
                <Image style={styles.footerSectionItemIcon} source={require('./resources/faqIcon.png')}></Image>
                <Text style={styles.footerSectionItemTitle}>FAQ</Text>
              </Flex>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
              <Flex direction="column" align="center" justify="center" style={styles.footerSectionItem}>
                <Image style={styles.footerSectionItemIcon} source={require('./resources/nounLocation.png')}></Image>
                <Text style={styles.footerSectionItemTitle}>LOCATE US</Text>
              </Flex>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.3} onPress={() => {}}>
              <Flex direction="column" align="center" justify="center" style={styles.footerSectionItem}>
                <Image style={styles.footerSectionItemIcon} source={require('./resources/nounPhone.png')}></Image>
                <Text style={styles.footerSectionItemTitle}>CONTACT US</Text>
              </Flex>
            </TouchableOpacity>
          </Flex>

          <Flex justify="center" align="center" style={{marginTop: 20, marginBottom: 10}}>
            <Image style={{marginRight: 4}} source={require('./resources/smailIcon.png')}></Image>
            <Text style={styles.footerTag}>We are happy to hear from you</Text>
          </Flex>
        </ScrollView>
      </View>
    );
  }
}

