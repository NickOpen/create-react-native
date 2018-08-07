
import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import {List,  TabBar, Flex} from 'antd-mobile-rn';
import styles from './style';

import UserInfo from '../../components/user';
import ActionItem from '../../components/action-item';
import {COLORS, createSubPageStruct} from '../../common/styles/base';

const Item = List.Item;
const Brief = Item.Brief;

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.pageSturctStyle = createSubPageStruct();
    this.state = {
      selectedTab: 'Account',

      sectionActions: [
        {
          id: 1,
          thumb: require('../../common/resources/images/account/myPolicies.png'),
          title: "My Policies",
          extra: "01"
        },{
          id: 2,
          thumb: require('../../common/resources/images/account/myClaims.png'),
          title: "My Claims",
          extra: "01"
        },{
          id: 3,
          thumb: require('../../common/resources/images/account/myRenewals.png'),
          title: "My Renewals",
          extra: "02"
        },{
          id: 4,
          thumb: require('../../common/resources/images/account/myRecentPurchases.png'),
          title: "My Recent Purchases",
          extra: "0"
        },{
          id: 5,
          thumb: require('../../common/resources/images/account/myEWallet.png'),
          title: "My e-Wallet",
          extra: "$125.50"
        },{
          id: 6,
          thumb: require('../../common/resources/images/account/myRequests.png'),
          title: "My Request"
        }
      ]
    }

    this.gotoMySettings = this.gotoMySettings.bind(this);
    this.gotoInvite = this.gotoInvite.bind(this);
    this.gotoMyProfile = this.gotoMyProfile.bind(this);
    this.gotoSupportPage = this.gotoSupportPage.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  gotoMySettings(){
    this.props.navigation.navigate('MySettings');
  }

  gotoInvite(){
    this.props.navigation.navigate('Invite');
  }

  gotoMyProfile(){
    this.props.navigation.navigate('UserProfile');
  }

  renderActionItem(actions){
    return actions.map(action => {
      return (
        <ActionItem key={action.id} thumb={action.thumb}
                    title= {action.title}
                    style={{
                      paddingLeft: 0,
                      paddingRight: 10,
                      marginLeft: 20,
                      marginRight: 20
                    }}
                    extra={action.extra}>
        </ActionItem>
      );
    })
  }

  renderAccountContent() {
    return (
      <View style={{flex: 1, zIndex: 999}}>
        <StatusBar
          barStyle="default"
          translucent={true}
          backgroundColor={COLORS.PAGE_FOOTER_BACKGROUND}
          showHideTransition="fade"
        />

        <ImageBackground
          source={require('../../common/resources/images/account/mask.png')}
          style={styles.headerContainer}>

          <TouchableWithoutFeedback onPress={this.gotoMyProfile}>
            <View style={styles.headerCover}>
              <Image
                style={styles.headerCoverSettingIcon}
                source={require('../../common/resources/images/account/settingsIcon.png')}>
              </Image>

              <Text style={styles.headerCoverTitle}>ACCOUNT</Text>

              <Flex style={styles.headerUserInfo} justify="between">
                <TouchableWithoutFeedback onPress={this.gotoMySettings}>
                  <View>
                    <UserInfo theme="light"
                              avator={require('../../common/resources/images/account/profilePicture.png')}
                              name="Amanda Reeves"
                              points="104"
                              membershipLevel="Bronze">
                    </UserInfo>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.gotoInvite}>
                  <View>
                    <ImageBackground
                      source={require('../../common/resources/images/account/inviteIcon.png')}
                      style={styles.inviteBg}>
                      <Flex style={styles.inviteInfo}>
                        <Text style={styles.inviteTitle}>INVITE</Text>
                        <Image source={require('../../common/resources/images/account/shape.png')}></Image>
                      </Flex>
                    </ImageBackground>
                  </View>
                </TouchableWithoutFeedback>

              </Flex>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>

        <View style={styles.accountItemContainer}>
          {this.renderActionItem(this.state.sectionActions)}
        </View>
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }

  gotoSupportPage(){
    this.props.navigation.navigate('Support');
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={this.pageSturctStyle.fixedPage}>
        {
          this.renderAccountContent()
        }
        <Flex justify="around" align="center" style={styles.tabBarContainer}>
          <TouchableOpacity activeOpacity={0.4} onPress={()=>{this.gotoSupportPage()}}>
            <Flex direction="column" justify="center" align="center" style={styles.tabBarItem}>
              <Image style={styles.tabBarItemIcon}
                     source={require("./../../common/resources/images/account/supportIcon.png")}></Image>
              <Text style={{...styles.tabBarItemTitle, ...{color: "#ABB2BA"}}}>SUPPORT</Text>
            </Flex>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} onPress={()=>{}}>
            <View style={styles.tabBarItem}>
              <Image style={styles.tabBarHomeIcon}
                     source={require("./../../common/resources/images/account/home.jpg")}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.4} onPress={()=>{}}>
            <Flex direction="column" justify="center" align="center" style={styles.tabBarItem}>
              <Image style={styles.tabBarItemIcon}
                     source={require("./../../common/resources/images/account/accountIcon.png")}></Image>
              <Text style={styles.tabBarItemTitle}>ACCOUNT</Text>
            </Flex>
          </TouchableOpacity>
        </Flex>
      </View>
    );
  }
}