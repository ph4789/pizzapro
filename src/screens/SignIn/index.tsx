import React, {useState} from 'react';
import {
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {useAuth} from '@hooks/auth';
import brandImg from '@assets/LogoImage.png';

import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {styles} from './styles';

export function SignIn() {
  // const [email, setEmail] = useState(
  //   __DEV__ ? 'pedrohenrykue.ph7@gmail.com' : '',
  // );
  // const [password, setPassword] = useState(__DEV__ ? '123123' : '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn, isLogging, forgotPassword} = useAuth();

  function handleSignIn() {
    signIn(email, password);
  }

  function handleForgotPassword() {
    forgotPassword(email);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          style={styles.content}
          contentContainerStyle={{paddingBottom: 32}}
          showsVerticalScrollIndicator={false}>
          <Image source={brandImg} style={styles.brand} />
          <Text style={styles.title}>Login</Text>

          <Input
            placeholder="E-mail"
            placeholderTextColor="#ccc"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />

          <Input
            placeholder="Senha"
            placeholderTextColor="#ccc"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordLabel}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <Button
            title="Acessar"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
