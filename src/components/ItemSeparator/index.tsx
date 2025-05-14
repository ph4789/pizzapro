import React from 'react';
import {View, StyleSheet} from 'react-native';

export function ItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#09091f',
  },
});
