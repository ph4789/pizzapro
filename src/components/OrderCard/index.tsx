import React from 'react';
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';

type StatusTypeProps = 'Preparando' | 'Pronto' | 'Entregue';

export type OrderProps = {
  id: string;
  pizza: string;
  image: string;
  status: StatusTypeProps;
  table_number: string;
  quantity: number;
};

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
};

const statusStyles = {
  Preparando: {
    container: {
      backgroundColor: '#FFF3E4',
      borderWidth: 1,
      borderColor: '#FF9000',
    },
    text: {
      color: '#FF9000',
    },
  },
  Pronto: {
    container: {
      backgroundColor: '#a3d304',
    },
    text: {
      color: '#FFFFFF',
    },
  },
  Entregue: {
    container: {
      backgroundColor: '#04D361',
    },
    text: {
      color: '#000',
    },
  },
};

export function OrderCard({index, data, ...rest}: Props) {
  const status: StatusTypeProps = 'Entregue';
  const currentStatusStyle = statusStyles[status];

  return (
    <TouchableOpacity
      style={[styles.container, index % 2 !== 0 && styles.borderLeft]}
      {...rest}>
      <Image source={{uri: data.image}} style={styles.image} />

      <Text style={styles.name}>{data.pizza}</Text>
      <Text style={styles.description}>
        {data.table_number} ⋄ Qtd: {data.quantity}
      </Text>

      <View style={[styles.statusContainer, currentStatusStyle.container]}>
        <Text style={[styles.statusLabel, currentStatusStyle.text]}>
          {data.status}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
