import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';

import {styles} from './styles';

export function ButtonBack(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.button} {...props} activeOpacity={0.7}>
      <Text style={styles.icon}>←</Text>
    </TouchableOpacity>
  );
}
