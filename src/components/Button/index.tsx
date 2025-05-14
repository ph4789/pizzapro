import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
  TouchableOpacityProps,
} from 'react-native';
import {styles} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export function Button({title, isLoading = false, onPress, ...rest}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading}
      {...rest}>
      {isLoading ? (
        <ActivityIndicator color="#FFF" style={styles.load} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
