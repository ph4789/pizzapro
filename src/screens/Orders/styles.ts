import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  header: {
    paddingTop: getStatusBarHeight() + 33,
    paddingBottom: 33,
    backgroundColor: '#B83341', // ou outra cor fixa, substituindo o gradient
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    color: '#fff', // substitua por theme.COLORS.SECONDARY_900 se quiser manter a mesma paleta
  },
});
