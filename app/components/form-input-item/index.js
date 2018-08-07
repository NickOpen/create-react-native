
import React, {Component} from 'react';
import {Flex} from 'antd-mobile-rn';

import { Text, View, TextInput } from 'react-native';
import styles from './style';

export default class FormInputItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    }
  }

  render(){
    return (
      <Flex justify="between" style={styles.inputItemContainer}>
        <View style={styles.inputItemHeader}>
          <Text style={styles.inputItemTitle}>{this.props.title}</Text>
        </View>
        <TextInput
          placeholder={this.props.placeholder}
          style={styles.inputItemInput}
          onChangeText={(value) => {this.setState({value})}}
          value={this.state.value}/>
      </Flex>
    );
  }
}

