import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

import {getRealPathFromURI} from '../../utils/getRealPathFromURI';
import {useRoute, useNavigation} from '@react-navigation/native';
import {ProductNavigationProps} from '../../@types/navigation';
import {ButtonBack} from '../../components/ButtonBack';
import {Photo} from '../../components/Photo';
import {InputPrice} from '../../components/InputPrice';
import {Button} from '../../components/Button';
import {ProductProps} from '../../components/ProductCard';

import {styles} from './styles';

type PizzaResponse = ProductProps & {
  photo_path: string;
  price_sizes: {
    p: string;
    m: string;
    g: string;
  };
};

export function Product() {
  const [photoPath, setPhotoPath] = useState('');
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params as ProductNavigationProps;

  async function handlePickImage() {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (result.didCancel) return;
      if (result.errorCode) {
        console.error('Erro:', result.errorMessage);
        Alert.alert('Erro', 'Não foi possível acessar a galeria.');
        return;
      }

      if (result.assets && result.assets[0]?.uri) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível abrir a galeria.');
    }
  }

  async function handleAdd() {
    if (!name.trim())
      return Alert.alert('Cadastro', 'Informe o nome da pizza.');
    if (!description.trim())
      return Alert.alert('Cadastro', 'Informe a descrição.');
    if (!image) return Alert.alert('Cadastro', 'Selecione uma imagem.');
    if (!priceSizeP || !priceSizeM || !priceSizeG)
      return Alert.alert('Cadastro', 'Informe o preço de todos os tamanhos.');

    setIsLoading(true);

    try {
      const fileName = new Date().getTime();
      const reference = storage().ref(`/pizzas/${fileName}.png`);

      let imageUri = image;
      if (Platform.OS === 'android' && imageUri.startsWith('content://')) {
        imageUri = await getRealPathFromURI(imageUri);
      }

      const pathToFile = image.startsWith('file://')
        ? image
        : `file://${image}`;
      await reference.putFile(pathToFile);

      const photo_url = await reference.getDownloadURL();

      await firestore()
        .collection('pizzas')
        .add({
          name,
          name_insensitive: name.toLowerCase().trim(),
          description,
          price_sizes: {
            p: priceSizeP,
            m: priceSizeM,
            g: priceSizeG,
          },
          photo_url,
          photo_path: reference.fullPath,
        })
        .then(() => navigation.navigate('home'))
        .catch(() => {
          setIsLoading(false);
          Alert.alert('Cadastro', 'Erro ao cadastrar.');
        });
    } catch (error) {}
  }

  async function handleUpdate() {
    if (!name.trim())
      return Alert.alert('Atualização', 'Informe o nome da pizza.');
    if (!description.trim())
      return Alert.alert('Atualização', 'Informe a descrição.');
    if (!priceSizeP || !priceSizeM || !priceSizeG)
      return Alert.alert(
        'Atualização',
        'Informe o preço de todos os tamanhos.',
      );

    setIsLoading(true);

    try {
      await firestore()
        .collection('pizzas')
        .doc(id)
        .update({
          name,
          name_insensitive: name.toLowerCase().trim(),
          description,
          price_sizes: {
            p: priceSizeP,
            m: priceSizeM,
            g: priceSizeG,
          },
        });

      Alert.alert('Atualização', 'Pizza atualizada com sucesso.');
      navigation.navigate('home');
    } catch (error) {
      setIsLoading(false);
      Alert.alert('Atualização', 'Erro ao atualizar.');
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  function handleDelete() {
    firestore()
      .collection('pizzas')
      .doc(id)
      .delete()
      .then(() => {
        storage()
          .ref(photoPath)
          .delete()
          .then(() => navigation.navigate('home'));
      });
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then(response => {
          const product = response.data() as PizzaResponse;

          setName(product.name);
          setImage(product.photo_url);
          setDescription(product.description);
          setPriceSizeP(product.price_sizes.p);
          setPriceSizeM(product.price_sizes.m);
          setPriceSizeG(product.price_sizes.g);
          setPhotoPath(product.photo_path);
        });
    }
  }, [id]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <ButtonBack onPress={handleGoBack} />
          <Text style={styles.title}>
            {id ? 'Editar Pizza' : 'Cadastrar Pizza'}
          </Text>
          {id ? (
            <TouchableOpacity
              onPress={handleDelete}
              style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Deletar</Text>
            </TouchableOpacity>
          ) : (
            <View style={{width: 20}} />
          )}
        </View>

        <View style={styles.uploadContainer}>
          <Photo uri={image} />
          {!id && (
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handlePickImage}>
              <Text style={styles.uploadButtonText}>Carregar</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da pizza"
            value={name}
            onChangeText={setName}
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputGroupHeader}>
              <Text style={styles.label}>Descrição</Text>
              <Text style={styles.maxCharacters}>
                {description.length} de 60 caracteres
              </Text>
            </View>

            <TextInput
              style={[styles.input, {height: 80}]}
              placeholder="Descrição"
              multiline
              maxLength={60}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <Text style={styles.label}>Tamanhos e preços:</Text>

          <View style={styles.priceRow}>
            <InputPrice
              size="P"
              value={priceSizeP}
              onChangeText={setPriceSizeP}
              keyboardType="numeric"
            />
            <InputPrice
              size="M"
              value={priceSizeM}
              onChangeText={setPriceSizeM}
              keyboardType="numeric"
            />
            <InputPrice
              size="G"
              value={priceSizeG}
              onChangeText={setPriceSizeG}
              keyboardType="numeric"
            />
          </View>

          {id ? (
            <Button
              title="Salvar Alterações"
              isLoading={isLoading}
              onPress={handleUpdate}
            />
          ) : (
            <Button
              title="Cadastrar"
              isLoading={isLoading}
              onPress={handleAdd}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
