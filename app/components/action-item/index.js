
import React, {Component} from 'react';
import {Flex} from 'antd-mobile-rn';

import { Text, View, Image } from 'react-native';
import styles from './style';

export default class ActionItem extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Flex justify="between" style={this.props.style ? {...styles.item, ...this.props.style} : styles.item}>
        <Flex>
          {this.props.thumb ? (<Image style={styles.icon} source={this.props.thumb}></Image>) : null }

          <Text style={styles.title}>{this.props.title}</Text>
        </Flex>
        <Flex>
          {this.props.extra ? ( <Text style={styles.extra}>{this.props.extra}</Text>) : null}

          <Image
            source={require('../../common/resources/images/account/directionIcon.png')}></Image>
        </Flex>
      </Flex>
    );
  }
}

