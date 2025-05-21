import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';

import {Routes} from './src/routes';
import {AuthProvider} from './src/hooks/auth';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar style="dark" backgroundColor="#fff" />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
