import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Search} from '../../components/Search';
import {ProductCard, ProductProps} from '../../components/ProductCard';
// import happyEmoji from '@assets/happy.png';
import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useAuth} from '../../hooks/auth';

export function Home() {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const {user, signOut} = useAuth();

  function fetchPizzas(value: string) {
    const formattedValue = value.toLowerCase().trim();

    firestore()
      .collection('pizzas')
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then(response => {
        const data = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setPizzas(data);
      })
      .catch(() =>
        Alert.alert('Consulta', 'Não foi possível realizar a consulta.'),
      );
  }

  function handleSearch() {
    fetchPizzas(search);
  }

  function handleSearchClear() {
    setSearch('');
    fetchPizzas('');
  }

  function handleOpen(id: string) {
    const route = user?.isAdmin ? 'product' : 'order';
    navigation.navigate(route, {id});
  }

  function handleAdd() {
    navigation.navigate('product', {});
  }

  useFocusEffect(
    useCallback(() => {
      fetchPizzas('');
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>
            {user?.isAdmin ? '😎 Olá, admin!' : '🧑‍🍳 Olá, garçom!'}
          </Text>
        </View>
        <TouchableOpacity onPress={signOut}>
          <Ionicons name="exit-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Search
        onChangeText={setSearch}
        value={search}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />

      <View style={styles.MenuHeader}>
        <Text style={styles.Title}>Cardápio</Text>
        <Text style={styles.MenuItemNumber}>{pizzas.length} produtos</Text>
      </View>

      <FlatList
        data={pizzas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductCard data={item} onPress={() => handleOpen(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
          paddingBottom: 125,
          paddingHorizontal: 24,
        }}
      />

      {user?.isAdmin && (
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.text}>Cadastrar Produto</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
