import {StyleSheet, ViewStyle} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontFamily: 'sans-serif-medium',
  },
  notification: {
    backgroundColor: '#04D361', // SUCESS_900
    borderRadius: 10,
    paddingHorizontal: 8,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  quantity: {
    color: '#fff', // TITLE
    fontSize: 12,
    fontFamily: 'sans-serif',
  },
});
