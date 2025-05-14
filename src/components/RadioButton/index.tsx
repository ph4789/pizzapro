import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';
type RadioButtonProps = {
  selected: boolean;
};

type Props = TouchableOpacityProps &
  RadioButtonProps & {
    title: string;
  };

export function RadioButton({title, selected = false, ...rest}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: selected ? '#04D361' : '#E5E5E5', // Verde sucesso ou cinza shape
          backgroundColor: selected ? '#E6F7EF' : '#FFFFFF',
        },
      ]}
      {...rest}>
      <View style={styles.radio}>
        {selected && <View style={styles.selected} />}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
