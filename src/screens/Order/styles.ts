import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    backgroundColor: '#F3F3F3', // cor de fundo desejada
  },
  header: {
    backgroundColor: '#b83341',
    paddingTop: getStatusBarHeight() + 34,
    paddingHorizontal: 24,
  },
  photo: {
    width: 240,
    height: 240,
    borderRadius: 120,
    alignSelf: 'center',
    position: 'relative',
    top: -120,
  },
  form: {
    width: '100%',
    marginTop: -120,
    padding: 24,
  },
  title: {
    fontSize: 32,
    marginBottom: 32,
    textAlign: 'center',
    fontFamily: 'System',
    color: '#29292E',
  },
  label: {
    fontSize: 14,
    marginBottom: 16,
    fontFamily: 'System',
    color: '#29292E',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    width: '48%',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  price: {
    fontSize: 14,
    marginVertical: 24,
    alignSelf: 'flex-end',
    fontFamily: 'System',
    color: '#29292E',
  },
});
