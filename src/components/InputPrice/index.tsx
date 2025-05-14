import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

type Props = TextInputProps & {
  size: string;
};

export function InputPrice({size, ...rest}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.size}>
        <Text style={styles.label}>{size}</Text>
      </View>

      <Text style={styles.label}>R$</Text>

      <TextInput style={styles.input} keyboardType="number-pad" {...rest} />
    </View>
  );
}
