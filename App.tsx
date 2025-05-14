import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {SignIn} from './src/screens/SignIn';
import {Product} from './src/screens/Product';
import {Home} from './src/screens/Home';
import {Order} from './src/screens/Order';
import {Orders} from './src/screens/Orders';

import {Routes} from './src/routes';

import {AuthProvider} from './src/hooks/auth';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
