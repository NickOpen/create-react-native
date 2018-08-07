
import React, {Component} from 'react';
import {Text, View, Image, TouchableWithoutFeedback  } from 'react-native';
import {Flex} from 'antd-mobile-rn';

import styles from './style';

export default class User extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let userInfo = null;
    if(this.props.theme == "light"){
      userInfo = (
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Amanda Reeves</Text>
          {
            (this.props.points && this.props.membershipLevel)
              ? <Text style={styles.userMembership}>{this.props.points} points | {this.props.membershipLevel} Member</Text>
              : <Text style={styles.userMembership}>{this.props.email}</Text>
          }
        </View>
      );
    }else{
      userInfo = (
        <View style={styles.userInfo}>
          <Text style={styles.darkUserName}>{this.props.name}</Text>
          {
            (this.props.points && this.props.membershipLevel)
              ? <Text style={styles.darkMembership}>{this.props.points} points | {this.props.membershipLevel} Member</Text>
              : <Text style={styles.darkMembership}>{this.props.email}</Text>
          }

        </View>
      );
    }
    return (
      <Flex style={styles.container}>
        <Image style={styles.avator}
            source={this.props.avator}>
        </Image>

        {userInfo}
      </Flex>
    );
  }
}
