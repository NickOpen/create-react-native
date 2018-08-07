
import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import { LocaleProvider } from 'antd-mobile-rn';
import enUS from 'antd-mobile-rn/lib/locale-provider/en_US';

import AccountScreen from './app/container/account';
import MySettingsScreen from './app/container/my-settings';

import InviteScreen from './app/container/invite';
import PastInviteScreen from './app/container/past-invited';

import InsuranceListScreen from './app/container/insurance';
import NewInsuranceScreen from './app/container/insurance-new';

import SecurityScreen from './app/container/security';
import PasswordChange from './app/container/password-change';

import ProfileScreen from './app/container/profile';
import ProfileAddressSettingScreen from './app/container/profile-address-settings';
import ProfileContactSettingScreen from './app/container/profile-contact-settings';

import SupportScreen from './app/container/support';

const RootStack = createStackNavigator(
  {
    Account: AccountScreen,

    Invite: InviteScreen,
    PastInvite: PastInviteScreen,

    MySettings: MySettingsScreen,

    Insurance: InsuranceListScreen,
    NewInsurance: NewInsuranceScreen,

    Security: SecurityScreen,
    ChangePassword: PasswordChange,

    UserProfile: ProfileScreen,
    UserProfileAddressSetting: ProfileAddressSettingScreen,
    UserProfileContactSetting: ProfileContactSettingScreen,

    Support: SupportScreen
  },
  {
    initialRouteName: 'Account',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <RootStack />
      </LocaleProvider>
    );
  }
}
