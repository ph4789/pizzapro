import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 82,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#29292E', // Secondary_900
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#04D361', // Sucess_900
  },
  title: {
    fontSize: 16,
    color: '#29292E', // Secondary_900
    fontFamily: 'System', // ou a fonte que você quiser
  },
});
