import React from 'react';
import {View, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import {styles} from './styles';

export type ProductProps = {
  id: string;
  photo_url: string;
  name: string;
  description: string;
};

type Props = RectButtonProps & {
  data: ProductProps;
};

export function ProductCard({data, ...rest}: Props) {
  return (
    <View style={styles.container}>
      <RectButton style={styles.content} {...rest}>
        <Image source={{uri: data.photo_url}} style={styles.image} />
        <View style={styles.details}>
          <View style={styles.identification}>
            <Text style={styles.name}>{data.name}</Text>
            <Feather name="chevron-right" size={24} color="#000" />
          </View>
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </RectButton>
      <View style={styles.line} />
    </View>
  );
}
