import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {styles} from './styles';
type Props = {
  title: string;
  color: string;
  notification?: string;
};

export function BottomMenu({title, color, notification}: Props) {
  const noNotification = !notification || notification === '0';

  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color}]}>{title}</Text>

      {!noNotification && (
        <View style={styles.notification}>
          <Text style={styles.quantity}>{notification}</Text>
        </View>
      )}
    </View>
  );
}
