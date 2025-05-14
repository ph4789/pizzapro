import React, {useState, useEffect} from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Alert,
} from 'react-native';

import {styles} from './styles';

import {useNavigation, useRoute} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {useAuth} from '../../hooks/auth';

import {PIZZA_TYPES} from '../../util/pizzaTypes';
import {ButtonBack} from '../../components/ButtonBack';
import {RadioButton} from '../../components/RadioButton';
import {Button} from '../../components/Button';
import {ProductProps} from '../../components/ProductCard';
import {OrderNavigationProps} from 'src/@types/navigation';

type PizzaResponse = ProductProps & {
  price_sizes: {
    [key: string]: number;
  };
};

export function Order() {
  const [size, setSize] = useState('');
  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);
  const [quantity, setQuantity] = useState(0);
  const [tableNumber, setTableNumber] = useState('');
  const [sendingOrder, setSendingOrder] = useState(false);

  const {user} = useAuth();

  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params as OrderNavigationProps;

  const amount = size ? pizza.price_sizes[size] * quantity : '0,00';

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOrder() {
    if (!size) {
      return Alert.alert('Pedido', 'Selecione um tamanho.');
    }
    if (!quantity) {
      return Alert.alert('Pedido', 'Insira a quantidade.');
    }
    if (!tableNumber) {
      return Alert.alert('Pedido', 'Insira o número da mesa.');
    }
    setSendingOrder(true);

    firestore()
      .collection('orders')
      .add({
        quantity,
        amount,
        pizza: pizza.name,
        size,
        table_number: tableNumber,
        status: 'Preparando',
        waiter_id: user?.id,
        image: pizza.photo_url,
      })
      .then(() => navigation.goBack())
      .catch(() => {
        Alert.alert('Pedido', 'Não foi possível realizar o pedido.');
        setSendingOrder(false);
      });
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(response => setPizza(response.data() as PizzaResponse))
        .catch(() =>
          Alert.alert('Pedido', 'Não foi possível carregar o produto.'),
        );
    }
  }, [id]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ButtonBack onPress={handleGoBack} style={{marginBottom: 108}} />
        </View>

        <Image source={{uri: pizza.photo_url}} style={styles.photo} />

        <View style={styles.form}>
          <Text style={styles.title}>{pizza.name}</Text>

          <Text style={styles.label}>Selecione um tamanho</Text>

          <View style={styles.sizes}>
            {PIZZA_TYPES.map(item => (
              <RadioButton
                key={item.id}
                title={item.name}
                onPress={() => setSize(item.id)}
                selected={size === item.id}
              />
            ))}
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Número da mesa</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={setTableNumber}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Quantidade</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={value => setQuantity(Number(value))}
              />
            </View>
          </View>

          <Text style={styles.price}>Valor de R$ {amount}</Text>

          <Button
            title="Confirmar pedido"
            onPress={handleOrder}
            isLoading={sendingOrder}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
