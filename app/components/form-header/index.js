
import React, {Component} from 'react';
import {Flex} from 'antd-mobile-rn';

import { Text, View,  TouchableOpacity} from 'react-native';
import styles from './style';

export default class FormHeader extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Flex justify="between" style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderTitle}>{this.props.leftTitle}</Text>
        <TouchableOpacity activeOpacity={0.7}
                          onPress={() => {this.props.editEventHandler ? this.props.editEventHandler : null}}>
          <Text style={styles.sectionHeaderExtra}>{this.props.rightTitle}</Text>
        </TouchableOpacity>
      </Flex>
    );
  }
}

