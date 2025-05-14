import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {styles} from './styles';

export type TypeProps = 'primary' | 'secondary';

type Props = TextInputProps & {
  type?: TypeProps;
};

export function Input({type = 'primary', ...rest}: Props) {
  const inputStyle =
    type === 'primary' ? styles.inputPrimary : styles.inputSecondary;

  const placeholderTextColor = type === 'primary' ? '#572D31' : '#A18C8E'; // Cores do seu tema

  return (
    <TextInput
      style={inputStyle}
      placeholderTextColor={placeholderTextColor}
      {...rest}
    />
  );
}
