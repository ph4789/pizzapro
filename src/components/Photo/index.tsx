import React from 'react';
import {Image, View, Text} from 'react-native';
import {styles} from './styles';

type Props = {
  uri: string | null;
};

export function Photo({uri}: Props) {
  if (uri) {
    return <Image source={{uri}} style={styles.image} />;
  }

  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderTitle}>Nenhuma foto{'\n'} carregada</Text>
    </View>
  );
}
