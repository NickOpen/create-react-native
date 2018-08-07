

import React, {Component} from 'react';
import {Text, View, StatusBar, Image, TouchableOpacity} from 'react-native';
import {Flex} from 'antd-mobile-rn';
import {subPageHeaderStyle, createSubPageStruct, COLORS} from '../../common/styles/base';
import styles from './style';

export default class Invite extends Component {
  constructor(props) {
    super(props);

    this.pageSturctStyle = createSubPageStruct();
    this.gotoPastInvites = this.gotoPastInvites.bind(this);
  }

  static navigationOptions = {
    //header: null
    title: "INVITE",
    headerStyle: subPageHeaderStyle.headerStyle,
    headerTintColor: subPageHeaderStyle.headerTintColor,
    headerTitleStyle: subPageHeaderStyle.headerTitleStyle,
    headerRight: <View />
  };

  gotoPastInvites(){
    this.props.navigation.navigate('PastInvite');
  }

  render() {
    return (
    <View style={this.pageSturctStyle.fixedPage}>
      <StatusBar
        barStyle="default"
        translucent={false}
        backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
        showHideTransition="fade"/>

      <View style={{...this.pageSturctStyle.fixedContent, ...{backgroundColor: '#FFF'}}}>
        <Flex justify="center" align="center" style={styles.userAvatorContainer}>
          <Image style={styles.usersIcon} source={require('./resources/users.png')}></Image>
        </Flex>

        <Flex justify="center" align="center" style={styles.inviteTitleContainer}>
          <Text style={styles.inviteTitle}>
            Share this special code with friends.
          </Text>
        </Flex>

        <Flex justify="center" align="center" style={styles.inviteSubTitleContainer}>
          <Text style={styles.inviteSubTitle}>
            Share this special code with friends. When they use Tiq for the first time, they'll get $5 off
            their first purchase and you'll get $5 off yours.
          </Text>
        </Flex>

        <Flex direction="column" justify="center" align="center" style={styles.inviteCodeInfoContainer}>
          <Text style={styles.inviteCodeTitle}>YOUR CODE</Text>
          <View style={styles.inviteCode}>
            <Text style={styles.inviteCodeValue}>tiq-amenda773ue</Text>
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <Flex  justify="center" align="center" style={{paddingTop: 36, paddingBottom: 36}}>
              <View style={styles.sendInviteButton}>
                <Text style={styles.sendInviteButtonTitle}>SEND INVITES</Text>
              </View>
            </Flex>
          </TouchableOpacity>
        </Flex>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={this.gotoPastInvites}>
        <Flex style={this.pageSturctStyle.footer} justify="center">
          <Text style={this.pageSturctStyle.footerTitle}>PAST INVITES</Text>
        </Flex>
      </TouchableOpacity>
    </View>
    );
  }
}

