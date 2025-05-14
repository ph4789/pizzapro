import React from 'react';
import {View, TextInput, TextInputProps, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Feather from 'react-native-vector-icons/Feather';

type Props = TextInputProps & {
  onSearch: () => void;
  onClear: () => void;
};

export function Search({onSearch, onClear, ...rest}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#A1A1AA" // Um cinza escuro, pode mudar se quiser
          {...rest}
        />
        <TouchableOpacity style={styles.buttonClear} onPress={onClear}>
          <Feather name="x" size={24} color="#A1A1AA" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Feather name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}
