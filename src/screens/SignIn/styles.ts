// styles.js (ou styles.ts caso esteja usando TypeScript)

import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  content: {
    width: '100%',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 32,
    paddingBottom: getBottomSpace() + 48,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 24,
    alignSelf: 'flex-start',
    fontFamily: 'DMSerifDisplay_400Regular', // substitua se necessário
    color: 'red', // substitua por theme.COLORS.TITLE se for usar ThemeProvider
  },
  brand: {
    height: 340,
    marginLeft: -340,
    marginTop: 64,
    marginBottom: 32,
    resizeMode: 'contain',
  },
  forgotPasswordButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'DMSans_400Regular', // substitua se necessário
    color: '#000', // substitua por theme.COLORS.TITLE se for usar ThemeProvider
  },
});
